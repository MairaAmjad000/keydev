
function initializeApp() {
function isOnScreen(e) {
    if (0 != e.length) {
        var s = $(window),
            i = s.scrollTop(),
            a = s.height(),
            o = i + a,
            l = $(e),
            t = l.offset().top,
            n = l.height(),
            d = t + n;
        return (
            (t >= i && t < o) ||
            (d > i && d <= o) ||
            (n > a && t <= i && d >= o)
        );
    }
}
$(".lazybg").length && $(".lazybg").lazy(),
    $(".lazy").length &&
        $(".lazy").lazy({ effect: "fadeIn", effectTime: 500, threshold: 0 }),
    $(window).on("scroll", function () {
        $(window).scrollTop() >= 51
            ? $("header").addClass("white-bg")
            : $("header").removeClass("white-bg");
    }),
    $(document).ready(function () {
        $("#agree_to_allowed").click(function () {
            $.cookie("KeyDevs Technologies_cookie_allowed", "Allowed", {
                expires: 15,
            }),
                setTimeout(function () {
                    $(".hire-team-sticky-section").show();
                }, 3e4);
        }),
            $("#find_partner").click(function () {
                var e = new Date();
                e.setTime(e.getTime() + 18e5),
                    $.cookie(
                        "KeyDevs Technologies_cookie_find_partner",
                        "Yes",
                        { expires: e }
                    );
            }),
            $("#find_partner_close").click(function () {
                $(".hire-team-sticky-section").hide();
                var e = new Date();
                e.setTime(e.getTime() + 18e5),
                    $.cookie("KeyDevs Technologies_cookie_find_partner", "No", {
                        expires: e,
                    });
            }),
            $(".megamenumain").length &&
                $(".megamenumain").hover(
                    function () {
                        $(this).addClass("active"),
                            $(this)
                                .parents(".main-navbar-wrap")
                                .addClass("fullwidth");
                    },
                    function () {
                        $(this).removeClass("active"),
                            $(this)
                                .parents(".main-navbar-wrap")
                                .removeClass("fullwidth");
                    }
                ),
            $(".sub-menu > li").length &&
                $(".sub-menu > li").hover(function () {
                    $(this).toggleClass("active");
                }),
            $(".megamenu").accessibleMegaMenu(),
            setTimeout(function () {
                $("body").removeClass("init");
            }, 500),
            $(".foot-social .header_social li.social-share").length &&
                $(".foot-social .header_social li.social-share a").click(
                    function () {
                        $(this).parents(".header_social").toggleClass("active");
                    }
                ),
            $(".top-right-part").length &&
                ($(".head-requet-btn").click(function (e) {
                    e.preventDefault(),
                        $(".head-call-back-sidebar").addClass("open"),
                        $(".head-call-back-sidebar-background").addClass(
                            "open"
                        ),
                        $("body").addClass("overflow-hidden"),
                        $(".head-call-back-sidebar").find(".lazy").lazy();
                }),
                $(".head-call-back-sidebar .close").click(function () {
                    $(".head-call-back-sidebar").removeClass("open"),
                        $(".head-call-back-sidebar-background").removeClass(
                            "open"
                        ),
                        $("body").removeClass("overflow-hidden");
                }),
                $(".head-call-back-sidebar-background").click(function () {
                    $(".head-call-back-sidebar").removeClass("open"),
                        $(".head-call-back-sidebar-background").removeClass(
                            "open"
                        ),
                        $("body").removeClass("overflow-hidden");
                })),
            $("a[data-toggle='tab']").length &&
                $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
                    $(".lazy").lazy({
                        effect: "fadeIn",
                        effectTime: 500,
                        threshold: 0,
                    });
                });
    }),
    $(document).ready(function () {
        // Set header background color based on scroll position
        if ($(window).scrollTop() >= 51) {
            $("header").addClass("white-bg");
        }

        // Initialize the typer globally to ensure it runs after each navigation
    window.initializeTyper = function() {
        const typerElement = $("#callouts-type");
        if (typerElement.length && !typerElement.hasClass("typer-initialized")) {
            typerElement.addClass("typer-initialized").typer({
                typeSpeed: 200,
                backspaceSpeed: 50,
                backspaceDelay: 800,
                repeatDelay: 1000,
                repeat: true,
                autoStart: true,
                startDelay: 100,
                strings: ["VISION?", "MISSION?"],
            });
        }
    };

        // Call initializeTyper to set it up
        initializeTyper();

        // Show contact popup when quote buttons are clicked
        $(".get_quote, .get_quote2, .megactasection .btn-custome").on("click", function () {
            $("#contact_popup").addClass("popup_show");
            $("body").css("overflow", "hidden");
        });

        // Close contact popup
        $("#popup_close").on("click", function () {
            $("#contact_popup").removeClass("popup_show");
            $("body").css("overflow", "visible");
        });

        // Toggle share button visibility
        $("#share_btn").on("click", function () {
            $("#top").toggleClass("show_top");
        });

        // Toggle navbar collapse on mobile
        $(".navbar-toggle").on("click", function () {
            $(".navbar-collapse").toggleClass("in");
            $(this).toggleClass("collapsed");
        });
    }),

    // // Reinitialize the page when navigating back
    // $(window).on("pageshow", function (event) {
    //     if (event.originalEvent.persisted) {
    //         // Reset scroll position and reinitialize components
    //         if ($(window).scrollTop() >= 51) {
    //             $("header").addClass("white-bg");
    //         }
    //         initializeTyper();
    //     }
    // });
    $(".scroll-top").hide(),
    $(function () {
        $(window).scroll(function () {
            $(this).scrollTop() > 100
                ? ($(".scroll-top").fadeIn(800),
                  $(".scroll-top").css("display", "inline-block"))
                : $(".scroll-top").fadeOut(600);
        }),
            $(".scroll-top").click(function () {
                return $("body,html").animate({ scrollTop: 0 }, 800), !1;
            });
    }),
    $(document).ready(function () {
        function e() {
            $(".cd-nav-trigger").removeClass("nav-is-visible"),
                $(".cd-main-header").removeClass("nav-is-visible"),
                $(".cd-primary-nav").removeClass("nav-is-visible"),
                $(".has-children ul").addClass("is-hidden"),
                $(".has-children a").removeClass("selected"),
                $(".moves-out").removeClass("moves-out"),
                $("body")
                    .removeClass("nav-is-visible")
                    .one(
                        "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                        function () {
                            $("body").removeClass("overflow-hidden");
                        }
                    );
        }
        $(".cd-nav-trigger").click(function (s) {
            s.preventDefault(),
                $("body").hasClass("nav-is-visible")
                    ? (e(), $(".cd-overlay").removeClass("is-visible"))
                    : ($(this).addClass("nav-is-visible"),
                      $(".cd-primary-nav").addClass("nav-is-visible"),
                      $("body")
                          .addClass("nav-is-visible")
                          .one(
                              "webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                              function () {
                                  $("body").addClass("overflow-hidden");
                              }
                          ),
                      $(".cd-overlay").addClass("is-visible"));
        }),
            $(".cd-overlay").on("swiperight", function () {
                $(".cd-primary-nav").hasClass("nav-is-visible") &&
                    (e(), $(".cd-overlay").removeClass("is-visible"));
            }),
            $(".nav-on-left .cd-overlay").on("swipeleft", function () {
                $(".cd-primary-nav").hasClass("nav-is-visible") &&
                    (e(), $(".cd-overlay").removeClass("is-visible"));
            }),
            $(".cd-overlay").on("click", function () {
                e(),
                    $(".cd-overlay").removeClass("is-visible");
            }),
            $(".cd-primary-nav")
                .children(".has-children")
                .children("a")
                .on("click", function (e) {
                    e.preventDefault();
                }),
            $(".has-children")
                .children("a")
                .on("click", function (e) {
                    var s = $(this);
                    s.next("ul").hasClass("is-hidden")
                        ? (s
                              .addClass("selected")
                              .next("ul")
                              .removeClass("is-hidden")
                              .end()
                              .parent(".has-children")
                              .parent("ul")
                              .addClass("moves-out"),
                          s
                              .parent(".has-children")
                              .siblings(".has-children")
                              .children("ul")
                              .addClass("is-hidden")
                              .end()
                              .children("a")
                              .removeClass("selected"),
                          $(".cd-overlay").addClass("is-visible"))
                        : (s
                              .removeClass("selected")
                              .next("ul")
                              .addClass("is-hidden")
                              .end()
                              .parent(".has-children")
                              .parent("ul")
                              .removeClass("moves-out"),
                          $(".cd-overlay").removeClass("is-visible"));
                }),
            $(".go-back").on("click", function () {
                $(this)
                    .parent("ul")
                    .addClass("is-hidden")
                    .parent(".has-children")
                    .parent("ul")
                    .removeClass("moves-out");
            });
    }),
    $(document).ready(function () {
        $(".testimonial-section").length &&
            ($(".testimonials_text_slider").slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: !1,
                fade: !1,
                autoplay: !0,
                autoplaySpeed: 4e3,
            }),
            $(".testimonials_circle a[data-slide]").click(function (e) {
                e.preventDefault(),
                    $(".test-img").hasClass("active") &&
                        $(".test-img").removeClass("active"),
                    $(this).addClass("active");
                var s = $(".test-img.active img").attr("src"),
                    i = $(".test-img.active + i").attr("class");
                $(".testimonials_privew img").attr("src", s),
                    $(".testimonials_privew i").attr("class", i);
                var a = $(this).data("slide");
                $(".testimonials_text_slider").slick("slickGoTo", a - 1);
            }),
            $(".test-img a").click(function (e) {
                e.preventDefault();
            }),
            $(".testimonials_text_slider").on(
                "afterChange",
                function (e, s, i, a) {
                    $(
                        ".testimonials_circle a[data-slide=" + (i + 1) + "]"
                    ).trigger("click");
                    $(".test-img.active img").attr("src");
                }
            )),
            $(".blog-slider").length &&
                ($(".blog-slider").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !1,
                    infinite: !1,
                    touchThreshold: 20,
                    speed: 500,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    swipeToSlide: !0,
                    responsive: [
                        {
                            breakpoint: 1023,
                            settings: {
                                slidesToShow: 2,
                                dots: !0,
                                infinite: !0,
                            },
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                dots: !0,
                                infinite: !0,
                            },
                        },
                    ],
                }),
                $(".blog-slider").on("afterChange", function (e, s, i, a) {
                    $(this).find(".lazy").lazy();
                })),
            $(".process-slider").length &&
                $(".process-slider").slick({
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    arrows: !1,
                    dots: !0,
                    infinite: !0,
                    touchThreshold: 20,
                    swipeToSlide: !0,
                    speed: 500,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    swipeToSlide: !0,
                    responsive: [
                        { breakpoint: 600, settings: { slidesToShow: 1 } },
                    ],
                });
    }),
    $(document).ready(function () {
        if ($(".portfolio-slider").length) {
            var e = $(".portfolio-slider").slick({
                slidesToShow: 4,
                slidesToScroll: 1,
                arrows: !1,
                dots: !0,
                infinite: !0,
                touchThreshold: 20,
                speed: 500,
                autoplaySpeed: 2e3,
                swipeToSlide: !0,
                lazyLoad: "ondemand",
                responsive: [
                    {
                        breakpoint: 1300,
                        settings: { slidesToShow: 3, autoplay: !0 },
                    },
                    {
                        breakpoint: 1e3,
                        settings: { slidesToShow: 2, autoplay: !0 },
                    },
                    {
                        breakpoint: 600,
                        settings: { slidesToShow: 1, autoplay: !0 },
                    },
                ],
            });
            $(".portfolio-slider").on("afterChange", function (e, s, i, a) {
                $(this).find(".lazy").lazy();
            }),
                $(".portfolio-slider").hasClass("slideractive") &&
                    e.slick("slickSetOption", "autoplay", !0, !0),
                window.addEventListener("scroll", function (s) {
                    isOnScreen($(".portfolio-slider"))
                        ? 0 == $(".slideractive").length &&
                          ($("body")
                              .find(".portfolio-slider")
                              .addClass("slideractive"),
                          e.slick("slickSetOption", "autoplay", !0, !0))
                        : $("body")
                              .find(".portfolio-slider")
                              .removeClass("slideractive");
                });
        }
    });
}
initializeApp();

