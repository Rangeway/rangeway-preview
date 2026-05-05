(function () {
    "use strict";

    var nav = document.getElementById("nav");
    var navToggle = document.getElementById("nav-toggle");
    var navMenu = document.getElementById("nav-menu");
    var root = document.documentElement;

    function setMenuState(isOpen) {
        if (!navToggle || !navMenu || !nav) {
            return;
        }

        navToggle.classList.toggle("active", isOpen);
        navMenu.classList.toggle("active", isOpen);
        nav.classList.toggle("menu-open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
        root.style.overflow = isOpen ? "hidden" : "";
    }

    function handleNavScroll() {
        if (!nav) {
            return;
        }

        nav.classList.toggle("scrolled", window.scrollY > 40);
    }

    if (navToggle && navMenu) {
        navToggle.setAttribute("aria-expanded", "false");

        navToggle.addEventListener("click", function () {
            setMenuState(!navMenu.classList.contains("active"));
        });

        document.querySelectorAll(".nav-link").forEach(function (link) {
            link.addEventListener("click", function () {
                setMenuState(false);
            });
        });
    }

    window.addEventListener("scroll", handleNavScroll, { passive: true });
    handleNavScroll();

    var revealNodes = document.querySelectorAll("[data-reveal]");

    if ("IntersectionObserver" in window) {
        var observer = new IntersectionObserver(
            function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    var index = Number(entry.target.getAttribute("data-reveal-order")) || 0;
                    var delay = index * 90;

                    window.setTimeout(function () {
                        entry.target.classList.add("is-visible");
                    }, delay);

                    observer.unobserve(entry.target);
                });
            },
            {
                threshold: 0.18,
                rootMargin: "0px 0px -48px 0px"
            }
        );

        revealNodes.forEach(function (node) {
            observer.observe(node);
        });
    } else {
        revealNodes.forEach(function (node) {
            node.classList.add("is-visible");
        });
    }

    document.querySelectorAll(".copyright-year").forEach(function (node) {
        node.textContent = String(new Date().getFullYear());
    });
})();
