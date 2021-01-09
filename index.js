/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(timeString) {
  const tS = parseInt(timeString.split(':')[0])
  debugger
  if (tS < 12) {
    return "Good Morning"
  } else if ((tS >= 12) && (tS <= 17)) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

function displayMessage(greet) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = greet
}
