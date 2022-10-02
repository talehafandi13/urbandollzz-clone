import React from "react";
import Arrow from "../../assets/arrow.svg";
import { useRef, useState } from "react";
import './Dropdown.sass'

const Dropdown = (props) => {
  const { title, children } = props;
  const menuRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false)

  const onClickHandler = () => {
    // console.log("eeeee");
    // menuRef?.current?.classList.contains("dropdown-show")
    //   ? menuRef?.current?.classList.remove("dropdown-show")
    //   : menuRef?.current?.classList.add("dropdown-show");
    setMenuOpen(prev => !prev)
  };

  return (
    <li className="custom-dropdown">
      <p className="title" onClick={onClickHandler}>
        {title}
        <img className={menuOpen ? "open" : ""} 
            src={Arrow} alt="arrow" />
      </p>
      <ul className={`internal-menu ${menuOpen ? "dropdown-show" : ""}`}ref={menuRef}>
        {children}
      </ul>
    </li>
  );
};

export default Dropdown;
