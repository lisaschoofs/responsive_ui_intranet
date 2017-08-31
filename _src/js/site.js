$(document).ready(function(){
  eventListeners();
});

//Listeners for sideNav toggling
function eventListeners() {
  $("#sidemenu").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
  });

  $(".dropdownHeader").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
  });

  // $(".recentlySigned").('click', function(){
  //   $();
  // })
}
