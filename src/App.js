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
