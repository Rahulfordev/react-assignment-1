import "./App.css";
import ProductList from "./pages/Products/ProductList";
import UserList from "./pages/users/UserList";
import NewsFeed from "./pages/NewsFeed/NewsFeed";
import Comments from "./pages/comments/Comments"; 

function App() {
  return (
    <>
      <div>
        <ProductList />
        <UserList />
        <NewsFeed />
        <Comments />
      </div>
    </>
  );
}

export default App;
