 // Fetch data from API
 const fetchData = () => {
    const apiKey = '32914670-57e718572ead440fa24767ac9';
    const query = 'yellow+flowers';
    const url = `https://pixabay.com/api/?key=${apiKey}&q=${query}&image_type=photo&pretty=true`;
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data.hits))
        .catch(error => reject(error))
    });
  }
  // Display data on webpage
  const displayData = data => {
    const container = document.querySelector('.container');
    data.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${item.largeImageURL}" alt="${item.tags}">
        <div class="info">
          <h2>${item.user}</h2>
          <p>Type: ${item.type}</p>
          <p>Tags: ${item.tags}</p>
        </div>
      `;
      container.appendChild(card);
    });
  }
  // Fetch and display data
  fetchData()
    .then(data => displayData(data))
    .catch(error => console.log(error))