// import React, { Component } from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
//   useLocation,
// } from "react-router-dom";
// import Home from "./Components/Home";
// import Permission from "./Components/Permission";
// import { IoMdMenu } from "react-icons/io";
// import Navbar from "./Components/Navbar";
// import User from "./Components/User";

// class App extends Component {
//   render() {
//     const [openDrawer, setOpenDrawer] = useState(false);
//     const location = useLocation();

//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <Routes>
//             <Route exact path="/" element={<Home />}></Route>
//             <Route exact path="/permission" element={<Permission />}></Route>
//             <Route exact path="/user" element={<User />}></Route>
//           </Routes>
//           <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
//           <IoMdMenu
//             onClick={() => {
//               setOpenDrawer(true);
//             }}
//             className="menuButton"
//             size={40}
//           />
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;
import React, { useState } from "react";
import "./App.css";
import Home from "./Components/Home";
import { Route, Routes, useLocation } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import Navbar from "./Components/Navbar";
import Permission from "./Components/Permission";
import User from "./Components/User";
import Faq from "./Components/Faq";
import Content from "./Components/Content";
import Profile from "./Profile";

import { BrowserRouter as Switch } from "react-router-dom";
import ContactReason from "./Components/ContactReason";
import Layout from "./Components/Layout";
import Contactmessage from "./Components/Contactmessage";
// import Footer from "./Components/Footer";
function App() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const location = useLocation();

  // const showNavbar = location.pathname !== "/";
  return (
    <div className="App ">
      <>
        <Routes>
          <Route path="/contactreason" component={<ContactReason />} />

          <Route
            exact
            path="/contactmessage"
            element={<Contactmessage />}
          ></Route>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/permission" element={<Permission />}></Route>
          <Route exact path="/user" element={<User />}></Route>
          <Route exact path="/faq" element={<Faq />}></Route>
          <Route exact path="/content" element={<Content />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route
            exact
            path="/contactmessage"
            element={<Contactmessage />}
          ></Route>
        </Routes>
        <Navbar openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
        {/* {showNavbar && ( */}
        <IoMdMenu
          onClick={() => {
            setOpenDrawer(true);
          }}
          className="menuButton"
          size={40}
        />
        {/* <Footer /> */}
      </>
    </div>
  );
}

export default App;
