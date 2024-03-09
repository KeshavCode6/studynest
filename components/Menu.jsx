import * as Icons from "./Icons";

import '../styles/style.css';

function Menu(props) {

    const { page } = props;

    function pageNameAsTitle(string) {

        const capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
        const wordsArray = capitalizedString.split(/(?=[A-Z])/);
        const title = wordsArray.join(' ');
        
        return title;
    }
    
    return (
        <>
            <div className="topBar">

                <div className="logo">
                    <img src="/logo.svg"/>
                    <span>StudyNest</span>
                </div>

                <div className="pageTitle">
                    <span>{pageNameAsTitle(page)}</span>
                    <Icons.dashboardIcon/>
                </div>

            </div>

            <div className="sideBar">
            
                <a href="/dashboard" className={`sideBarItem ${(page == "dashboard" ? ("active") : (""))}`}>
                <Icons.dashboardIcon/>
                    <span>Dashboard</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/assignments" className={`sideBarItem ${(page == "assignments" ? ("active") : (""))}`}>
                <Icons.assignmentIcon/>
                    <span>Assignments</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/timers" className={`sideBarItem ${(page == "timers" ? ("active") : (""))}`}>
                <Icons.timerIcon/>
                    <span>Timers</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/forums" className={`sideBarItem ${(page == "forums" ? ("active") : (""))}`}>
                <Icons.forumIcon/>
                    <span>Forums</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/calculateGrade" className={`sideBarItem ${(page == "calculateGrade" ? ("active") : (""))}`}>
                <Icons.calculateGradeIcon/>
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