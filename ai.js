// ai.js
function askAI() {
  const question = prompt("Ask me a question:");
  if (!question) {
    alert("You didn't type a question!");
    return;
  }

  // Encode the question for use in a Google search URL
  const googleURL = "https://www.google.com/search?q=" + encodeURIComponent(question);

  // Open Google search in a new tab
  window.open(googleURL, "_blank");
}
