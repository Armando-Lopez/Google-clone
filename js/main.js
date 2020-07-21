const searchForm = document.querySelector("#search-form");

searchForm.addEventListener("submit", makeSearch);

function makeSearch(e) {
  e.preventDefault();
  const search = e.target[0].value;
  window.location.href = `https://www.google.com/search?q=${search}`;
}
