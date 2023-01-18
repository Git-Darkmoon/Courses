const tweetGenerator = (tweet) => {
  return `

  <div class="col-sm-6 mt-4">
    <div class="card">
      <div class="card-body text-end">
        <h5 class="card-title text-start">${tweet.author}</h5>
        <p class="card-text text-start lead">${tweet.content}</p>
        <a href="#" class="btn btn-primary mb-2">Retweet</a>
        <p class="card-text text-muted">Posted in: ${tweet.date.slice(
          0,
          10
        )}</p>
      </div>
    </div>
  </div>
`;
};

let tweetDom = document.querySelector("#tweets");

const invokeData = async () => {
  const response = await fetch(
    "https://saldatweets.herokuapp.com/publications"
  );
  const data = await response.json();

  data.map((item) => {
    tweetDom.innerHTML += tweetGenerator(item);
  });
};
invokeData();
