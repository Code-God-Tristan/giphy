$(".search-button").click(function() {

let userinput= $("input").val();
  
  
  if (userinput === " ") {
    
  }
  let randomString = ['job', 'rat', 'pacman', 'flower', 'book' ]
let apiUrl=`https://api.giphy.com/v1/gifs/search?q=${userinput}&rating=pg&api_key=tTVMCPwEb1NapUWHla1pBNt4jKlfEqo1`;




fetch(apiUrl)
.then(function(response){
  return response.json();
})
    
  .then(function(data) {
   console.log(data.data[0]);
  let ranNum= Math.floor(Math.random() * data.data.length)
  let gif= data.data[ranNum].images.original.url;
   $('.display').append(`<img src=${gif}>`)
     
    });
  

});