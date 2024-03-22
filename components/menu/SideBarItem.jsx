function SidebarItem(props) {

    const {page, icon, name, href} = props;

    var active = "";

    if (page == props.href.split("/")[1]) {
        active = "selected"
    }

    return (
        <a href={href} className={`sideBarItem ${active}`}>
            {icon}
            <span>{name}</span>
        </a>
    );
}

export default SidebarItem;