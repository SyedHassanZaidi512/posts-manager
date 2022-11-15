import "./App.css";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as React from "react";
import Bar from "./components/Bar";
import { useState } from "react";
import { useEffect } from "react";
import PostList from "./components/PostList";
import PostDetail from "./components/PostDetail";
import AddList from "./components/AddList";
import Form from "./components/Form";
function App() {
  const [posts, setPosts] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [postDetail, setPostDetail] = useState("");
  const [add, setAdd] = useState("");
  const [ePost, setEPost] = useState("");
  const [open, setOpen] = useState(false);
  const [addForm, setAddForm] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");
  const [addTitle, setAddTitle] = useState("");
  const [addBody, setAddBody] = useState("");

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    const res = await axios.get("https://dummyjson.com/posts/");
    setPosts(res.data.posts);
  };

  const addPost = () => {
    setAddForm(true);
  };

  const submitAddForm = (title, body) => {
    const post = { id: posts.length + 1, title: title, body: body };
    setPosts([...posts, post]);
    setAddTitle("")
    setAddBody("")
    setAddForm(false);
  };

  const handleClick = (id) => {
    setShowDetails(true);
    const onePost =
      posts &&
      posts.length > 0 &&
      posts.filter((post) => {
        return post.id === id;
      });
    setPostDetail(onePost);
  };

  const addFunc = (post, id) => {
    const check =
      add &&
      add.length > 0 &&
      add.filter((element) => {
        return element.id === id;
      });
    if (check.length > 0) {
      return alert("already added");
    }
    const onePost =
      posts &&
      posts.length > 0 &&
      posts.filter((post) => {
        return post.id === id;
      });
    setAdd([...add, onePost[0]]);
  };

  const handleNav = () => {
    setShowDetails(false);
  };

  const editPost = (post, id) => {
    setEPost(post);
    setOpen(true);
  };

  const submitForm = async (title, body, id) => {
    const newArray =
      posts &&
      posts.length > 0 &&
      posts.map((post) => {
        if (post.id === id) {
          return { ...post, title: title, body: body };
        } else {
          return post;
        }
      });

    const editAdd = add.map((post) => {
      if (post.id === id) {
        return { ...post, title: title, body: body };
      } else {
        return post;
      }
    });
    setPosts(newArray);
    setAdd(editAdd);
    setOpen(false);
  };

  return (
    <Router>
      <div className="App">
        <Bar handleNav={handleNav} addPost={addPost} length={add.length} />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Form
                  open={addForm}
                  setOpen={setAddForm}
                  title={addTitle}
                  setTitle={setAddTitle}
                  body={addBody}
                  setBody={setAddBody}
                  submitForm={submitAddForm}
                  heading={"Add Posts"}
                  post={ePost}
                />

                {!showDetails && (
                  <PostList
                    posts={posts}
                    handleClick={handleClick}
                    addFunc={addFunc}
                  />
                )}
                {showDetails && <PostDetail postDetail={postDetail} />}
              </>
            }
          />
          <Route
            path="addList"
            element={
              <>
                <Form
                  title={editTitle}
                  setTitle={setEditTitle}
                  body={editBody}
                  setBody={setEditBody}
                  open={ePost ? open : false}
                  setOpen={setOpen}
                  post={ePost}
                  submitForm={submitForm}
                  heading={"Edit Post"}
                />
                <AddList editPost={editPost} add={add} />
              </>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
