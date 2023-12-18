// // import React from "react";

// // function Contactmessage() {
// //   return (
// //     <div>
// //       <form className="form_box">
// //         <div>
// //           <h3 style={{ fontWeight: "500" }}>Business Registration form</h3>
// //         </div>
// //         <div className="form-row">
// //           <div className=" input-data">
// //             <input
// //               className="inputContainer"
// //               required
// //               onChange={(e) => {
// //                 // setPermissionName(e.target.value);
// //               }}
// //               type="text"
// //               placeholder=""
// //             />
// //             <div className="underline"></div>
// //             <label style={{ fontSize: 16 }}>Organization Name</label>
// //           </div>
// //           <div className="input-data">
// //             <input
// //               className="inputContainer"
// //               onChange={(e) => {
// //                 // setPermissionName(e.target.value);
// //               }}
// //               type="text"
// //               placeholder=" "
// //               required
// //             />
// //             <div className="underline"></div>
// //             <label>Organization Address</label>
// //           </div>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Contactmessage;
// import React, { useState, useEffect } from "react";

// import axios from "axios";
// import { AiFillDelete, AiFillEdit } from "react-icons/ai";
// import { GoPlus } from "react-icons/go";
// import { Pagination } from "@mui/material";
// import { IoIosClose } from "react-icons/io";
// import { CgProfile } from "react-icons/cg";
// import { ImFolderDownload } from "react-icons/im";
// import { useNavigate } from "react-router";
// function Contactmessage() {
//   const [isFormVisible, setIsFormVisible] = useState(false);
//   const [permissionToEdit, setPermissionToEdit] = useState({});
//   const [permissionName, setPermissionName] = useState("");
//   const [data, setData] = useState([]);
//   const [userId, setUserId] = useState("15");
//   const [isEdit, setIsEdit] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [dataLength, setDataLength] = useState(0);
//   const [totalPages, setTotalPages] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [paginatorArray, setPaginatorArray] = useState([]);
//   const pageSize = 6;
//   const [open, setOpen] = React.useState(false);
//   const [counter, setCounter] = useState(0);

//   const [active, setActive] = useState("message");
//   const navigate = useNavigate();
//   const [selectedOption, setSelectedOption] = useState("");

//   const handleSelectChange = (e) => {
//     setSelectedOption(e.target.value);
//   };
//   return (
//     <div className="permissioncontainer">
//       <div>
//         <div className="header">
//           <div
//             style={{
//               paddingRight: 10,
//               display: "flex",
//               flexDirection: "column",
//             }}
//           >
//             <CgProfile size={30} />
//           </div>
//         </div>
//         <div className="bottomHeader">
//           <div
//             className={`toptabButton ${
//               active === "reason" ? "active_link" : null
//             }`}
//             onClick={() => {
//               setActive("reason");
//               navigate("/content");
//             }}
//           >
//             <p style={{ marginLeft: 10 }}>Contact Reason</p>
//           </div>

//           <div
//             className={`toptabButton ${
//               active === "message" ? "active_link" : null
//             }`}
//             onClick={() => {
//               setActive("message");
//               navigate("/contactmessage");
//             }}
//           >
//             <p style={{ marginLeft: 10 }}>Contact Message</p>
//           </div>
//         </div>
//       </div>

//       <div>
//         <form className="form_box">
//           {" "}
//           <div>
//             <h3 style={{ fontWeight: "500" }}>
//               Contact Type Registration Form
//             </h3>
//           </div>
//           <div className="form-row">
//             <div className="underline">
//               <div>
//                 <label>Feedback</label>
//               </div>

//               <div className="dropDownContainer">
//                 <select
//                   id="dropdown"
//                   value={selectedOption}
//                   onChange={handleSelectChange}
//                   className="dropDown"
//                 >
//                   <option value="">Select Feedback</option>
//                   <option value="option1">Option 1</option>
//                   <option value="option2">Option 2</option>
//                   <option value="option3">Option 3</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Contactmessage;

