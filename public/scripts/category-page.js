
            /* Banner enquiry form: phone field with country flag and dial code, Pakistan preselected.
               Plain JavaScript (no jQuery) so it runs even if a later part of this file fails; the library
               comes with vendor-plugins.js, which loads before this file. */
            (function () {
                if (!window.intlTelInput) return;
                document.querySelectorAll('.innerbannerform .contact-phone').forEach(function (input) {
                    if (input.closest('.iti')) return;
                    window.intlTelInput(input, { initialCountry: 'pk', separateDialCode: true });
                });
            })();

            $(document).ready(function() {
                if ($(".top-sticy").length) {
                    var summaries = $('.top-sticy');
                    summaries.each(function(i) {
                        var summary = $(summaries[i]);
                        var next = summaries[i + 1];

                        summary.scrollToFixed({
                            marginTop: $('.main-navbar-wrap').outerHeight(true) - 1,
                            limit: function() {
                                var limit = 0;
                                if (next) {
                                    limit = $(next).offset().top - $(this).outerHeight(true) - 10;
                                } else {
                                    limit = $('.nofixed').offset().top - $(this).outerHeight(true) -
                                        10;
                                }
                                return limit;
                            },
                            zIndex: 999
                        });
                    });
                }

                if ($(".what-we-offer-main-slider-section").length) {
                    var lastId,
                        topHeader = $(".main-navbar"),
                        topMenu = $(".what-we-offer-main-slider-section"),
                        topMenuHeight = topMenu.outerHeight() + topHeader.outerHeight() + 40,
                        // All list items
                        menuItems = topMenu.find("a"),
                        // Anchors corresponding to menu items
                        scrollItems = menuItems.map(function() {
                            var item = $($(this).attr("href"));
                            if (item.length) {
                                return item;
                            }
                        });

                    // Bind click handler to menu items
                    // so we can get a fancy scroll animation
                    menuItems.click(function(e) {
                        var href = $(this).attr("href"),
                            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 50;
                        $('html, body').stop().animate({
                            scrollTop: offsetTop
                        }, 800);
                        e.preventDefault();
                    });

                    // Bind to scroll
                    $(window).scroll(function() {
                        // Get container scroll position
                        var fromTop = $(this).scrollTop() + topMenuHeight;

                        // Get id of current scroll item
                        var cur = scrollItems.map(function() {
                            if ($(this).offset().top < fromTop)
                                return this;
                        });
                        // Get the id of the current element
                        cur = cur[cur.length - 1];
                        var id = cur && cur.length ? cur[0].id : "";
                        if (lastId !== id) {
                            $("[href='#" + lastId + "']").removeClass('active');
                            lastId = id;
                            // Set/remove active class
                            $("[href='#" + id + "']").addClass('active');
                            menuItems
                                .parent().removeClass("active")
                                .end().filter("[href='#" + id + "']").parent().addClass("active")
                        }
                    });
                }
            });
        

            /* Mobile app pages: industry slides + tab strip (slick, kept in sync through asNavFor).
               Every block is set up on its own, so a page can hold several of them. */
            $(document).ready(function() {
                if (!$(".app-service-tab-content").length || !$.fn.slick) return;
                $(".app-service-tab-content").each(function() {
                    var $content = $(this);
                    if ($content.hasClass("slick-initialized")) return;
                    var $tabs = $content.closest("section").find(".app-service-tab").first();
                    $content.slick({
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        fade: true,
                        asNavFor: $tabs
                    });
                    $tabs.slick({
                        slidesToShow: 7,
                        slidesToScroll: 1,
                        arrows: false,
                        asNavFor: $content,
                        dots: false,
                        centerMode: false,
                        pauseOnHover: false,
                        infinite: true,
                        focusOnSelect: true,
                        autoplay: true,
                        autoplaySpeed: 2000,
                        swipeToSlide: true,
                        responsive: [
                            { breakpoint: 1500, settings: { slidesToShow: 6, slidesToScroll: 1, infinite: true } },
                            { breakpoint: 1400, settings: { slidesToShow: 5, slidesToScroll: 1, infinite: true } },
                            { breakpoint: 1200, settings: { slidesToShow: 4, slidesToScroll: 1, infinite: true } },
                            { breakpoint: 991, settings: { slidesToShow: 3, slidesToScroll: 1 } },
                            { breakpoint: 640, settings: { slidesToShow: 2, slidesToScroll: 1 } },
                            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
                        ]
                    });
                });
            });

            /* Intro slider (about-slider): pictures that fade, with round icon tabs that pick the picture. */
            $(document).ready(function() {
                if (!$(".about-img-slider").length || !$.fn.slick) return;
                $(".about-slider").each(function() {
                    var $imgs = $(this).find(".about-img-slider");
                    var $icons = $(this).find(".about-icon-slider");
                    if ($imgs.hasClass("slick-initialized")) return;
                    var count = $imgs.children().length;
                    $imgs.slick({ slidesToShow: 1, slidesToScroll: 1, arrows: false, fade: true, autoplay: true, autoplaySpeed: 3000 });
                    $icons.slick({
                        slidesToShow: 4,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: false,
                        infinite: true,
                        autoplay: true,
                        autoplaySpeed: 3000,
                        focusOnSelect: true,
                        swipeToSlide: true,
                        responsive: [{ breakpoint: 480, settings: { slidesToShow: 3 } }]
                    });
                    // There can be more icons than pictures: an icon picks the picture with the same position.
                    $icons.on("beforeChange", function(e, slick, current, next) {
                        $imgs.slick("slickGoTo", next % count);
                    });
                });
            });
