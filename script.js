$(document).ready(function() {
  $.get('https://www.reddit.com/r/aww.json', function(response) {
   for(var i=0; i<10; i++){
     var div = '<div class="post">';
     div += '<h3> Title: <a target="_blank" href ="' + response.data.children[i].data.url + '">'  + 
     response.data.children[i].data.title + '</a></h3>';
     div += '<p> Author: ' + response.data.children[i].data.author + '</p>'
     div += '<a href="' + response.data.children[i].data.url +'" data-lightbox="images" alt=""><img src="'
      + response.data.children[i].data.thumbnail + '" alt=""></a>'
     div += '</div>'
     $('body').append(div);
  }
});

});
