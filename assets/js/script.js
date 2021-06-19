

// slider promo
$('.slider span.next').click(function() {
  $current = $(this).siblings('img.active');
  $next = $current.next('img');
  if ($next.length != 0) {
    $current.removeClass('active');
    $next.addClass('active');
  }
})
$('.slider span.prev').click(function() {
  $current = $(this).siblings('img.active');
  $prev = $current.prev('img');
  if ($prev.length != 0) {
    $current.removeClass('active');
    $prev.addClass('active');
  }
})

// validate form contact page

function validate() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pesan = document.getElementById("pesan").value;

    if (name == "") {
        alert("Nama Harus Diisi");
    } else if (email == "") {
        alert("Email Harus Diisi");
    } else if (pesan == "" ) {
        alert("Pesan Harus Diisi");
    }
}


const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

// toggle
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        toggle.querySelector("a").innerHTML = "<i class='fa fa-bars'></i>";
    } else {
        menu.classList.add("active");
        toggle.querySelector("a").innerHTML = "<i class='fa fa-times'></i>";
    }
}


function toggleItem() {
    if (this.classList.contains("submenu-active")) {
        this.classList.remove("submenu-active");
    } else if (menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
        this.classList.add("submenu-active");
    } else {
        this.classList.add("submenu-active");
    }
}

// close menu
function closeSubmenu(e) {
    let isClickInside = menu.contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
        menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
}

toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
    if (item.querySelector(".submenu")) {
        item.addEventListener("click", toggleItem, false);
    }
    item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);




