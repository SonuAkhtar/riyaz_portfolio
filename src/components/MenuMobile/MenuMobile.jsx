import React, { useState } from "react";

// imported Data
import { menuMobileData } from "../../../appData";

// imported CSS
import "./menuMobile.css";

const MenuMobile = ({ expand, setExpand }) => {
  const [menuItem, setMenuItem] = useState("one");

  const handleMenuClick = (val) => {
    setMenuItem(val);
    setExpand(false);
  };

  return (
    <div className={`menuMobile_container ${expand ? "expand" : ""}`}>
      <ul>
        {menuMobileData.map((item, i) => (
          <li key={i} onClick={() => handleMenuClick(item.class)}>
            <a
              href={item.href}
              className={`${menuItem == item.class && "active"}`}
            >
              <i className={`${item.icon} ${item.class}`} />
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuMobile;
