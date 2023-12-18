import React, { useState, useEffect } from "react";
import "./Content.css";
import axios from "axios";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { GoPlus } from "react-icons/go";
import { Pagination } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { ImFolderDownload } from "react-icons/im";
import { useNavigate } from "react-router";
function Content() {
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

  const [active, setActive] = useState("message");
  const navigate = useNavigate();
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
        <div className="bottomHeader">
          <div
            className={`toptabButton ${
              active === "reason" ? "active_link" : null
            }`}
            onClick={() => {
              setActive("reason");
              navigate("/content");
            }}
          >
            <p style={{ marginLeft: 10 }}>Contact Reason</p>
          </div>

          <div
            className={`toptabButton ${
              active === "message" ? "active_link" : null
            }`}
            onClick={() => {
              setActive("message");
              navigate("/contactmessage");
            }}
          >
            <p style={{ marginLeft: 10 }}>Contact Message</p>
          </div>
        </div>
      </div>

      <>
        <form className="form">
          <div>
            <h3 style={{ fontWeight: "500" }}>
              Contact Type Registration form
            </h3>
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
              />
              <div className="underline"></div>
              <label style={{ fontSize: 16 }}>Question</label>
            </div>
            {/* <div className="input-data">
                <input
                  className="inputContainer"
                  onChange={(e) => {
                    // setPermissionName(e.target.value);
                  }}
                  type="text"
                  placeholder=""
                  size={100}
                  required
                />
                <div className="underline"></div>
                <label>Answer</label>
              </div> */}
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

      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "space-between",
          alignSelf: "center",
          width: "90%",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
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
            <th className="th">Reason list</th>
            <th className="th">Status</th>
            <th className="th">Action</th>
          </tr>
          <tr className="row">
            <td className="td">1</td>
            <td className="td">What are examples of research questions?</td>
            <td className="td">active</td>

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
export default Content;
