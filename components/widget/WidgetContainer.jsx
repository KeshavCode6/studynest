function WidgetContainer(props) {

    const {children} = props;

    return (
        <div className="widgetContainer absolute top-[70px] left-[50px] flex flex-col">
            {children}
        </div>
    )
    
}

export default WidgetContainer;