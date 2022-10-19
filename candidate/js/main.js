! function(e) {
    "use strict";
    var t = e(window);
    t.on("load", function() {
        var a = e(document),
            n = e("html, body"),
            o = e(".loader-container"),
            i = e(".skillbar"),
            s = e(".header-menu-wrapper"),
            r = e("#back-to-top"),
            l = e(".card-carousel"),
            d = e(".client-logo"),
            c = e(".testimonial-carousel"),
            u = e(".testimonial-carousel-2"),
            p = e(".gallery-carousel"),
            g = e(".video-popup-btn"),
            m = e('input[name="daterange"]'),
            h = e(".user-chosen-select"),
            v = e(".team-carousel"),
            f = e(".popular-job-carousel"),
            b = e(".circlechart"),
            y = e(".user-text-editor"),
            H = e(".user-text-editor-2"),
            w = e(".user-text-editor-3"),
            C = e(".user-text-editor-4"),
            k = e(".emoji-picker");
        e(o).delay("500").fadeOut(2e3), a.on("click", ".side-menu-wrap .side-menu-ul>li>a .btn-toggle", function() {
            return e(this).closest("li").siblings().removeClass("active").find(".dropdown-menu-item").slideUp(200), e(this).closest("li").toggleClass("active").find(".dropdown-menu-item").slideToggle(200), !1
        }), a.on("click", ".logo-right-content .side-menu-open", function() {
            e(".side-nav-container").toggleClass("active")
        }), a.on("click", ".dashboard-nav-trigger-btn", function() {
            e(".dashboard-nav-container").addClass("active")
        }), a.on("click", ".user-menu-open", function() {
            e(".user-nav-container").addClass("active")
        }), a.on("click", ".humburger-menu .side-menu-close", function() {
            e(".side-nav-container, .dashboard-nav-container, .user-nav-container").removeClass("active")
        }), e(i).each(function() {
            e(this).find(".skill-item").animate({
                width: e(this).attr("data-percent")
            }, 3e3)
        }), t.on("scroll", function() {
            t.scrollTop() > 0 ? e(s).addClass("header-fixed") : e(s).removeClass("header-fixed"), t.scrollTop() > 500 ? e(r).addClass("btn-active") : e(r).removeClass("btn-active")
        }), a.on("click", "#back-to-top", function() {
            return e(n).animate({
                scrollTop: 0
            }, 800), !1
        }), e(l).length && e(l).owlCarousel({
            loop: !0,
            items: 2,
            nav: !1,
            dots: !1,
            autoplay: !0,
            smartSpeed: 500,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            }
        }), e(d).length && e(d).owlCarousel({
            loop: !0,
            items: 6,
            nav: !1,
            dots: !1,
            smartSpeed: 700,
            autoplay: !0,
            responsive: {
                0: {
                    items: 1
                },
                425: {
                    items: 2
                },
                480: {
                    items: 2
                },
                767: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        }), e(c).length && e(c).owlCarousel({
            loop: !0,
            items: 3,
            nav: !1,
            dots: !0,
            smartSpeed: 700,
            autoplay: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), e(u).length && e(u).owlCarousel({
            loop: !0,
            items: 5,
            nav: !1,
            dots: !0,
            smartSpeed: 700,
            autoplay: !1,
            margin: 30,
            responsive: {
                0: {
                    items: 1
                },
                576: {
                    items: 2
                },
                991: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        }), e(p).length && e(p).owlCarousel({
            loop: !0,
            items: 1,
            nav: !0,
            dots: !0,
            smartSpeed: 700,
            autoplay: !1,
            dotsData: !0,
            navText: ['<i class="la la-chevron-left"></i>', '<i class="la la-chevron-right"></i>']
        }), e(g).length && e(g).magnificPopup({
            type: "video"
        }), e(m).length && e(m).daterangepicker({
            opens: "right",
            singleDatePicker: !0
        }),  e(h).on("chosen:showing_dropdown", function(a, n) {
            var o = e(a.target).next(".chosen-container"),
                i = o.find(".chosen-drop");
            i.offset().top - t.scrollTop() + i.height() > t.height() && o.addClass("chosen-drop-up")
        }), e(h).on("chosen:hiding_dropdown", function(t, a) {
            e(t.target).next(".chosen-container").removeClass("chosen-drop-up")
        }), e(v).length && e(v).owlCarousel({
            loop: !0,
            items: 3,
            nav: !0,
            dots: !0,
            smartSpeed: 500,
            autoplay: !1,
            margin: 30,
            navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                991: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        }), e(f).length && e(f).owlCarousel({
            loop: !0,
            items: 1,
            nav: !1,
            dots: !1,
            autoplay: !0
        }), e(b).length && e(b).circlechart(), e('[data-toggle="tooltip"]').tooltip(), e("#map").length && initMap("map", 40.717499, -74.044113, "images/map-marker.png"), e(y).length && e(y).jqte({
            placeholder: "Write your job description",
            formats: [
                ["p", "Paragraph"],
                ["h1", "Heading 1"],
                ["h2", "Heading 2"],
                ["h3", "Heading 3"],
                ["h4", "Heading 4"],
                ["h5", "Heading 5"],
                ["h6", "Heading 6"],
                ["pre", "Preformatted"]
            ]
        }), e(H).length && e(H).jqte({
            placeholder: "Briefly describe about your company",
            formats: [
                ["p", "Paragraph"],
                ["h1", "Heading 1"],
                ["h2", "Heading 2"],
                ["h3", "Heading 3"],
                ["h4", "Heading 4"],
                ["h5", "Heading 5"],
                ["h6", "Heading 6"],
                ["pre", "Preformatted"]
            ]
        }), e(w).length && e(w).jqte({
            placeholder: "Enter long description for your online resume",
            formats: [
                ["p", "Paragraph"],
                ["h1", "Heading 1"],
                ["h2", "Heading 2"],
                ["h3", "Heading 3"],
                ["h4", "Heading 4"],
                ["h5", "Heading 5"],
                ["h6", "Heading 6"],
                ["pre", "Preformatted"]
            ]
        }), e(C).length && e(C).jqte({
            placeholder: "Briefly describe about your company where you worked before",
            formats: [
                ["p", "Paragraph"],
                ["h1", "Heading 1"],
                ["h2", "Heading 2"],
                ["h3", "Heading 3"],
                ["h4", "Heading 4"],
                ["h5", "Heading 5"],
                ["h6", "Heading 6"],
                ["pre", "Preformatted"]
            ]
        }), e(k).length && e(k).emojioneArea({
            pickerPosition: "top"
        });
        var x, T = document.querySelector("#send-message-btn"),
            P = e(".contact-form"),
            S = e(".alert-message");

        function j(e) {
            T.innerHTML = "Send Message", S.fadeIn().removeClass("alert-danger").addClass("alert-success"), S.text(e), setTimeout(function() {
                S.fadeOut()
            }, 3e3), P.find('input:not([type="submit"]), textarea').val("")
        }

        function M(e) {
            T.innerHTML = "Send Message", S.fadeIn().removeClass("alert-success").addClass("alert-danger"), S.text(e.responseText), setTimeout(function() {
                S.fadeOut()
            }, 3e3)
        }
        P.submit(function(t) {
            t.preventDefault(), x = e(this).serialize(), T.innerHTML = "Sending...", setTimeout(function() {
                e.ajax({
                    type: "POST",
                    url: P.attr("action"),
                    data: x
                }).done(j).fail(M)
            }, 2e3)
        }), e(".toggle-password").on("click", function() {
            e(this).toggleClass("active");
            var t = e(".password-field");
            "password" === t.attr("type") ? t.attr("type", "text") : t.attr("type", "password")
        })
    })
}(jQuery);