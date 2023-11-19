/* eslint-disable react/prop-types */
const ArticlePage = ({ comment: { userName, comment } }) => {
  return (
    <div className="comment">
      <h3 className="userName">{userName}</h3>
      <h4 className="user__comment">{comment}</h4>
    </div>
  );
};

export default ArticlePage;
