import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import "./Navbar.css";
import { useNavigate } from "react-router";
import { TbReportSearch } from "react-icons/tb";
import { CgUserList } from "react-icons/cg";
import { BiCloudUpload } from "react-icons/bi";
import { BsPatchCheck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";

const options = [
  {
    id: "1",
    icon: <AiOutlineHome size={25} color="#c5c6c6" />,
    title: "Home",
    route: "/",
  },
  {
    id: "2",

    icon: <BiCloudUpload size={30} color="#c5c6c6" />,
    title: "Business",
    route: "/permission",
  },
  {
    id: "3",
    icon: <BsPatchCheck size={25} color="#c5c6c6" />,

    title: "User",
    route: "/user",
  },
  {
    id: "4",
    icon: <CgUserList size={25} color="#c5c6c6" />,
    title: "FAQ",

    route: "/faq",
  },
  {
    id: "5",
    icon: <TbReportSearch size={25} color="#c5c6c6" />,
    title: "Content",
    route: "/content",
  },
];

function Navbar({ openDrawer, setOpenDrawer }) {
  const [active, setActive] = useState(options[0].title);
  const navigate = useNavigate();
  const currentPath = window.location.pathname;

  useEffect(() => {
    let index = options.findIndex((item) => item.route === currentPath);
    if (index > -1) {
      setActive(options[index].title);
    } else {
      setActive(options[0].title);
    }
  }, [currentPath]);

  return (
    <Drawer
      open={openDrawer}
      onClose={() => {
        setOpenDrawer(false);
      }}
    >
      <div className="drawer_container">
        <div className="buttons_container">
          <div className="imgHeader">
            <img
              src={require("./images/logo-02.png")}
              className="logo"
              alt=""
            />
          </div>
          {options.map((item) => {
            return (
              <div
                className={`nav-links ${
                  active === item.title ? "active_link" : null
                }`}
                key={item.id}
                onClick={() => {
                  setActive(item.title);
                  setOpenDrawer(false);
                }}
              >
                <li className="forward">
                  <a>
                    <h3
                      style={{ fontSize: 18, fontWeight: "600" }}
                      onClick={() => {
                        navigate(item.route);
                      }}
                    >
                      <div className="icon_title">
                        <span className="span1">{item.icon}</span>
                        <span className="span2">{item.title}</span>
                      </div>
                    </h3>
                  </a>
                </li>
              </div>
            );
          })}
          {/* <Divider sx={{ background: "rgba(255, 255, 255, 0.12)" }} /> */}
        </div>
        {/* <button
          onClick={() => {
            localStorage.clear();
            window.location.replace("/");
          }}
          className="logout_button"
        >
          Log Out
        </button> */}
      </div>
    </Drawer>
  );
}

export default Navbar;
