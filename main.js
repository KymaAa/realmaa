const searchForm = document.getElementById('search-form');
const searchBox = document.getElementById('search-box');
const searchResult = document.getElementById('search-result');
const showMoreBtn = document.getElementById('show-more-btn');

const searchData = [
  { id: 'Facebook', link: 'https://www.facebook.com/profile.php?id=100087999871043&mibextid=ZbWKwL', imgSrc: '20240109_142536.png' },
  { id: 'Youtube', link: 'https://youtube.com/@LupusreginaBeta-il3kq?si=RpwWra1_7tQWQfqK', imgSrc: ' 20240109_221933.jpg' },
  { id: 'Group' , link: 'https://www.facebook.com/groups/3789810921256148/?r', imgSrc: '20240109_222348.png'},
 { id: 'overlord' , link: 'https://www.facebook.com/groups/3789810921256148/?r', imgSrc: '20240110_112347.png'

  // Add more data as needed
];

searchForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const searchTerm = searchBox.value.trim().toLowerCase();

  // Clear previous search results
  searchResult.innerHTML = '';

  // Filter data based on the search term
  const matchingResults = searchData.filter(item =>
    item.id.toLowerCase().includes(searchTerm)
  );

  // Display search results in the search-result div
  matchingResults.forEach(result => {
    const resultLink = document.createElement('a');
    resultLink.href = result.link;
    resultLink.id = result.id;

    const resultImage = document.createElement('img');
    resultImage.src = result.imgSrc;
    resultImage.alt = result.id;

    // Set fixed height and width for each result
    resultImage.style.height = '200px';
    resultImage.style.width = '200px';

    searchResult.appendChild(resultLink);
    searchResult.appendChild(resultImage);
    searchResult.appendChild(document.createElement('br'));
  });

  if (matchingResults.length === 0) {
    searchResult.textContent = 'No results found.';
  }
});

showMoreBtn.addEventListener('click', function () {
  // Your "show more" logic here
  alert('Show more clicked');
});
