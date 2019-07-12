// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(data => {
        console.log('Data:', data);

        const cardsContainer = document.querySelector('.cards-container');
        
        const cardJS = data.data.articles.javascript;
        cardJS.forEach(article => {
            const newJSCard = createCard(article);
            cardsContainer.appendChild(newJSCard);
        });

        

    })
    .catch(error => {
        console.log('No, seriously, where is my data?', error);
    })

function createCard (info) {

    // Create Elements
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');

    // Set Structure
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imageContainer);
    author.appendChild(name);
    imageContainer.appendChild(image);

    // Set Class Names
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');

    // Set Content
    headline.textContent = `${info.headline}`;
    image.src = `${info.authorPhoto}`;
    name.textContent = `Author: ${info.authorName}`;

    return card;
}