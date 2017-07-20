$(function () {

get('https://www.reddit.com/r/aww.json', function(response) {
console.log(response.data);
});



});