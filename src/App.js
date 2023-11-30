import { useState } from "react";
import About from "./About";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./Home";
import Missing from "./Missing";
import Nav from "./Nav";
import NewPost from "./NewPost";
import Post from "./Post";
import PostLayout from "./PostLayout";
import PostPage from "./PostPage";
import { Routes, Route, Link } from "react-router-dom";
import { format } from "date-fns";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body: "Made a video about Tesla Q1 results",
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 02, 2021 11:17:36 AM",
      body: "Made a video about Assasins",
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 03, 2021 11:17:36 AM",
      body: "Made a video about GTA",
    },
    {
      id: 4,
      title: "My 4th Post",
      datetime: "July 04, 2021 11:17:36 AM",
      body: "Made a video about WATCH DOGS",
    },
  ]);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy pp");
    const newPost = { id, title: postTitle, datetime, body: postBody };
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle("");
    setPostBody("");
  };

  return (
    <div className="App">
      <Header title="MySpace Social Media" />
      <Nav search={search} setSearch={setSearch} />
      <Home posts={posts} />
      <NewPost />
      <PostPage />
      <About />
      <Missing />
      <Footer />
    </div>
  );
}

export default App;
