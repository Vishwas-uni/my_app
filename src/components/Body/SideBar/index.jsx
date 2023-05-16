import React from "react";
import "./style.css";

const menuItems = [
  { menuName: "Home", uniqId: "home-tab", user: "Admin" },
  { menuName: "My Wishlist", uniqId: "wishlist-tab", user: "User" },
  { menuName: "Account", uniqId: "account-tab", user: "User" },
  { menuName: "Notification", uniqId: "notification-tab", user: "User" },
  { menuName: "Help?", uniqId: "home-tab", user: "User" },
];


function SideBar() {
  const userIs = "User";
  return (
    <div className="body__side-bar">
      <ul className="side-bar__list">
        {menuItems.map((item, index) =>
          item.user === userIs ? (
            <li key={index} className="side-bar__list-item">
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
