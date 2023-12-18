import React, { useState, useEffect } from "react";
import "./Permission.css";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { Pagination } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImFolderDownload } from "react-icons/im";
function Permissions() {
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
  const [counter, setCounter] = useState(0);

  // const handleIncrement = () => {
  //   setCounter(counter + 1);
  // };

  // const handleDecrement = () => {
  //   if (counter > 0) {
  //     setCounter(counter - 1);
  //   }
  // };
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
          <p style={{ marginLeft: 10 }}>Business Registration</p>
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
                <label style={{ fontSize: 16 }}>Organization Name</label>
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
                <label>Organization Address</label>
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
                <label style={{ fontSize: 16 }}>Pan Card Number</label>
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
                <label>GST Number</label>
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
                <label style={{ fontSize: 16 }}>Server URL</label>
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
                <label>User ID Prefix</label>
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
                <label style={{ fontSize: 16 }}>User License Count</label>
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
                <label>Activation Date</label>
              </div>
            </div>
            <div className="form-row w-100">
              <div className=" input-data">
                <input
                  className="inputContainer"
                  required
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="date"
                  placeholder=""
                  size={100}
                />
                <div className="underline"></div>
                <label style={{ fontSize: 16 }}>Deactivation Date</label>
              </div>
              <div className="input-data">
                <input
                  className="inputContainer"
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="date"
                  placeholder=" "
                  required
                />
                <div className="underline"></div>
                <label>Activation Duration in Month</label>
              </div>
            </div>
            <div style={{ flexDirection: "row" }}>
              <button
                className="button"
                type="submit"
                style={{ fontSize: 12, fontWeight: "500" }}
              >
                Submit
              </button>
              <button
                className="button"
                onClick={() => {
                  setIsFormVisible(false);
                }}
                style={{ fontSize: 12, fontWeight: "500" }}
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
        <table style={{ marginTop: 20 }}>
          <tr className="row">
            <th className="th">Sr.No</th>
            <th className="th">Organization Name</th>
            <th className="th">Organization Address</th>
            <th className="th">Organization Address</th>
            <th className="th">Pan Number</th>
            <th className="th">Gst Number</th>
            <th className="th">Server URL</th>
            <th className="th">User ID Prefix</th>
            <th className="th">User License Count</th>
            <th className="th">Activation Date</th>
            <th className="th">deactivation Date</th>
            <th className="th">Activation Duration in Month</th>
            <th className="th">Action</th>
          </tr>
          <tr className="row">
            <td className="td">1</td>
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
            <td className="td">2024-11-04</td>

            <td className="td">
              <AiFillEdit
                size={24}
                onClick={(e) => {
                  // editPermission(item);
                }}
                // style={{ paddingRight: 15 }}
              />
              <AiFillDelete
                size={24}
                onClick={() => {
                  // deletePermission(item);
                }}
              />
            </td>
          </tr>
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
export default Permissions;
