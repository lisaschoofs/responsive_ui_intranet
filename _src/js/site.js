$(document).ready(function(){
  console.log('jquery loaded!');
  eventListeners();
});

function eventListeners() {
  $("#sidemenu").on('click', function(){
    console.log('you clicked sidemenu!');
    $( "#sidenav" ).toggle( "slow" );
  });

}

//
//
// $("#listingForm").on("submit", function(event){
// event.preventDefault();
// console.log('submit button clicked');
// var type = $("#propertyType").val();
// var city = $("#cityInput").val();
// var sqft = $("#sqft").val();
// var price = $("#price").val();
// console.log(type, city, sqft, price);
//
//   $.ajax({
//     type: "POST",
//     url: "/listings",
//     data: {type: type, city: city, sqft: sqft, price: price},
//     success: function(response) {
//       getListings(response);
//       console.log(response);
//     }//end success
//   }); //end ajax
//   //resets form on submit
//   $("#listingForm").trigger('reset');
//   $( "#listingForm" ).toggle( "slow" );
// }); //end listener
// }//end form submit
