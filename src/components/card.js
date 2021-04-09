const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //

  const {headline, authorPhoto, authorName} = article;

  const articleCard = document.createElement('div');
  const articleHeadline = document.createElement('div');
  const articleAuthorInfo = document.createElement('div');
  const articleImgContainer = document.createElement('div');
  const articleImg = document.createElement('img');
  const articleAuthor = document.createElement('span');

  articleCard.appendChild(articleHeadline);
  articleCard.appendChild(articleAuthorInfo);
  articleAuthorInfo.appendChild(articleImgContainer);
  articleImgContainer.appendChild(articleImg);
  articleAuthorInfo.appendChild(articleAuthor);

  articleCard.classList.add('card');
  articleHeadline.classList.add('headline');
  articleHeadline.textContent = `${headline}`;
  articleAuthorInfo.classList.add('author');
  articleImgContainer.classList.add('img-container');
  articleImg.src = `${authorPhoto}`;
  articleAuthor.textContent = `By ${authorName}`;

  return articleCard;

  // const saveHeadline = document.querySelector('div.card');

  // saveHeadline.addEventListener('click', function(event){
  //   console.log(headline);
  // });
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  const addArticle = document.querySelector(`${selector}`);
  
  axios
    .get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
      addArticle.appendChild(Card(res.articles.bootstrap[0]));
    })
    .then(res => {
      addArticle.appendChild(Card(res.articles.javascript[0]));
    })
    .then(res => {
      addArticle.appendChild(Card(res.articles.jquery[0]));
    })
    .then(res => {
      addArticle.appendChild(Card(res.articles.node[0]));
    })
    .then(res => {
      addArticle.appendChild(Card(res.articles.technology[0]));
    })
    .catch(error =>{
      console.log(error);
    });
}

export { Card, cardAppender }
