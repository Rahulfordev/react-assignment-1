import NewsArticle from "../../components/NewsArticle/NewsArticle";
import "./newsFeed.css";
const books = [
  {
    title: "The Lost Symphony",
    author: "Elena Ramirez",
    publicationDate: "2022-01-15",
    content:
      "A tale of music, mystery, and the pursuit of a forgotten masterpiece.",
  },
  {
    title: "Echoes of Eternity",
    author: "Samuel Patel",
    publicationDate: "2022-02-28",
    content:
      "Exploring the boundaries of time and the enigmatic echoes of the universe.",
  },
  {
    title: "Shadows of Serendipity",
    author: "Isabella Wang",
    publicationDate: "2022-03-22",
    content:
      "A journey through chance encounters, luck, and the secrets they unravel.",
  },
  {
    title: "Whispers in the Wind",
    author: "Lucas Thompson",
    publicationDate: "2022-04-11",
    content: "Stories carried by the wind, revealing tales from distant lands.",
  },
  {
    title: "The Enigmatic Cipher",
    author: "Sophie Bennett",
    publicationDate: "2022-05-09",
    content: "Unraveling the mysteries hidden within a cryptic code.",
  },
  {
    title: "Gilded Dreams",
    author: "Nathan Reynolds",
    publicationDate: "2022-06-18",
    content:
      "Exploring the shimmering world of aspirations and their golden hues.",
  },
  {
    title: "The Azure Horizon",
    author: "Mia Campbell",
    publicationDate: "2022-07-25",
    content: "A journey across the azure expanse, where sky meets the sea.",
  },
  {
    title: "Eternal Ember",
    author: "Oliver Hughes",
    publicationDate: "2022-08-30",
    content:
      "The story of a flame that never dies, igniting passions through generations.",
  },
  {
    title: "Spectrum of Silence",
    author: "Grace Foster",
    publicationDate: "2022-09-14",
    content:
      "Exploring the beauty and profundity found within silence's myriad shades.",
  },
  {
    title: "Harmony's Tapestry",
    author: "Benjamin Lee",
    publicationDate: "2022-10-03",
    content: "Weaving the threads of harmony into life's intricate tapestry.",
  },
  {
    title: "Crimson Echo",
    author: "Victoria Reynolds",
    publicationDate: "2022-11-20",
    content: "The resounding echoes of a life painted in shades of crimson.",
  },
  {
    title: "Labyrinth of Whispers",
    author: "Elijah Carter",
    publicationDate: "2022-12-12",
    content:
      "Navigating through a labyrinth of secrets whispered by forgotten walls.",
  },
];

const NewsFeed = () => {
  return (
    <section>
      <h1>News Article</h1>
      <div className="book">
        {books.map((book, index) => (
          <NewsArticle key={index} books={book} />
        ))}
      </div>
    </section>
  );
};

export default NewsFeed;
