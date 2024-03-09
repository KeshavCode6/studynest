import React from 'react';

import * as Icons from './Icons';

import '../styles/style.css';

function Menu(props) {

    const { page } = props;

    function pageNameAsTitle(string) {

        const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        const wordsArray = capitalizedString.split(/(?=[A-Z])/);
        const title = wordsArray.join(" ");
        
        return title;
    }

    const pageTitle = pageNameAsTitle(page);
    const pageIcon = React.createElement(Icons[pageTitle.replace(" ", "")]);
    
    return (
        <>

            <div className="sideBar">

                <div className="logo">
                    <img src="/logo.svg"/>
                    <span>StudyNest</span>
                </div>
            
                <a href="/dashboard" className={`sideBarItem ${(page == "dashboard" ? ("active") : (""))}`}>
                <Icons.Dashboard/>
                    <span>Dashboard</span>
                </a>


                <a href="/assignments" className={`sideBarItem ${(page == "assignments" ? ("active") : (""))}`}>
                <Icons.Assignments/>
                    <span>Assignments</span>
                </a>


                <a href="/timers" className={`sideBarItem ${(page == "timers" ? ("active") : (""))}`}>
                <Icons.Timers/>
                    <span>Timers</span>
                </a>


                <a href="/forums" className={`sideBarItem ${(page == "forums" ? ("active") : (""))}`}>
                <Icons.Forums/>
                    <span>Forums</span>
                </a>


                <a href="/calculateGrade" className={`sideBarItem ${(page == "calculateGrade" ? ("active") : (""))}`}>
                <Icons.CalculateGrade/>
                    <span>Calculate Grade</span>
                </a>

                <div className="sideBarAccount">

                    <img className="sideBarAccountAvatar" src="/placeholder_avatar.png"/>

                    <div className="sideBarAccountInfo">
                        <span className="sideBarAccountName">John D</span>
                        <a className="sideBarAccountLink" href="/account">My Account</a>
                    </div>

                </div>

            </div>
        </>
    )

}

export default Menu;