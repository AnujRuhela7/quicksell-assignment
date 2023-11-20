import { useState } from "react";
// import { Link } from "react-router-dom";
import { groups, ordering } from "../utils/constantData";
// import slider from "../assets/icons/slider.png";
// import downArrow from "../assets/icons/downArrow.png";
import "../css/navbar.css";
const Navbar = ({ curGroup, curOrder, setCurGroup, setCurOrder }) => {

  const [ modal, setModal ] = useState(false);

  function toggleModal(e) {
    setModal(!modal);
  }

  function changeGrouping(e) {
    localStorage.setItem("grouping-submenu", e.target.value);
    setCurGroup(e.target.value);
  }

  function changeOrdering(e) {
    localStorage.setItem("ordering-submenu", e.target.value);
    setCurOrder(e.target.value);
  }

  return (
    <>
      <div className="navbar">
        <div className="selection-menu" onClick={ toggleModal }>
          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/24/1A1A1A/sorting-options--v1.png"
            alt="sorting-options--v1"
            className="settings-icon"
          />

          <span className="display">Display</span>

          <img
            width="24"
            height="24"
            src="https://img.icons8.com/material/24/1A1A1A/chevron-down--v1.png"
            alt="chevron-down--v1"
            className="down-arrow-icon"
          />
        </div>

        { modal && curGroup && curOrder && (
          <div className="modal-toggle">
            <div className="grouping-submenu">
              <span className="grouping-submenu-span">Grouping</span>
              <select name="grouping-submenu" id="grouping-submenu" onChange={ changeGrouping }>
                { groups.map((obj) => {
                  return obj.value === curGroup ? (
                    <option selected value={ obj.value } key={ obj.key }>
                      { obj.key }
                    </option>
                  ) : (
                    <option value={ obj.value } key={ obj.key }>
                      { obj.key }
                    </option>
                  );
                }) }
              </select>
            </div>
            <div className="ordering-submenu">
              <span className="ordering-submenu-span">Ordering</span>
              <select name="ordering-submenu" id="ordering-submenu" onChange={ changeOrdering }>
                { ordering.map((obj) => {
                  return obj.value === curOrder ? (
                    <option value={ obj.value } key={ obj.key } selected>
                      { obj.key }
                    </option>
                  ) : (
                    <option value={ obj.value } key={ obj.key }>
                      { obj.key }
                    </option>
                  );
                }) }
              </select>
            </div>
          </div>
        ) }
      </div>
    </>
  );
};

export default Navbar;