const movieList = [
  {
    movieName: "Kantara",
    price: 350,
    location: "Hyderabad",
  },
  {
    movieName: "War 3",
    price: 650,
    location: "Bangalore",
  },
];

// array methods (functions)
// forEach
// map
// sort
// filter

// callbackfunt


const priceValue= 500;
function callbackfuncPrice(){
    return 2600
}

// 500 + 2600 = 
function getPrice(priceValue, callbackfuncPrice){
    return priceValue + callbackfuncPrice
}

console.log(getPrice(priceValue,callbackfuncPrice(movieList)))

// output 1000


const final = movieList.map(function(copyOfMovieList){
console.log(copyOfMovieList, "copyOfMovieList")
});


console.log("finallll", final)

forEach always it will return undefined

map return empty array 


[] -------- new []



//anonumus funtions
// function(){
    
// }