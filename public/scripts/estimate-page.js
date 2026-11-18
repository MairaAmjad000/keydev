/*
 * Project estimate wizard. The steps are rendered by the EstimateWizard component; this script only
 * navigates between them (reading the data-next attributes), remembers the answers, submits the final form
 * and sets up the phone field. Ported from the estimate template's inline script.
 */
$(document).ready(function () {
  var root = document.getElementById('estimate-root');
  if (!root) return;
  var finalForm = document.getElementById('final-form');
  var hist = [];
  var ans = {};
  var cur = root.querySelector('.tab-pane.active');
  if (cur) cur = cur.id;

  function exists(key) { return key && document.getElementById('step-' + key); }

  function show(id) {
    [].forEach.call(root.querySelectorAll('.tab-pane'), function (x) { x.classList.remove('active', 'in', 'show'); });
    var t = document.getElementById(id);
    t.classList.add('active');
    void t.offsetWidth;
    t.classList.add('in', 'show');
    cur = id;
    if (id === 'final-form') {
      $('.old_app_link').toggle(hist.indexOf('step-old_app_ios_android') > -1);
    }
    var top = document.getElementById('estimate').getBoundingClientRect().top + window.pageYOffset - 120;
    if (window.pageYOffset > top) window.scrollTo(0, top);
  }
  function go(next) {
    hist.push(cur);
    show(exists(next) ? 'step-' + next : 'final-form');
  }
  function back() { if (hist.length) show(hist.pop()); }

  [].forEach.call(root.querySelectorAll('.tab-pane[data-type]'), function (pane) {
    var type = pane.getAttribute('data-type');
    var key = pane.id.replace('step-', '');
    var question = pane.getAttribute('data-question');
    var stepNext = pane.getAttribute('data-next');
    pane.addEventListener('click', function (e) {
      var a = e.target.closest('a.development');
      var radio = e.target.closest('input[type=radio]');
      var bk = e.target.closest('[data-back]');
      var nx = e.target.closest('[data-next-btn]');
      if (a) {
        e.preventDefault();
        ans[key] = { question: question, answer: a.getAttribute('data-label') };
        go(a.getAttribute('data-next'));
      } else if (radio) {
        ans[key] = { question: question, answer: radio.value };
        setTimeout(function () { go(radio.getAttribute('data-next') || stepNext); }, 150);
      } else if (bk) {
        e.preventDefault();
        back();
      } else if (nx) {
        e.preventDefault();
        if (type === 'multiple_choice') {
          var checked = [].slice.call(pane.querySelectorAll('input:checked')).map(function (c) { return c.value; });
          if (pane.getAttribute('data-required') === 'true' && !checked.length) {
            var hint = pane.querySelector('.estimate-select-text');
            if (hint) hint.style.color = '#d9534f';
            return;
          }
          ans[key] = { question: question, answer: checked };
        } else {
          var ta = pane.querySelector('textarea');
          ans[key] = { question: question, answer: ta ? ta.value : '' };
        }
        go(stepNext);
      }
    });
  });

  finalForm.querySelectorAll('[data-back]').forEach(function (b) {
    b.addEventListener('click', function (e) { e.preventDefault(); back(); });
  });

  /* attachment label */
  $('#Appfile').on('change', function () { $('#Appsubfile').val($(this).val()); });
  $('#Appfile-trigger').on('click', function (e) { e.preventDefault(); $('#Appfile').trigger('click'); });

  /* phone field with country selector (library comes with vendor-plugins.js) */
  var phone = document.querySelector('.est-app-phone');
  if (phone && window.intlTelInput) {
    window.intlTelInput(phone, { hiddenInput: 'full_number', preferredCountries: ['gb', 'in'], separateDialCode: true });
  }

  /* submit: answers + form fields, JSON reply {status, message} */
  document.getElementById('estimate_form').addEventListener('submit', function (e) {
    e.preventDefault();
    var f = this, out = {};
    hist.forEach(function (id) { var k = id.replace('step-', ''); if (ans[k]) out[k] = ans[k]; });
    document.getElementById('est_answers').value = JSON.stringify(out);
    fetch(f.getAttribute('action'), { method: 'POST', body: new FormData(f) })
      .then(function (r) { return r.json(); })
      .then(function (r) {
        if (r.status === 'success') {
          Swal.fire({ icon: 'success', title: 'Success!', text: r.message, showConfirmButton: false, timer: 1500 }).then(function () { location.reload(); });
        } else {
          Swal.fire({ icon: 'error', title: 'Oops...', text: 'Something went wrong!' });
        }
      })
      .catch(function () { Swal.fire({ icon: 'error', title: 'Oops...', text: 'Could not send the form. Please try again.' }); });
  });

  /* inline SVG icons so CSS can recolour them (like the original page) */
  [].forEach.call(root.querySelectorAll('img[src$=".svg"]'), function (img) {
    fetch(img.src).then(function (r) { return r.text(); }).then(function (t) {
      var d = new DOMParser().parseFromString(t, 'image/svg+xml').documentElement;
      if (d && d.nodeName === 'svg') {
        d.setAttribute('class', (img.className || '') + ' replaced-svg');
        img.replaceWith(d);
      }
    }).catch(function () {});
  });
});

/* "Thank you" modal: OK returns to the home page (the template did window.location='index.php') */
document.addEventListener('click', function (e) {
  var b = e.target.closest ? e.target.closest('#successModal .custome_btn') : null;
  if (b) { window.location = b.getAttribute('data-home') || '/'; }
});