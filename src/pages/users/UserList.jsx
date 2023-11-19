import UserProfile from "../../components/user/UserProfile";
import "./user.css";

const Users = [
  {
    name: "Asif Nawaz",
    avatar: "https://i.postimg.cc/768Nnhfq/1.png",
    bio: "A passionate and creative individual with a love for technology and design.",
  },
  {
    name: "Muhammad Faruk",
    avatar: "https://i.postimg.cc/gJL2mcDL/2.png",
    bio: "An experienced software engineer with a focus on building scalable and reliable systems.",
  },
  {
    name: "Shakib Al Hassan",
    avatar: "https://i.postimg.cc/XYxJgzqq/3.png",
    bio: "A talented artist with a passion for creating beautiful and meaningful works of art.",
  },
  {
    name: "Tanjim Sakib",
    avatar: "https://i.postimg.cc/j2zqn8Bs/4.png",
    bio: "A motivated and results-driven entrepreneur with a knack for business development.",
  },
  {
    name: "Mehedi Hassan Miraj",
    avatar: "https://i.postimg.cc/8PRs75Vh/5.png",
    bio: "A compassionate and empathetic individual with a passion for helping others.",
  },
  {
    name: "Zaheid Sabur",
    avatar: "https://i.postimg.cc/cLdCwSsP/6.png",
    bio: "A knowledgeable and experienced teacher with a gift for inspiring and motivating students.",
  },
];

const UserList = () => {
  return (
    <div>
      <h1>User Profile</h1>
      <section className="users-section">
        {Users.map((user, index) => (
          <UserProfile key={index} user={user} />
        ))}
      </section>
    </div>
  );
};

export default UserList;
