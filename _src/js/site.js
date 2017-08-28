$(document).ready(function(){
  console.log('jquery loaded!');
  eventListeners();
});

function eventListeners() {
  $("#sidemenu").on('click', function(){
    console.log('you clicked side menu!');
    $( ".sidenav" ).toggle( "slow" );
  });
}
