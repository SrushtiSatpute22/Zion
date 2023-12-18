import React, { useState, useEffect } from "react";
import "./User.css";
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

function User() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [permissionToEdit, setPermissionToEdit] = useState({});
  const [permissionName, setPermissionName] = useState("");
  const [data, setData] = useState([]);
  const [userId, setUserId] = useState("15");
  const [isEdit, setIsEdit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataLength, setDataLength] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [paginatorArray, setPaginatorArray] = useState([]);
  const pageSize = 6;
  const [open, setOpen] = React.useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
  return (
    <div className="permissioncontainer">
      <div>
        <div className="header">
          <div
            style={{
              paddingRight: 10,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CgProfile size={30} />
          </div>
        </div>
        <div
          className="header"
          style={{
            justifyContent: "space-between",
          }}
        >
          <p style={{ marginLeft: 10 }}>User Registration</p>
          <button
            className="addButton"
            onClick={() => {
              setIsFormVisible(!isFormVisible);
            }}
          >
            {isFormVisible ? <IoIosClose size={16} /> : <GoPlus />}
          </button>
        </div>
      </div>
      {isFormVisible ? (
        <>
          <form className="form_box">
            <div>
              <h3 style={{ fontWeight: "500" }}>Business Registration form</h3>
            </div>

            <div className="form-row">
              <div className="underline">
                <div>
                  <label>Business</label>
                </div>

                <div className="dropDownContainer">
                  <select
                    id="dropdown"
                    value={selectedOption}
                    onChange={handleSelectChange}
                    className="dropDown"
                  >
                    <option value="">Select Business</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                  </select>
                </div>
              </div>
            </div>
            {/* <div>
              <label>First Name</label>
            </div>
            <input
              onChange={(e) => {
                // setPermissionName(e.target.value);
              }}
              type="text"
              className="inputContainer"
              placeholder="User ID Prefix"
            />
            <div>
              <label>Last Name</label>
            </div>
            <input
              onChange={(e) => {
                // setPermissionName(e.target.value);
              }}
              type="text"
              className="inputContainer"
              placeholder="User ID Prefix"
            /> */}
            <div className="form-row">
              <div className=" input-data">
                <input
                  className="inputContainer"
                  required
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="text"
                  placeholder=""
                />
                <div className="underline"></div>
                <label style={{ fontSize: 16 }}>First Name</label>
              </div>
              <div className="input-data">
                <input
                  className="inputContainer"
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="text"
                  placeholder=" "
                  size={100}
                  required
                />
                <div className="underline"></div>
                <label>Last Name</label>
              </div>
            </div>
            <div className="form-row">
              <div className=" input-data">
                <input
                  className="inputContainer"
                  required
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="text"
                  placeholder=""
                  size={100}
                />
                <div className="underline"></div>
                <label style={{ fontSize: 16 }}>Email Id</label>
              </div>
              <div className="input-data">
                <input
                  className="inputContainer"
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="text"
                  placeholder=" "
                  size={100}
                  required
                />
                <div className="underline"></div>
                <label>Mobile No</label>
              </div>
            </div>
            <div style={{ flexDirection: "row" }}>
              <button
                className="button"
                type="Save"
                style={{ fontSize: 10, fontWeight: "bold" }}
              >
                Save
              </button>
              <button
                className="button"
                onClick={() => {
                  setIsFormVisible(false);
                }}
                style={{ fontSize: 10, fontWeight: "bold" }}
              >
                Cancel
              </button>
            </div>
          </form>
        </>
      ) : null}
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <p>Show</p>
          <input />
        </div>

        <div style={{ display: "flex", gap: 100 }}>
          <ImFolderDownload size={30} color="#386dde" />
          <div style={{ display: "flex", gap: 10 }}>
            <p>Search:</p>
            <input />
          </div>
        </div>
      </div>
      <div className="table_container">
        <div className="dropDownContainer">
          <select
            id="dropdown"
            value={selectedOption}
            onChange={handleSelectChange}
            className="dropDown"
          >
            <option value="">Select Business</option>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <table style={{ marginTop: 20 }}>
          <tr className="row">
            <th className="th">Sr.No</th>
            <th className="th">First Name</th>
            <th className="th"> Last Name</th>
            <th className="th"> Address</th>
            <th className="th">Email Id</th>
            <th className="th">Mobile Number</th>
            <th className="th">Action</th>
          </tr>
          <tr className="row"></tr>
        </table>
      </div>

      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        defaultPage={1}
        onChange={(e, page) => {
          setCurrentPage(page);
          console.log(page);
        }}
      />
    </div>
  );
}
export default User;
{
  /* <td className="td">1</td>
            <td className="td">KF Bioplants</td>
            <td className="td">
              Taluka Haveli, Sr. No. 129/1-3C, Manjri Bk, Pune, Maharashtra
              411036
            </td>
            <td className="td">AABCK4309E</td>
            <td className="td">27AABCK4309E1ZV</td>
            <td className="td">http://20.219.1.165:8182/</td>
            <td className="td">KFBP</td>
            <td className="td">KFBP</td>
            <td className="td">2023-11-05</td>
            <td className="td">2024-11-04</td>
            <td className="td">2024-11-04</td> */
}
{
  /* 
            <td className="td">
              <AiFillEdit
                size={24}
                onClick={(e) => {
                  // editPermission(item);
                }}
                style={{ paddingRight: 15 }}
              />
              <AiFillDelete
                size={24}
                onClick={() => {
                  // deletePermission(item);
                }}
              />
            </td> */
}
