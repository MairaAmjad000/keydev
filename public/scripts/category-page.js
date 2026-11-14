
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
        