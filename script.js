// Menu icon
document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#head-03 .menu-icon");
    const navLists = document.querySelector("#head-03 .nav-lists");

    menuIcon.addEventListener("click", function () {
        menuIcon.classList.toggle("active");
        navLists.classList.toggle("active");
    });

    const dropdowns = document.querySelectorAll("#head-03 .nav-item.dropdown");
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.stopPropagation();
            const isActive = this.classList.contains("active");
            closeAllDropdowns();
            if (!isActive) {
                this.classList.add("active");
            }
        });
    });

    document.addEventListener("click", function () {
        closeAllDropdowns();
    });

    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove("active");
        });
    }
});


const cartIcon = document.getElementById('cart-icon');
const cartSidebar = document.getElementById('shopping-cart-sidebar');
const closeBtn = document.getElementById('close-btn');

cartIcon.addEventListener('click', () => {
  cartSidebar.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  cartSidebar.classList.remove('active');
});
