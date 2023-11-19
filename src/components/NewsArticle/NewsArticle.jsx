/* eslint-disable react/prop-types */
const NewsArticle = ({
  books: { title, author, publicationDate, content },
}) => {
  return (
    <div className="book-container">
      <h3 className="book__title">
        <strong>
          <em>Title: </em>
        </strong>
        {title}
      </h3>
      <h4 className="book__author">
        <strong>
          <em>Author: </em>
        </strong>
        {author}
      </h4>
      <p className="book__pub">
        <strong>
          <em>Copyright: </em>
        </strong>
        {publicationDate}
      </p>
      <p className="book__contetn">
        <strong>
          <em>Content: </em>
        </strong>
        {content}
      </p>
    </div>
  );
};

export default NewsArticle;
