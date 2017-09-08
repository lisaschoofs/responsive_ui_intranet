$(document).ready(function(){
  mainPageListeners();
  sidenavListeners();
  // caretRotate();
});

function mainPageListeners() {
  $("#search").on('click', function(){
    $( ".searchBar").toggle();
    $(this).children().last().toggleClass("down");
  })

  $("#sidemenu").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
    $(this).children().last().toggleClass("down");
  });

  $(".dropdownHeader").on('click', function(){
    $( ".sidenav" ).toggle( "slow" );
    $(this).children().last().toggleClass("down");
  });

  $(".marketNews").on('click', function(){
    console.log('clicked header!');
    $( ".marketNewsList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });

  $(".announcements").on('click', function(){
    console.log('clicked header!');
    $( ".announcementsList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });

  $(".recentlySigned").on('click', function(){
    console.log('clicked recentlySigned header!');
    $( ".recentlySignedList" ).toggle( "fast" );
    $(this).children().last().toggleClass("down");
  });

  $(".upcomingEvents").on('click', function(){
    console.log('clicked upcomingEvents header!');
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
//     console.log('MOVE! THAT! CARET!');
//   });
// }
