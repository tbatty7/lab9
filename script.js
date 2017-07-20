$(document).ready(function() {
  $.get('https://www.reddit.com/r/aww.json', function(response) {
   for(var i=0; i<10; i++){
     var div = '<div>';
     div += '<p> Title: <a href ="' + response.data.children[i].data.url + '">'  + response.data.children[i].data.title + '</a></p>';
     div += '<p> Author: ' + response.data.children[i].data.author + '</p>'
     div += '<img src="' + response.data.children[i].data.thumbnail + '" alt=""></img>'
     div += '</div>'
     $('body').append(div);
  }
});

});
