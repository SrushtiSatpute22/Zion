import React, { useState, useEffect } from "react";
import "./ProfileDetails.css"; // Import your CSS file for styling
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";
const ProfileDetails = () => {
  const anchorRef = React.useRef(null);
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState("");
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
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobileNo: "",
    address: "",

    organizationname: "",
    organizationtype: "",
    pancardnumber: "",
    gstnumber: "",
  });
  useEffect(() => {
    // Set dummy values when the component mounts
    setFormData({
      firstName: "Srushti",
      lastName: "Satpute",
      email: "srushti123@zionit.com",
      mobileNo: "1234567890",
      address: "123 Main St, City, Country",

      organizationname: "XYZ Corp",
      organizationtype: "Company",
      pancardnumber: "ABCD1234E",
      gstnumber: "GST1234567890",
    });
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform form validation and further actions with formData
    console.log(formData);
    // You can add your logic for form submission or API calls here
  };

  return (
    <div>
      <div className="home_header">
        <div>
          <p style={{ marginLeft: 70 }}>Home</p>
        </div>
        <Stack direction="row" spacing={2}>
          {/* <Paper>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
        <MenuItem>Theme</MenuItem>
      </MenuList>
    </Paper> */}
          <div>
            <Button
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? "composition-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
            >
              {/* Dashboard */}
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
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        </Stack>
      </div>
      <div className="profile-container">
        <img
          src={require("../src/Components/images/logo-01.jpg")}
          className="profilelogo"
          alt=""
        />

        <div style={{ width: "80%" }}>
          <form onSubmit={handleSubmit} className="profile-form">
            <div className="form-group">
              <label htmlFor="firstName">First Name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name:</label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="emailid">Email Id:</label>
              <input
                type="text"
                id="emailid"
                name="emailid"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="mobileno">Mobile No:</label>
              <input
                type="text"
                id="mobileno"
                name="mobileno"
                value={formData.mobileNo}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address:</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="organization name">Organization Name:</label>
              <input
                type="text"
                id="organization name"
                name="organization name"
                value={formData.organizationname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization type">Organization Type:</label>
              <input
                type="text"
                id="organization type"
                name="organization type"
                value={formData.organizationtype}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization address">
                Organization Address:
              </label>
              <input
                type="text"
                id="organization address"
                name="organization address"
                value={formData.organizationname}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="pancard number">Pancard Number:</label>
              <input
                type="text"
                id="pancard number"
                name="pancard number"
                value={formData.pancardnumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gst number">GSTNumber:</label>
              <input
                type="text"
                id="gst number"
                name="gst number"
                value={formData.gstnumber}
                onChange={handleChange}
                required
              />
            </div>
            <div style={{ display: "flex", gap: 100 }}>
              <button type="submit" className="submit-btn">
                Save
              </button>

              <button type="submit" className="submit-btn">
                Edit profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
