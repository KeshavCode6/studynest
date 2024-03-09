import './style.css';

import dashboardIcon from '../assets/icon/dashboard.svg';
import assignmentsIcon from '../assets/icon/assignments.svg';
import timersIcon from '../assets/icon/timers.svg';
import forumsIcon from '../assets/icon/forums.svg';
import calculateGradeIcon from '../assets/icon/calculate-grade.svg';

import logo from "../assets/logo.svg"

function Menu() {

    return (
        <>
            <div className="topBar">

                <div className="logo">
                    <img src={logo}/>
                    <span>StudyNest</span>
                </div>

                <div className="pageTitle">
                    <span>Dashboard</span>
                    <img src={dashboardIcon}/>
                </div>

            </div>

            <div className="sideBar">
            
                <a href="/dashboard" className="sideBarActive">
                    <img src={dashboardIcon}/>
                    <span>Dashboard</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/assignments">
                    <img src={assignmentsIcon}/>
                    <span>Assignments</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/timers">
                    <img src={timersIcon}/>
                    <span>Timers</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/forums">
                    <img src={forumsIcon}/>
                    <span>Forums</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/calculate-grade">
                    <img src={calculateGradeIcon}/>
                    <span>Calculate Grade</span>
                </a>

            </div>
        </>
    )

}

export default Menu;