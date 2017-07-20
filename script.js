$(document).ready(function() {
  $.get('https://www.reddit.com/r/aww.json', function(response) {
 for(var i=0; i<10; i++){
   console.log(response.data.children[i].data.author);
   $('body').append('<p> Title: <a href ="' + response.data.children[i].data.url + '">'  + response.data.children[i].data.title + '</a></p>');
   $('body').append('<p> Author: ' + response.data.children[i].data.author + '</p>');
   $('body').append('<img src="' + response.data.children[i].data.thumbnail + '" alt=""></img>');
}
});
// $.get('https://www.reddit.com/r/aww.json', function(response) {
// for(var i=0; i<10; i++){
//  console.log(response.data.children[i].data.thumbnail);
// }
// });
// $.get('https://www.reddit.com/r/aww.json', function(response) {
// for(var i=0; i<10; i++){
//  console.log(response.data.children[i].data.title);
// }
// });

});
