jQuery(document).ready(function($){
  $('[data-toggle="tooltip"]').tooltip();

    // Show and hide password, user login
    var visualTrigger = $('#showPass');
    var pwd_input = $('.user_pass');
    visualTrigger.on('click',function() {
      $(this).toggleClass('show_pass');
      if (pwd_input.attr("type") == "password") {
          pwd_input.attr("type", "text");
      } else {
          pwd_input.attr("type", "password");
      }
    });
});

const sidebar = document.querySelector('.mainSidebar');
const mainContent = document.querySelector('.mainContentWrapper');
document.querySelector('.toggleSidebar').onclick = function () {
  sidebar.classList.toggle('mainSidebar_shrunk');
  mainContent.classList.toggle('mainContentWrapper_Enlarged')
}