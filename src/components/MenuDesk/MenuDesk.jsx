import React, { useState } from "react";
import { menuDeskData } from "../../../appData";
import "./menuDesk.css";

const MenuDesk = ({ show, setShow }) => {
  const [activeItem, setActiveItem] = useState("four");

  const handleClick = (itemClass) => {
    setActiveItem(itemClass);
    setTimeout(() => setShow(false), 600);
  };

  return (
    <>
      <div
        className={`menuDesk_overlay ${show ? "show" : ""}`}
        onClick={() => setShow(false)}
      />
      <div className={`menuDesk_container ${show ? "show" : ""}`}>
        <div className="menuDesk_header">
          <span className="menuDesk_logo">Riyaz.</span>
          <button
            className="menuDesk_close"
            onClick={() => setShow(false)}
            aria-label="Close menu"
          >
            <i className="fas fa-times" />
          </button>
        </div>

        <nav className="menuDesk_nav">
          {menuDeskData.map((item, i) => (
            <a
              key={i}
              href={item.href}
              className={`menuDesk_item ${activeItem === item.class ? "active" : ""}`}
              onClick={() => handleClick(item.class)}
            >
              <span className="menuDesk_num">{item.number}</span>
              <span className="menuDesk_name">{item.name}</span>
            </a>
          ))}
        </nav>

        <div className="menuDesk_footer">Navigation</div>
      </div>
    </>
  );
};

export default MenuDesk;
