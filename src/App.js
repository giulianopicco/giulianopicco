import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route component={Home} path="/" exact></Route>
        <Route component={About} path="/about"></Route>
        <Route component={SinglePost} path="/post/:slug"></Route>
        <Route component={Post} path="/post"></Route>
        <Route component={Project} path="/project"></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
