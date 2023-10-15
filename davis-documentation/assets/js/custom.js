$(function() {

  $('[data-skin]').on('click', function(e) {
    e.preventDefault();
    var skin = $(this).data('skin');
    $('#style-skin').attr('href', 'assets/css/skin-'+ skin +'.css');
  });

  // Sidebar-boxed: Try it section
  $('#sb-left-side').on('click', function() {
    $('.sidebar-boxed').removeClass('sidebar-right');
  });

  $('#sb-right-side').on('click', function() {
    $('.sidebar-boxed').addClass('sidebar-right');
  });

  $('#sb-skin-light').on('click', function() {
    $('.sidebar-boxed').removeClass('sidebar-dark');
  });

  $('#sb-skin-dark').on('click', function() {
    $('.sidebar-boxed').addClass('sidebar-dark');
  });

});