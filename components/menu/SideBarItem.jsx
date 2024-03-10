function SidebarItem(props) {

    const {page, icon, name, href} = props;

    var active = "";

    if (page == props.href.split("/")[1]) {
        active = "selected"
    }

    function collapseSideBar() {
        this.setState({
            sideBarExpanded: false
        })
    }

    return (
        <a href={href} className={`sideBarItem ${active}`} onClick={collapseSideBar}>
            {icon}
            <span>{name}</span>
        </a>
    );
}

export default SidebarItem;