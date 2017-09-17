$(document).ready(function(){
  mainPageListeners();
  sidenavListeners();
  // caretRotate();
});

function mainPageListeners() {
  $("#search").on('click', function(){
    $( ".searchBar").toggle();
    console.log('search!');
  })

  $("#sidemenu").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
  });

  $(".dropdownHeader").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
    $(this).children().last().toggleClass("down");
  });

  $(".marketNews").on('click', function(){
    $( ".marketNewsList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });

  $(".announcements").on('click', function(){
    $( ".announcementsList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });

  $(".recentlySigned").on('click', function(){
    $( ".recentlySignedList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });

  $(".upcomingEvents").on('click', function(){
    $( ".upcomingEventsList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });
}

function sidenavListeners() {
  $(".sitenav").on('click', function() {
    $(".sitenavList").toggle('fast');
    $(this).children().last().toggleClass("down");
  });

  $(".myLinks").on('click', function() {
    console.log('clicked myLinks! Yaaaaas!');
    $(this).children().last().toggleClass("down");
  });

  $(".shortcuts").on('click', function() {
    $(".icons").toggle('fast');
    $(this).children().last().toggleClass("down");
  });
};

// function caretRotate() {
//   $(".triangleRotate").click(function(){
//     $(this).toggleClass("down");
    // console.log('MOVE! THAT! CARET!');
//   });
// }
