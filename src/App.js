import React from "react";
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import AboutUs from "./Components/AboutUs/AboutUs";
import store from "./Redux/store";
import LayoutWithHeaderandSideBar from '../src/Components/LayoutWithHeaderandSideBar/LayoutWithHeaderandSideBar'

const App = () => {
  return (
    <Provider store={store}>
      {/* <LoadingAnimation2/> */}
      <Router>
        <Routes>
          <Route>
            <Route path="/" element={<LayoutWithHeaderandSideBar />} />
            <Route path="/aboutUs" element={<AboutUs />} />
          </Route>
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
