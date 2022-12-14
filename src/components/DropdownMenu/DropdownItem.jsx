import React from "react";

const DropdownItem = (props) => {
  return (
    <>
      <a
        className="menu-item"
        onClick={() => props.goToMenu && props.setActive(props.goToMenu)}
      >
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
      </a>
    </>
  );
};

export default DropdownItem;