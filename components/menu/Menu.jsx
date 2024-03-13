"use client"
import React, { useState } from 'react';
import * as Icons from '../Icons';
import '../../styles/style.css';
import SidebarItem from './SideBarItem';

function Menu(props) {

    const { page } = props;
    
    const [sideBarExpanded, setSideBarExpanded] = useState(false);

    function toggleSideBarExpanded() {
        setSideBarExpanded(!sideBarExpanded);
    }

    return (

        <>

            <div className='w-[100%] h-[80px] bg-violet-900'>
                <a className="absolute w-[300px] top-[17px] left-[17px]" href='#' onClick={toggleSideBarExpanded}>
                    <Icons.Menu/>
                </a>
            </div>

            <div className="sideBar absolute" style={{"animation": ((sideBarExpanded ? ("sideBarExpand") : ("sideBarCollapse")) + " 0.5s forwards")}}>

                <img src="/logo.svg" alt="Logo" className='text-25 w-[100px] mt-[10px] font-bold'/>
                <span className="text-[30px] text-primary-white mt-n5 font-bold">StudyNest</span>

                <a href='#' onClick={toggleSideBarExpanded} className="absolute left-[230px] top-[10px] w-[300px]">
                    <Icons.X/>
                </a>

                <SidebarItem href="/dashboard" name="Dashboard" page={page} icon={<Icons.Dashboard />} />
                    <SidebarItem href="/assignments" name="Assignments" page={page} icon={<Icons.Assignments />} />
                    <SidebarItem href="/timers" name="Timers" page={page} icon={<Icons.Timers />} />
                    <SidebarItem href="/forums" name="Forums" page={page} icon={<Icons.Forums />} />
                <SidebarItem href="/calculateGrade" name="CalculateGrade" page={page} icon={<Icons.CalculateGrade />} />

            </div>
        </>

    );
}

export default Menu;
