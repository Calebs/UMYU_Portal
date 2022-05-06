// jQuery(document).ready(function($) {
//     $('[data-toggle="tooltip"]').tooltip();

//     // Show and hide password, user login
//     var visualTrigger = $("#showPass");
//     var pwd_input = $(".user_pass");
//     visualTrigger.on("click", function() {
//         $(this).toggleClass("show_pass");
//         if (pwd_input.attr("type") == "password") {
//             pwd_input.attr("type", "text");
//         } else {
//             pwd_input.attr("type", "password");
//         }
//     });
// });

// const sidebar = document.querySelector(".mainSidebar");
// const mainContent = document.querySelector(".mainContentWrapper");
// document.querySelector(".toggleSidebar").onclick = function() {
//     sidebar.classList.toggle("mainSidebar_shrunk");
//     mainContent.classList.toggle("mainContentWrapper_Enlarged");
// };

//  TO TOGGLE SIDEBAR
const hamburger = document.getElementById("hamburger");
const closeBtn = document.getElementById("close");
const overlay = document.querySelector(".overlay-menu");
const sidebarLinks = document.getElementById("sidebar");

hamburger.addEventListener("click", () => {
    console.log("open");
    document.querySelector(".nav--toggle-open").style.display = "none";
    document.querySelector(".nav--toggle-close").style.display = "block";
    sidebarLinks.style.display = "block";
    overlay.style.display = "block";
    overlay.style.opacity = "0.8";
});

closeBtn.addEventListener("click", () => {
    console.log("close");
    document.querySelector(".nav--toggle-close").style.display = "none";
    document.querySelector(".nav--toggle-open").style.display = "block";
    sidebarLinks.style.display = "none";
    overlay.style.display = "none";
    overlay.style.opacity = "0";
});