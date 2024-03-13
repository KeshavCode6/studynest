function WidgetContainer(props) {

    const {children} = props;

    return (
        <div className="widgetContainer absolute top-[90px] left-[50px] flex flex-col" style={{"animation": ((this.state.sideBarExpanded ? ("sideBarExpand") : ("sideBarCollapse")) + " 0.5s forwards")}}>
            {children}
        </div>
    )
    
}

export default WidgetContainer;