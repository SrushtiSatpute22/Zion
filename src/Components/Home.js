import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { Pagination } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { Dropdown } from "@mui/base/Dropdown";
import { Menu } from "@mui/base/Menu";
import { MenuButton as BaseMenuButton } from "@mui/base/MenuButton";
import { MenuItem as BaseMenuItem, menuItemClasses } from "@mui/base/MenuItem";
import { ImFolderDownload } from "react-icons/im";
import { CgProfile } from "react-icons/cg";
import Chart from "react-apexcharts";
import { chartData, chartData2 } from "./fake";
import HomeCard from "./HomeCard";
import DropDown from "./DropDown";
import Switch from "@mui/material/Switch";
import label from "@mui/material/Switch";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { Route, Routes, useNavigate } from "react-router-dom";
import Profile from "../Profile";
import { TfiWorld } from "react-icons/tfi";
import { BsFileBarGraph } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa";
import { FaUserFriends } from "react-icons/fa";

function Home() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const [states, setStates] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [documents, setDocuments] = useState([]);
  const [selectedDocument, setSelectedDocument] = useState("");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  const options = {
    colors: ["#7b68ee", "grey"],
  };
  const series = [
    {
      name: "Series 1",
      data: chartData,
    },
    {
      name: "Series 2",
      data: chartData2,
    },
  ];
  const featuresList = [
    {
      icon: <TfiWorld size={28} />,
      iconColor: "#1f5131",
      heading: "Today Panic Count",
      content: "0",
    },
    {
      icon: <TfiWorld size={28} />,
      iconColor: "#ffccff",
      heading: "Total Panic Count",
      content: "0",
    },
    {
      icon: <FaUserFriends size={28} />,
      iconColor: "#ffccff",
      heading: "Total Vehicle Registered",
      content: "0",
    },
    {
      icon: <BsFileBarGraph size={28} />,
      iconColor: "#ffccff",
      heading: "Total Documents uploaded",
      content: "0",
    },
    {
      icon: <FaUserFriends size={28} />,
      iconColor: "#ffccff",
      heading: "Today Support Count",
      content: "0",
    },

    {
      icon: <FaDollarSign size={28} />,
      iconColor: "#ffccff",
      heading: "Today Feedback Count ",
      content: "0",
    },

    {
      icon: <CgProfile size={28} />,
      iconColor: "#ffccff",
      heading: "Total User Count",
      content: "0",
    },
  ];

  return (
    <div className="homeContainer">
      <div className="home_header">
        <div>
          <p style={{ marginLeft: 70 }}>Home</p>
        </div>
        <Stack direction="row" spacing={2}>
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              <CgProfile size={30} color="black" />
            </Button>

            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              placement="bottom-start"
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin:
                      placement === "bottom-start" ? "left top" : "left bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="composition-menu"
                        aria-labelledby="composition-button"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={() => navigate("/profile")}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                        <MenuItem onClick={handleClose}>Theme</MenuItem>
                        <MenuItem onClick={handleClose}>Dark Mode</MenuItem>
                        <Switch {...label} defaultChecked />
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      </div>

      <div className="left_side">
        <div className="card_container">
          {featuresList.map((item) => {
            return (
              <HomeCard
                key={item.heading}
                onClick={() => {}}
                heading={item.heading}
                content={item.content}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>
      <div className="graph_container">
        <div className="graph_header">
          <p>Graph</p>
        </div>
        <div style={{ display: "flex" }}>
          <div className="formContent">
            <label style={{ fontSize: 16 }}>From Date:</label>

            <input className="inputContainer" type="date" />
          </div>
          <div className="formContent">
            <label>To Date:</label>

            <input className="inputContainer" type="date" />
          </div>
          <button
            className="submit_button"
            type="submit"
            style={{ fontSize: 12, fontWeight: "500" }}
          >
            Submit
          </button>
        </div>
        <div className="graph">
          <div>
            <Chart options={options} series={series} type="area" width="500" />
          </div>
          <div>
            <Chart options={options} series={series} type="bar" width="500" />
          </div>
        </div>

        <DropDown
          countries={countries}
          setCountries={setCountries}
          selectedCountry={selectedCountry}
          setSelectedCountry={setSelectedCountry}
          documents={documents}
          setDocuments={setDocuments}
          selectedDocument={selectedDocument}
          setSelectedDocument={setSelectedDocument}
        />
      </div>
    </div>
  );
}
export default Home;
