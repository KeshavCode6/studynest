import Icons from './Icons';

import './style.css';

import logo from "../assets/logo.svg";
import placeholderAvatar from "../assets/placeholder_avatar.png";

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
                    <img src={logo}/>
                    <span>StudyNest</span>
                </div>

                <div className="pageTitle">
                    <span>{pageNameAsTitle(page)}</span>
                    <img src={Icons[page]}/>
                </div>

            </div>

            <div className="sideBar">
            
                <a href="/dashboard" className={`sideBarItem ${(page == "dashboard" ? ("active") : (""))}`}>
                    <img src={Icons.dashboard}/>
                    <span>Dashboard</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/assignments" className={`sideBarItem ${(page == "assignments" ? ("active") : (""))}`}>
                    <img src={Icons.assignments}/>
                    <span>Assignments</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/timers" className={`sideBarItem ${(page == "timers" ? ("active") : (""))}`}>
                    <img src={Icons.timers}/>
                    <span>Timers</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/forums" className={`sideBarItem ${(page == "forums" ? ("active") : (""))}`}>
                    <img src={Icons.forums}/>
                    <span>Forums</span>
                </a>

                <div className="sideBarItemDiv"></div>

                <a href="/calculateGrade" className={`sideBarItem ${(page == "calculateGrade" ? ("active") : (""))}`}>
                    <img src={Icons.calculateGrade}/>
                    <span>Calculate Grade</span>
                </a>

                <div className="sideBarAccount">

                    <img className="sideBarAccountAvatar" src={placeholderAvatar}/>

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