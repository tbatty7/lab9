$(document).ready(function() {
  $.get('https://www.reddit.com/r/aww.json', function(response) {
 for(var i=0; i<10; i++){
   console.log(response.data.children[i].data.author);}
});
$.get('https://www.reddit.com/r/aww.json', function(response) {
for(var i=0; i<10; i++){
 console.log(response.data.children[i].data.thumbnail);}
});
$.get('https://www.reddit.com/r/aww.json', function(response) {
for(var i=0; i<10; i++){
 console.log(response.data.children[i].data.title);}
});
});
