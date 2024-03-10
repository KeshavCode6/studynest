"use client"
import React, { useState } from 'react';
import * as Icons from '../Icons';
import '../../styles/style.css';
import SidebarItem from './SideBarItem';

function Menu(props) {

    const { page } = props;
    
    const [sideBarExpanded, setSideBarExpanded] = useState(true);

    function toggleSideBarExpanded() {
        setSideBarExpanded(!sideBarExpanded);
    }

    return (
        <div className="sideBar" style={{"animation": ((sideBarExpanded ? ("sideBarExpand") : ("sideBarCollapse")) + " 0.75s forwards")}}>

            <img src="/logo.svg" alt="Logo" className='text-25 w-[100px] mt-[10px] font-bold'/>
            <span className="text-[30px] text-primary-white mt-n5 font-bold">StudyNest</span>

            <button onClick={toggleSideBarExpanded}> {sideBarExpanded ? 'Close' : 'Open'} </button>

            <SidebarItem href="/dashboard" name="Dashboard" page={page} icon={<Icons.Dashboard />} />
            <SidebarItem href="/assignments" name="Assignments" page={page} icon={<Icons.Assignments />} />
            <SidebarItem href="/timers" name="Timers" page={page} icon={<Icons.Timers />} />
            <SidebarItem href="/forums" name="Forums" page={page} icon={<Icons.Forums />} />
            <SidebarItem href="/calculateGrade" name="CalculateGrade" page={page} icon={<Icons.CalculateGrade />} />

        </div>
    );
}

export default Menu;
