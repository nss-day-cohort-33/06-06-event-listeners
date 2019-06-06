let outputEl = document.getElementById("output-target")
let articleEl = document.getElementsByClassName("article-section")
let header = document.querySelector("#page-header")

// This functin is used as a callback for the event listener below, so it will receive the 'event' object automagically when it is called after a click on any .article-section
function handleSectionClick (event) {
  console.log(event)
}

// looping through the article-sections to add an event listener to each one
for (let i = 0; i < articleEl.length; i++) {
  articleEl[i].addEventListener("click", handleSectionClick)
}

function handleHeaderMouseOver (event) {
  outputEl.innerHTML = "You moved your mouse over me"
}

function handleHeaderMouseOut(event) {
  outputEl.innerHTML = "Why u leave me?"
}

header.addEventListener("mouseover", handleHeaderMouseOver)
header.addEventListener("mouseout", handleHeaderMouseOut)

let fieldEl = document.getElementById("keypress-input")

fieldEl.addEventListener("keyup", function (event) {
  // console.log('input event', event );
  outputEl.innerHTML = event.target.value
})

function toggleClass (newClass) {
  guineaPig.classList.toggle(newClass)
  console.log("guineaPig.classList", guineaPig.classList)
}

let guineaPig = document.getElementById("guinea-pig")

// Because `toggleClass` takes and argument, we can't use it directly as the callback function for an event listener. BUT, we can execute it inside an anonymous function, and that anymous function can be our callback function
document.getElementById("add-color").addEventListener("click", function() {
  toggleClass("blue")
})

document.getElementById("make-large").addEventListener("click", function() {
  toggleClass("large")
})

document.getElementById("add-border").addEventListener("click", function() {
  toggleClass("bordered")
})

document.getElementById("add-rounding").addEventListener("click", function() {
  toggleClass("rounded")
})

// We can attach event listeners to any element, and 'capture' any events that happen on any of that element's descendants. Here, the event listener on the body tag will respond to a click on any element on the page, because they are all nested inside the body tag
document.querySelector("body").addEventListener("click", function(event) {
  console.log("You clicked on the body of the DOM", event.currentTarget)
})
