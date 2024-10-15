import React, { useState } from 'react';
import DisplayIcon from '../../utils/icons/Display.svg';
import Down from '../../utils/icons/down.svg';

import '../../utils/css/Navbar.css';

export default function Navbar(props) {
    const [toggleFilter, setToggleFilter] = useState(false);

    function handleDisplayToggle(e) {
        setToggleFilter(!toggleFilter);
        if (e.target.value !== undefined) {
            props.handleGroup(e.target.value);
        }
    }

    function handleOrderingValue(e) {
        setToggleFilter(!toggleFilter);
        if (e.target.value !== undefined) {
            props.handleOrder(e.target.value);
        }
    }

    return (
        <section className="nav">
            <div className="navContainer">
                <div>
                    <div className="navDisplayButton" onClick={handleDisplayToggle}>
                        <div className="navDisplayIcon navDisplayFilter">
                            <img src={DisplayIcon} alt="icon" />
                        </div>
                        <div className="navDisplayHeading">
                            Display
                        </div>
                        <div className="navDisplayIcon navDisplayDrop">
                            <img src={Down} alt="icon" />
                        </div>
                    </div>
                    <div className={toggleFilter ? "navDisplayDropdown navDisplayDropdownShow" : "navDisplayDropdown"}>
                        <div className="navDisplayFilters">
                            <div className="navDropdownCategory">
                                Grouping
                            </div>
                            <div className="navDropdownSelector">
                                <select value={props.groupValue} onChange={handleDisplayToggle} className='navSelector' name="grouping">
                                    <option value="status">Status</option>
                                    <option value="user">User</option>
                                    <option value="priority">Priority</option>
                                </select>
                            </div>
                        </div>
                        <div className="navDisplayFilters">
                            <div className="navDropdownCategory">
                                Ordering
                            </div>
                            <div className="navDropdownSelector">
                                <select value={props.orderValue} onChange={handleOrderingValue} className='navSelector' name="ordering">
                                    <option value="priority">Priority</option>
                                    <option value="title">Title</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
