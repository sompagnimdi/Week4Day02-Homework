let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1 DOM's personal website title is a bit wordy. Write a JavaScript statement that selects the #main-titleID element. Remember there are a couple of ways to query id. Change the text of the title to something shorter.

document.querySelector("#main-title").innerHTML="Hi! My name is DOM Toretto"


  // Part 2 Select the body and change the background-color to a new color of your choice.
  document.querySelector("body").style.backgroundColor="olive"


  // Part 3  Select DOM's Favorite Things list and remove the last list item.
const favs = document.querySelector("#favorite-things")
favs.removeChild(favs.lastElementChild)

  // Part 4  Select all .special-title class elements and change their font-sizeto 2rem. Remember you might have to iterate through the list of elements

  document.querySelectorAll(".special-title").forEach((el)=>{
    el.style.fontSize = "2rem"
  })



  // Part 5 Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.

  const races = document.querySelector("#past-races")
  races.removeChild(races.children[3])


  // Part 6 Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.

const li = document.createElement("li")
const newCity = "Ouagadougou"
li.innerHTML = newCity
races.append(li)



  // Part 7 Create a new .blog-postcorresponding to the new city added in Part 6. You will have to create a new <div>with class of .blog-post, a new <h2>with text, and a new <p>with some text. Think about what order you want to create the elements, and what order you want to append them in.

let div = document.createElement("div")
div.classList.add("blog-post","purple")

div.innerHTML = `<h1>${newCity}</h1>
<p>I RACED PAUL WALKER AND WON AGAIN!</p>
</div>`
document.querySelector(".main").append(div)


  // Part 8  When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function:

  document.querySelector("#quote-title").addEventListener("click",randomQuote)


  // Part 9 Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
  document.querySelectorAll(".blog-post").forEach((el)=>{
    el.addEventListener("mouseout",(event)=>{
      el.classList.toggle("purple")
    })
    el.addEventListener("mouseenter",(event)=>{
      el.classList.toggle("red")
    })
  })

// The mouseouthandler should toggle the class .purple
// The mouseenterhandler should toggle the class .red





});
