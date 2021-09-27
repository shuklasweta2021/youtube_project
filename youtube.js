var menuIcon = document.querySelector(".menu-icon");
        var sidebar = document.querySelector(".dropdown");
        menuIcon.onclick = function () {
            sidebar.classList.toggle("small-sidebar");
        }