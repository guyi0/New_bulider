import '../css/app.scss';
import $ from "jquery";
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import 'waypoints';
import 'scrollTo';

$( document ).ready(function() {
  history.pushState(null, null, 'home')
  var fetchAndInsert,body
var loc =[""]

var fetchAndInsert = function (href) {
  $.ajax({
  url:'http://localhost:8080/view/'+href.split('/').pop(),
  cache:false,
  success:function(data) {
    $("#main").html(data)
    history.pushState(null, null, href)
  }
  })
}
$(window).on('popstate', function () {
var lasturl =loc[loc.length-2]
if (lasturl==undefined) {
  fetchAndInsert("/")
}
console.log("lasturl",lasturl);
fetchAndInsert(lasturl)

})

var nav =$('.nav')

nav.find('a').on('click',function (event) {
var href= $(this).attr('href')

// mainpulte history
history.pushState(null,null, href)

loc.push(location.pathname)
// fetch and chages

fetchAndInsert(href)
event.preventDefault()

})


// user goes back





});

$('.dim').click(function(event){
    var isDim = $(event.target).is('.dim');
    if(isDim){ //make sure I am a dim element
        $('.checkbox', this).toggle(); // p00f
    }

});


// hisotry



/**
 * EXAMPLE JS STARTS
 */

/**
 * EXAMPLE JS ENDS
 */
