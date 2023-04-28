import React from "react";
import "./style.css";

const menuItems = [
  { menuName: "Home", uniqId: "home-tab", user: "Admin" },
  { menuName: "My Attendance", uniqId: "home-tab", user: "User" },
  { menuName: "Personal Details", uniqId: "home-tab", user: "User" },
  { menuName: "Settings", uniqId: "home-tab", user: "User" },
  { menuName: "Help?", uniqId: "home-tab", user: "User" },
];

function SideBar() {
  const userIs = "User";
  return (
    <div className="body__side-bar">
      <ul className="side-bar__list">
        {menuItems.map((item, index) =>
          item.user === userIs ? (
            <li key={index} className="side-bar__list-i tem">
              {" "}
              {item.menuName}{" "}
            </li>
          ) : (
            <></>
          )
        )}
      </ul>
    </div>
  );
}

export default SideBar;
