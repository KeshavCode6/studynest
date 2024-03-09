function Widget(props) {

    const {title, grow, children} = props;

    return (
        <div className="widget" style={{flexGrow: grow}}>
            <div className="widgetTitle">
                <span>{title}</span>
            </div>
            <div className="widgetContent">{children}</div>
        </div>
    )
    
}

export default Widget;