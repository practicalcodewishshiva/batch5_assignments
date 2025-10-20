Day 12: JavaScript DOM - Display Movie List

Course: Frontend Development Bootcamp  
Duration: 2 Hours  
Focus: Display Data from JavaScript to Webpage  



Table of Contents

1. The Core Problem - Data is Invisible
2. What is DOM? - The Connector
3. getElementById - Finding Elements
4. innerHTML - Changing Content
5. Display Movie List - Complete Flow
6. Practice Exercises

---

Part 1: The Core Problem - Data is Invisible {part-1}

Real Scenario: BookMyShow Homepage

What you have:


// Movie data in JavaScript
let movie1 = "Pushpa 2";
let movie2 = "Jawan";
let movie3 = "Animal";

console.log(movie1);  // Shows in console ✅
console.log(movie2);  // Shows in console ✅
console.log(movie3);  // Shows in console ✅


What user sees on webpage:


Browser Page:
┌─────────────────────────┐
│                         │
│  (Empty white page)     │
│                         │
│  User sees: NOTHING ❌  │
│                         │
└─────────────────────────┘


Why This Happens?


┌──────────────────────┐
│   HTML (Webpage)     │
│                      │
│   <body>             │
│     <h1>Movies</h1>  │
│   </body>            │
│                      │
│   What user SEES     │
└──────────────────────┘
        
        ❌ NO CONNECTION ❌
        
┌──────────────────────┐
│   JavaScript         │
│                      │
│   let movie1 =       │
│   "Pushpa 2"         │
│                      │
│   Data EXISTS but    │
│   HIDDEN from user   │
└──────────────────────┘


The Problem:

JavaScript knows: movie1 = "Pushpa 2"
Webpage shows: Nothing!

WHY? Because HTML and JavaScript don't talk to each other!


---

Part 2: What is DOM? - The Connector {part-2}

DOM = Document Object Model

Simple Definition:

DOM is JavaScript's way to:
✅ READ what's on the webpage
✅ CHANGE what's on the webpage


The Solution - DOM Bridge


┌──────────────────────┐
│   HTML (Webpage)     │
│                      │
│   <h1>Movies</h1>    │
│   <div id="list">    │
│   </div>             │
└──────────────────────┘
        ↕
    ✅ DOM BRIDGE ✅
        ↕
┌──────────────────────┐
│   JavaScript         │
│                      │
│   document           │
│   .getElementById()  │
│   .innerHTML         │
└──────────────────────┘

NOW: JavaScript can update the webpage!


Simple Example - Before & After DOM

HTML:
html
<h1 id="title">Welcome</h1>


Without DOM:

// This does NOT change the webpage
let newTitle = "Now Showing";
console.log(newTitle);  // Only shows in console


With DOM:

// This CHANGES the webpage ✅
document.getElementById("title").innerText = "Now Showing";

// User sees: "Now Showing" on webpage!


---

Part 3: getElementById - Finding Elements {part-3}

What is getElementById?


getElementById = Find an element on webpage by its ID


How to Use It

Step 1: Give HTML element an ID
html
<div id="movieBox">Empty</div>


Step 2: Find it using JavaScript

document.getElementById("movieBox")


Step 3: Now you can change it!

document.getElementById("movieBox").innerText = "Pushpa 2";


Real Examples

Example 1: Change Title

html
<h1 id="heading">Welcome</h1>



// Find the heading
document.getElementById("heading").innerText = "BookMyShow";

// Webpage now shows: "BookMyShow"


Example 2: Change Movie Name

html
<p id="movie">Loading...</p>



// Find the paragraph
document.getElementById("movie").innerText = "Pushpa 2";

// Webpage now shows: "Pushpa 2"


Example 3: Change Multiple Elements

html
<h1 id="title">Welcome</h1>
<p id="movie1">Loading...</p>
<p id="movie2">Loading...</p>



// Change title
document.getElementById("title").innerText = "Now Showing";

// Change movie 1
document.getElementById("movie1").innerText = "Pushpa 2";

// Change movie 2
document.getElementById("movie2").innerText = "Jawan";


Common Mistakes


// ❌ WRONG - Forgot to put ID in quotes
document.getElementById(movieBox)

// ✅ CORRECT - ID must be in quotes
document.getElementById("movieBox")

// ❌ WRONG - Typo in ID name
document.getElementById("moiveBox")  // "moive" instead of "movie"

// ✅ CORRECT - Exact ID name from HTML
document.getElementById("movieBox")

// ❌ WRONG - ID doesn't exist in HTML
document.getElementById("xyz")  // No element with id="xyz"

// ✅ CORRECT - ID exists in HTML
document.getElementById("movieBox")  // <div id="movieBox"> exists


---

Part 4: innerHTML - Changing Content {part-4}

What is innerHTML?


innerHTML = Change the HTML content inside an element


Simple vs Complex Content

Simple Text - Use innerText:
html
<p id="title"></p>



document.getElementById("title").innerText = "Pushpa 2";


HTML Content - Use innerHTML:
html
<div id="movieCard"></div>



document.getElementById("movieCard").innerHTML = `
    <h3>Pushpa 2</h3>
    <p>Action Movie</p>
`;


Examples

Example 1: Add Simple Text

html
<div id="box"></div>



document.getElementById("box").innerHTML = "Pushpa 2";

// Result:
// <div id="box">Pushpa 2</div>


Example 2: Add Styled Text

html
<div id="box"></div>



document.getElementById("box").innerHTML = "<h2>Pushpa 2</h2>";

// Result:
// <div id="box">
//   <h2>Pushpa 2</h2>
// </div>


Example 3: Add Multiple Lines

html
<div id="movieCard"></div>



document.getElementById("movieCard").innerHTML = `
    <h3>Pushpa 2</h3>
    <p>Genre: Action</p>
    <p>Rating: 8.5</p>
`;

// Result:
// <div id="movieCard">
//   <h3>Pushpa 2</h3>
//   <p>Genre: Action</p>
//   <p>Rating: 8.5</p>
// </div>


innerHTML vs innerText


// innerText - Only plain text
document.getElementById("box").innerText = "<h1>Hello</h1>";
// Shows on page: <h1>Hello</h1> (as text)

// innerHTML - Actual HTML
document.getElementById("box").innerHTML = "<h1>Hello</h1>";
// Shows on page: Hello (as big heading)


---

Part 5: Display Movie List - Complete Flow {part-5}

Flow: Data → Loop → HTML → Display


Step 1: Have movie data (Array)
   ↓
Step 2: Loop through movies
   ↓
Step 3: Create HTML for each movie
   ↓
Step 4: Display on webpage using DOM


Complete Example - Step by Step

Step 1: Create HTML Structure

html
<!DOCTYPE html>
<html>
<head>
    <title>BookMyShow</title>
    <style>
        body {
            font-family: Arial;
            padding: 20px;
            background: f5f5f5;
        }
        
        h1 {
            color: 333;
        }
        
        .movie {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid e74c3c;
        }
        
        .movie h3 {
            margin: 0 0 10px 0;
            color: 2c3e50;
        }
        
        .movie p {
            margin: 5px 0;
            color: 555;
        }
    </style>
</head>
<body>
    <h1>🎬 Now Showing</h1>
    
    <!-- This div will hold our movies -->
    <div id="movieList"></div>
    
    <script>
        // JavaScript code goes here
    </script>
</body>
</html>


Step 2: Create Movie Data


// Array of movie names
let movies = ["Pushpa 2", "Jawan", "Animal", "Salaar", "Dunki"];


Step 3: Create Display Function


function displayMovies() {
    // Step 3.1: Create empty HTML string
    let html = "";
    
    // Step 3.2: Loop through each movie
    for (let i = 0; i < movies.length; i++) {
        // Step 3.3: Add HTML for each movie
        html = html + '<div class="movie">' + movies[i] + '</div>';
    }
    
    // Step 3.4: Display on webpage
    document.getElementById("movieList").innerHTML = html;
}

// Step 4: Call the function
displayMovies();


Complete Code:

html
<!DOCTYPE html>
<html>
<head>
    <title>BookMyShow</title>
    <style>
        body {
            font-family: Arial;
            padding: 20px;
            background: f5f5f5;
        }
        
        .movie {
            background: white;
            padding: 15px;
            margin: 10px 0;
            border-radius: 8px;
            border-left: 4px solid e74c3c;
        }
    </style>
</head>
<body>
    <h1>🎬 Now Showing</h1>
    <div id="movieList"></div>
    
    <script>
        // Movie data
        let movies = ["Pushpa 2", "Jawan", "Animal", "Salaar", "Dunki"];
        
        // Display function
        function displayMovies() {
            let html = "";
            
            for (let i = 0; i < movies.length; i++) {
                html = html + '<div class="movie">' + movies[i] + '</div>';
            }
            
            document.getElementById("movieList").innerHTML = html;
        }
        
        // Call function
        displayMovies();
    </script>
</body>
</html>


Result on Webpage:


🎬 Now Showing

┌─────────────────┐
│ Pushpa 2        │
└─────────────────┘
┌─────────────────┐
│ Jawan           │
└─────────────────┘
┌─────────────────┐
│ Animal          │
└─────────────────┘
┌─────────────────┐
│ Salaar          │
└─────────────────┘
┌─────────────────┐
│ Dunki           │
└─────────────────┘


---

Level 2: Display with More Details

Use Objects Instead of Simple Strings:


// Movie data with details
let movies = [
    { name: "Pushpa 2", genre: "Action", duration: "3h 20m" },
    { name: "Jawan", genre: "Action", duration: "2h 49m" },
    { name: "Animal", genre: "Drama", duration: "3h 21m" },
    { name: "Salaar", genre: "Action", duration: "2h 55m" },
    { name: "Dunki", genre: "Comedy", duration: "2h 41m" }
];

function displayMovies() {
    let html = "";
    
    for (let i = 0; i < movies.length; i++) {
        html = html + `
            <div class="movie">
                <h3>${movies[i].name}</h3>
                <p>Genre: ${movies[i].genre}</p>
                <p>Duration: ${movies[i].duration}</p>
            </div>
        `;
    }
    
    document.getElementById("movieList").innerHTML = html;
}

displayMovies();


Result on Webpage:


🎬 Now Showing

┌──────────────────────┐
│ Pushpa 2            │
│ Genre: Action       │
│ Duration: 3h 20m    │
└──────────────────────┘
┌──────────────────────┐
│ Jawan               │
│ Genre: Action       │
│ Duration: 2h 49m    │
└──────────────────────┘


---

Level 3: Add Emojis and Styling


let movies = [
    { name: "Pushpa 2", genre: "Action", duration: "3h 20m", icon: "🔥" },
    { name: "Jawan", genre: "Action", duration: "2h 49m", icon: "💪" },
    { name: "Animal", genre: "Drama", duration: "3h 21m", icon: "🐅" },
    { name: "Salaar", genre: "Action", duration: "2h 55m", icon: "⚔️" },
    { name: "Dunki", genre: "Comedy", duration: "2h 41m", icon: "✈️" }
];

function displayMovies() {
    let html = "";
    
    for (let i = 0; i < movies.length; i++) {
        html = html + `
            <div class="movie">
                <div style="font-size: 40px; text-align: center;">
                    ${movies[i].icon}
                </div>
                <h3>${movies[i].name}</h3>
                <p>📽️ ${movies[i].genre}</p>
                <p>⏱️ ${movies[i].duration}</p>
            </div>
        `;
    }
    
    document.getElementById("movieList").innerHTML = html;
}

displayMovies();


Result:


🎬 Now Showing

┌──────────────────────┐
│        🔥            │
│    Pushpa 2         │
│    📽️ Action        │
│    ⏱️ 3h 20m        │
└──────────────────────┘


---

Part 6: Practice Exercises {part-6}

Exercise 1: Display 3 Movies

Task: Display these 3 movies on webpage


let movies = ["Pushpa 2", "Jawan", "Animal"];


HTML:
html
<div id="movieList"></div>


Your Code:

function displayMovies() {
    // Your code here
}

displayMovies();


Expected Output:

Pushpa 2
Jawan
Animal


---

Exercise 2: Display 5 Cities

Task: Display these cities in a list


let cities = ["Mumbai", "Delhi", "Bangalore", "Chennai", "Kolkata"];


HTML:
html
<div id="cityList"></div>


Your Code:

// Write your display function


Expected Output:

Mumbai
Delhi
Bangalore
Chennai
Kolkata


---

Exercise 3: Display Products

Task: Display product names and prices


let products = [
    { name: "Shirt", price: 999 },
    { name: "Jeans", price: 1999 },
    { name: "Shoes", price: 2999 }
];


HTML:
html
<div id="productList"></div>


Your Code:

function displayProducts() {
    let html = "";
    
    for (let i = 0; i < products.length; i++) {
        // Add HTML with name and price
    }
    
    document.getElementById("productList").innerHTML = html;
}

displayProducts();


Expected Output:

Shirt - ₹999
Jeans - ₹1999
Shoes - ₹2999


---

Exercise 4: Complete BookMyShow

Your Assignment:

html
<!DOCTYPE html>
<html>
<head>
    <title>BookMyShow - My Version</title>
    <style>
        body {
            font-family: Arial;
            padding: 20px;
            background: 1a1a1a;
            color: white;
        }
        
        h1 {
            text-align: center;
            color: e74c3c;
        }
        
        .movie {
            background: 2c3e50;
            padding: 20px;
            margin: 15px 0;
            border-radius: 10px;
        }
        
        .movie h3 {
            color: e74c3c;
            margin: 0 0 10px 0;
        }
        
        .movie p {
            margin: 5px 0;
            color: ecf0f1;
        }
        
        .icon {
            font-size: 50px;
            text-align: center;
            margin-bottom: 10px;
        }
    </style>
</head>
<body>
    <h1>🎬 BookMyShow - Now Showing</h1>
    
    <div id="movieList"></div>
    
    <script>
        // TASK 1: Create movie data (10 points)
        // Create array with 6 movies
        // Each movie should have: name, genre, duration, rating, icon
        let movies = [
            // Your movie objects here
        ];
        
        
        // TASK 2: Create display function (40 points)
        // Loop through movies
        // Create HTML for each movie
        // Display using innerHTML
        function displayMovies() {
            // Your code here
        }
        
        
        // TASK 3: Call the function (10 points)
        // Your code here
        
    </script>
</body>
</html>


Requirements:

1. Movie Data (10 points)
   - Create array with 6 movies
   - Each movie needs: name, genre, duration, rating, icon

2. Display Function (40 points)
   - Use for loop
   - Create HTML for each movie
   - Show: icon, name, genre, duration, rating
   - Use `innerHTML` to display

3. Call Function (10 points)
   - Call `displayMovies()` at the end

4. Styling (40 points)
   - Movies in separate cards
   - Nice colors
   - Proper spacing
   - Readable text

Example Output:


🎬 BookMyShow - Now Showing

┌────────────────────────┐
│         🔥             │
│     Pushpa 2          │
│     Genre: Action     │
│     Duration: 3h 20m  │
│     Rating: ⭐ 8.5    │
└────────────────────────┘

┌────────────────────────┐
│         💪             │
│     Jawan             │
│     Genre: Action     │
│     Duration: 2h 49m  │
│     Rating: ⭐ 8.0    │
└────────────────────────┘


---

Bonus Challenges

Bonus 1: Add Serial Numbers (+5 points)

1. Pushpa 2
2. Jawan
3. Animal


Bonus 2: Add Background Colors (+5 points)

// Hint: Use different colors for different genres
if (movies[i].genre === "Action") {
    // Red background
} else if (movies[i].genre === "Drama") {
    // Blue background
}


Bonus 3: Add More Details (+5 points)

Add:
- Director name
- Release date
- Language


---

Summary - What We Learned Today


PROBLEM: JavaScript data doesn't show on webpage
    ↓
SOLUTION: DOM
    ↓
TOOLS WE LEARNED:
    1. document.getElementById() - Find element
    2. .innerHTML - Change content
    3. For loop - Display multiple items
    ↓
RESULT: Display dynamic movie list! ✅


The Complete Process


// Step 1: Have data
let movies = ["Pushpa 2", "Jawan"];

// Step 2: Create HTML in loop
let html = "";
for (let i = 0; i < movies.length; i++) {
    html = html + "<div>" + movies[i] + "</div>";
}

// Step 3: Display using DOM
document.getElementById("movieList").innerHTML = html;


---

Key Points to Remember


✅ HTML and JavaScript are separate
✅ DOM connects them
✅ getElementById() finds element by ID
✅ innerHTML changes content
✅ Use loops to display arrays
✅ Call function to run code

❌ Don't forget quotes in getElementById()
❌ Don't forget to call the function
❌ Don't forget id="" in HTML


---

Testing Your Code

Open Developer Console:

Press F12 in browser
OR
Right click → Inspect → Console


Check for Errors:

// Add console.log to debug
function displayMovies() {
    console.log("Function called");
    console.log("Movies:", movies);
    
    let html = "";
    for (let i = 0; i < movies.length; i++) {
        console.log("Adding movie:", movies[i]);
        html = html + "<div>" + movies[i] + "</div>";
    }
    
    console.log("Final HTML:", html);
    document.getElementById("movieList").innerHTML = html;
}


---

Next Class Preview

Tomorrow we will learn:
- Add buttons to movies
- Click to select movie
- Change background color on click
- Count selected movies

But for today:
- Focus on displaying list
- Practice loops with DOM
- Complete the assignment

---
