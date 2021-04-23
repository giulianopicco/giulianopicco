import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Posts";
import Project from "./components/Project";

import ReactGa from "react-ga";

import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  useEffect(() => {
    ReactGa.initialize("UA-195290073-1");
    // report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const scrollToContact = () => {
    // window.scrollTo(0, document.body.scrollHeight);
    console.log(window.scrollY);
    console.log(
      document.getElementById("contactForm").getBoundingClientRect().top
    );
    const top =
      window.scrollY +
      document.getElementById("contactForm").getBoundingClientRect().top;
    window.scrollTo({
      // top: document.body.scrollHeight,
      top: top,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <Navbar scrollToContact={scrollToContact} />
      <ScrollToTop>
        <Switch>
          <Route component={Home} path="/" exact></Route>
          <Route component={SinglePost} path="/post/:slug"></Route>
          <Route component={Post} path="/post"></Route>
          <Route component={Project} path="/project"></Route>
          <Route component={About} path="/about"></Route>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
