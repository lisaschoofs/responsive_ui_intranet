$(document).ready(function(){
  eventListeners();
});

//Listeners for sideNav toggling
function eventListeners() {
  $("#search").on('click', function(){
    $( ".searchBar").toggle();
  })

  $("#sidemenu").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
  });

  $(".dropdownHeader").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
  });

  $(".marketNews").on('click', function(){
    console.log('clicked header!');
    $( ".marketNewsList" ).toggle( "fast" );
  });

  $(".announcements").on('click', function(){
    console.log('clicked header!');
    $( ".announcementsList" ).toggle( "fast" );
  });

  $(".recentlySigned").on('click', function(){
    console.log('clicked recentlySigned header!');
    $( ".recentlySignedList" ).toggle( "fast" );
  });

  $(".upcomingEvents").on('click', function(){
    console.log('clicked upcomingEvents header!');
    $( ".upcomingEventsList" ).toggle( "fast" );
  });

  $(".shortcuts").on('click', function() {
    console.log('clicked shortcuts! Booyah!');
    // $(".headerTiles").toggle();
  })
}
