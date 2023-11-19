import ArticlePage from "../../components/comment/ArticlePage";
import './comment.css'
const comments = [
  {
    id: 1,
    userName: "John Doe",
    comment: "This is a great article!",
  },
  {
    id: 2,
    userName: "Jane Doe",
    comment: "I agree! This is very informative.",
  },
  {
    id: 3,
    userName: "Peter Jones",
    comment: "I have a question about this. Can you please clarify?",
  },
  {
    id: 4,
    userName: "Mary Smith",
    comment: "I found this article very helpful. Thank you for sharing.",
  },
  {
    id: 5,
    userName: "David Brown",
    comment:
      "I have a suggestion for improving this article. Would you like to hear it?",
  },
  {
    id: 6,
    userName: "Susan Williams",
    comment:
      "I really enjoyed reading this article. It was well-written and engaging.",
  },
  {
    id: 7,
    userName: "Michael Johnson",
    comment:
      "I'm not sure I agree with all of the points in this article, but it was still interesting to read.",
  },
  {
    id: 8,
    userName: "Sarah Taylor",
    comment:
      "I'm glad I found this article. It was exactly what I was looking for.",
  },
  {
    id: 9,
    userName: "Mark Davis",
    comment:
      "I'm going to bookmark this article so I can come back to it later.",
  },
  {
    id: 10,
    userName: "Elizabeth Miller",
    comment: "I'm going to share this article with my friends and family.",
  },
  {
    id: 11,
    userName: "Paul Smith",
    comment: "I'm going to write a blog post about this article.",
  },
  {
    id: 12,
    userName: "Jane Doe",
    comment: "I agree! This is very informative.",
  },
];

const Comments = () => {
  return (
    <section>
      <h1>User Comment</h1>
      <div className="comments">
        {comments.map((comment) => (
          <ArticlePage key={comment.id} comment={comment} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
