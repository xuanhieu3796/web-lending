$(document).ready(function () {
    const toggleButton = document.querySelector('.toggle-menu');
    const navBar = document.querySelector('.nav-bar');
    toggleButton.addEventListener('click', () => {
        navBar.classList.toggle('toggle');
    });
});
$(document).ready(function(){
    $(".close_show").click(function(){
      $("#click_show").removeClass("toggle");
    });
});