import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx'
import './styles/styles.css';

var exampleReviews = [
  {
      "id": 85,
      "experience_id": 4,
      "username": "Elsa",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/nathalie_fs/128.jpg",
      "date": "2020-02-01T08:00:00.000Z",
      "stars": 2,
      "review": "Accusamus odit in suscipit quia minima cupiditate voluptas nam reiciendis."
  },
  {
      "id": 180,
      "experience_id": 4,
      "username": "Hollis",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bryan_topham/128.jpg",
      "date": "2020-02-01T08:00:00.000Z",
      "stars": 2,
      "review": "Eligendi eos dicta."
  },
  {
      "id": 194,
      "experience_id": 4,
      "username": "Henri",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/praveen_vijaya/128.jpg",
      "date": "2020-02-01T08:00:00.000Z",
      "stars": 1,
      "review": "Dicta illum placeat voluptates dolorem et numquam ex."
  },
  {
      "id": 319,
      "experience_id": 4,
      "username": "Baby",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/grrr_nl/128.jpg",
      "date": "2020-01-01T08:00:00.000Z",
      "stars": 2,
      "review": "Facilis repellendus eius eius et ut."
  },
  {
      "id": 432,
      "experience_id": 4,
      "username": "Domenic",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/imammuht/128.jpg",
      "date": "2019-12-01T08:00:00.000Z",
      "stars": 1,
      "review": "Omnis voluptas rerum."
  },
  {
      "id": 473,
      "experience_id": 4,
      "username": "Lew",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/128.jpg",
      "date": "2019-12-01T08:00:00.000Z",
      "stars": 3,
      "review": "Omnis et sed voluptatem."
  },
  {
      "id": 665,
      "experience_id": 4,
      "username": "Kathryn",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/ivanfilipovbg/128.jpg",
      "date": "2019-11-01T07:00:00.000Z",
      "stars": 2,
      "review": "Sapiente quam eum ut possimus."
  },
  {
      "id": 682,
      "experience_id": 4,
      "username": "Vidal",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/jackiesaik/128.jpg",
      "date": "2019-11-01T07:00:00.000Z",
      "stars": 5,
      "review": "Voluptas architecto autem temporibus debitis non dolores laboriosam."
  },
  {
      "id": 705,
      "experience_id": 4,
      "username": "Gail",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/mcflydesign/128.jpg",
      "date": "2019-11-01T07:00:00.000Z",
      "stars": 2,
      "review": "Aut tenetur et nesciunt et odio."
  },
  {
      "id": 751,
      "experience_id": 4,
      "username": "Emmanuelle",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/swooshycueb/128.jpg",
      "date": "2019-11-01T07:00:00.000Z",
      "stars": 4,
      "review": "Voluptas molestiae velit assumenda qui."
  },
  {
      "id": 754,
      "experience_id": 4,
      "username": "Lyric",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/emileboudeling/128.jpg",
      "date": "2019-11-01T07:00:00.000Z",
      "stars": 0,
      "review": "Alias eum voluptas nihil dicta."
  },
  {
      "id": 761,
      "experience_id": 4,
      "username": "Zelda",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bistrianiosip/128.jpg",
      "date": "2019-11-01T07:00:00.000Z",
      "stars": 3,
      "review": "Ex culpa maiores qui."
  },
  {
      "id": 814,
      "experience_id": 4,
      "username": "Charity",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/lebronjennan/128.jpg",
      "date": "2019-10-01T07:00:00.000Z",
      "stars": 1,
      "review": "Et inventore voluptas necessitatibus."
  },
  {
      "id": 860,
      "experience_id": 4,
      "username": "Morris",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/thomasschrijer/128.jpg",
      "date": "2019-10-01T07:00:00.000Z",
      "stars": 1,
      "review": "Tenetur fuga repellendus."
  },
  {
      "id": 958,
      "experience_id": 4,
      "username": "Emmitt",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/shesgared/128.jpg",
      "date": "2019-10-01T07:00:00.000Z",
      "stars": 4,
      "review": "Ipsam velit fugit magni quia asperiores qui sint totam atque."
  },
  {
      "id": 1029,
      "experience_id": 4,
      "username": "Elfrieda",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/S0ufi4n3/128.jpg",
      "date": "2019-09-01T07:00:00.000Z",
      "stars": 5,
      "review": "Et et sit quasi doloribus."
  },
  {
      "id": 1119,
      "experience_id": 4,
      "username": "Cassie",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/sircalebgrove/128.jpg",
      "date": "2019-09-01T07:00:00.000Z",
      "stars": 3,
      "review": "Alias sit ullam."
  },
  {
      "id": 1162,
      "experience_id": 4,
      "username": "Herbert",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bboy1895/128.jpg",
      "date": "2019-09-01T07:00:00.000Z",
      "stars": 2,
      "review": "Quisquam maxime adipisci quia dolorem alias."
  },
  {
      "id": 1221,
      "experience_id": 4,
      "username": "Theresia",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/kurtinc/128.jpg",
      "date": "2019-08-01T07:00:00.000Z",
      "stars": 0,
      "review": "Ipsum rem doloremque commodi numquam fuga ipsam dolorem vel enim."
  },
  {
      "id": 1270,
      "experience_id": 4,
      "username": "Delfina",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/justme_timothyg/128.jpg",
      "date": "2019-08-01T07:00:00.000Z",
      "stars": 5,
      "review": "Dolores deserunt sint consequatur qui magnam."
  },
  {
      "id": 1584,
      "experience_id": 4,
      "username": "Kurtis",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/xripunov/128.jpg",
      "date": "2019-07-01T07:00:00.000Z",
      "stars": 0,
      "review": "Sit et at nam."
  },
  {
      "id": 1738,
      "experience_id": 4,
      "username": "Nikita",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/areus/128.jpg",
      "date": "2019-06-01T07:00:00.000Z",
      "stars": 1,
      "review": "Ex laborum quam magni et esse quae neque."
  },
  {
      "id": 1961,
      "experience_id": 4,
      "username": "Garth",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/franciscoamk/128.jpg",
      "date": "2019-05-01T07:00:00.000Z",
      "stars": 3,
      "review": "Nulla sunt libero."
  },
  {
      "id": 1974,
      "experience_id": 4,
      "username": "Verla",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/angelceballos/128.jpg",
      "date": "2019-05-01T07:00:00.000Z",
      "stars": 5,
      "review": "Reiciendis quo qui."
  },
  {
      "id": 2370,
      "experience_id": 4,
      "username": "Monique",
      "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/axel/128.jpg",
      "date": "2019-03-01T08:00:00.000Z",
      "stars": 4,
      "review": "Magni quo qui voluptatem repellendus quam sed excepturi ut eum."
  }
];

ReactDOM.render(<App reviews={exampleReviews}/>, document.getElementById('app'));