import React, { useState } from 'react';
import DisplayIcon from '../../utils/icons/Display.svg';
import Down from '../../utils/icons/down.svg';
import '../../utils/css/Navbar.css';

export default function Navbar(props) {
    const [active, setActive] = useState(false);

    const handleActiveState = (e) => {
        setActive(!active);
        if (e.target.value !== undefined) {
            props.handleGroup(e.target.value);
        }
    }

    function handleOrder(e) {
        setActive(!active);
        if (e.target.value !== undefined) {
            props.handleOrder(e.target.value);
        }
    }

    return (
        <section className="nav">
            <div className="navContainer">
                <div>
                    <div className="navDisplayButton" onClick={handleActiveState}>
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
                    <div className={active ? "navDisplayDropdown navDisplayDropdownShow" : "navDisplayDropdown"}>
                        <div className="navDisplayFilters">
                            <div className="navDropdownCategory">
                                Grouping
                            </div>
                            <div className="navDropdownSelector">
                                <select value={props.groupValue} onChange={handleActiveState} className='navSelector' name="grouping">
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
                                <select value={props.orderValue} onChange={handleOrder} className='navSelector' name="ordering">
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
