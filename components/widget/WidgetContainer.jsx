function WidgetContainer(props) {

    const {children} = props;

    return (
        <div className="widgetContainer absolute top-0 left-[100px] flex flex-col">
            {children}
        </div>
    )
    
}

export default WidgetContainer;