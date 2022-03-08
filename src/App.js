import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Posts";
import Project from "./components/Project";
import Modal from "./components/ui/Modal";

import ReactGa from "react-ga";

import ScrollToTop from "./components/ui/ScrollToTop";
import Page404 from "./components/Page404";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);

  const loadModal = (images) => {
    setModalImages(images)
    setShowModal(true)
  }
  
  useEffect(() => {
    ReactGa.initialize("UA-195290073-1");
    // report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, []);

  const scrollToContact = () => {
    // window.scrollTo(0, document.body.scrollHeight);
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
    <>
      <Modal showModal={showModal} setShowModal={setShowModal} modalImages={modalImages}/>
        <BrowserRouter>
          <Navbar scrollToContact={scrollToContact} />
          <ScrollToTop>
      <AnimatePresence data-barba="container" exitBeforeEnter onExitComplete={() => setShowModal(false)} >
            <Switch>
              <Route component={Home} path="/" exact></Route>
              <Route component={Page404} path="/post/404"></Route>
              <Route component={SinglePost} path="/post/:slug"></Route>
              {/* <Route component={Post} path="/post"></Route> */}
              <Route render={(props) => <Project {...props} setShowModal={setShowModal} loadModal={loadModal} modalImages={modalImages}/>} path="/project"></Route>
              <Route component={About} path="/about"></Route>
              <Route component={Page404} path="*"></Route>
            </Switch>
      </AnimatePresence>
          </ScrollToTop>
        </BrowserRouter>
    </>
  );
}

export default App;
