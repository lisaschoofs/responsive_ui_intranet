$(document).ready(function(){
  mainPageListeners();
  sidenavListeners();
});

//Listeners for sideNav toggling
function mainPageListeners() {
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
}

function sidenavListeners() {
  $(".sitenav").on('click', function() {
    console.log('clicked sitenav! Huzzah!');
    $(".sitenavList").toggle('fast');
  });

  $(".myLinks").on('click', function() {
    console.log('clicked myLinks! Yaaaaas!');
  });

  $(".shortcuts").on('click', function() {
    console.log('clicked shortcuts! Awwww yeah.');
    $(".icons").toggle('fast');
  });
};
