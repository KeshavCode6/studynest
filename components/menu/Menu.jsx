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

            <div className='w-[100%] h-[60px] bg-topbar-purple fixed'>
                <a className="absolute w-[300px] top-[10px] left-[17px]" href='#' onClick={toggleSideBarExpanded}>
                    <Icons.Menu width="13%"/>
                </a>
            </div>

            <div className="sideBar absolute top-[60px]" style={{"animation": ((sideBarExpanded ? ("sideBarExpand") : ("sideBarCollapse")) + " 0.5s forwards")}}>

                <img src="/logo.svg" alt="Logo" className='text-25 w-[100px] mt-[10px] font-bold'/>
                <span className="text-[30px] text-primary-white mt-n5 mb-[20px] font-bold">StudyNest</span>

                <a href='#' onClick={toggleSideBarExpanded} className="absolute left-[230px] top-[10px] w-[300px]">
                    <Icons.X width="13%"/>
                </a>

                <SidebarItem href="/dashboard" name="Dashboard" page={page} icon={<Icons.Dashboard />}  width="13%"/>
                <SidebarItem href="/assignments" name="Assignments" page={page} icon={<Icons.Assignments />}  width="13%"/>
                <SidebarItem href="/timers" name="Timers" page={page} icon={<Icons.Timers />}  width="13%"/>
                <SidebarItem href="/forums" name="Forums" page={page} icon={<Icons.Forums />}  width="13%"/>
                <SidebarItem href="/calculateGrade" name="CalculateGrade" page={page} icon={<Icons.CalculateGrade />} width="13%" />

            </div>
        </>

    );
}

export default Menu;
