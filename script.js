function searchEvents() {
  const query = document.getElementById("search").value.trim();
  if (query) {
    alert(`Searching for events matching: "${query}"`);
    // In real app: redirect to results page or fetch API
  } else {
    alert("Please enter a search term.");
  }
}
