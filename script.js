// Print a message in the browser's dev tools console each time the page loads
// Use your menus or right-click / control-click and choose "Inspect" > "Console"
console.log("Loaded I think :/ 🌎");

/* 
Make the "Click me!" button open a link:
- Replace the 'YOUR_LINK_URL' with the actual URL you want to open
*/
const btn = document.querySelector("button.btn-secondary"); // Get the first button from the page
if (btn) { // Detect clicks on the button
  btn.onclick = function () {
    // Open the link in a new tab or window
    window.open("https://raw.githubusercontent.com/Tropxzz/Scripts/main/grape%20hub", "_blank");
  };
}

/* 
Make the "Another Button" click event:
- Replace the 'YOUR_TEXT' with the desired text to display
- The text will show for 25 seconds and then disappear
*/
const anotherBtn = document.querySelector("button.btn-primary"); // Get the second button from the page
if (anotherBtn) { // Detect clicks on the button
  anotherBtn.onclick = function () {
    window.open("https://raw.githubusercontent.com/DeveloperBacon1/Scripts/main/GunHub", "_blank");

  };
}
