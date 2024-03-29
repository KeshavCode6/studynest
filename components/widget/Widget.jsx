function Widget(props) {

    const {title, grow, children} = props;

    return (
        <div className="widgetTitle rounded-[10px] m-3 text-primary-white bg-widget-purple" style={{flexGrow: grow}}>
            <div className="widgetContent p-2 text-3xl font-bold relative text-center pt-[30px]">
                <span>{title}</span>
            </div>
            <div className="widgetContent relative p-2 flex justify-center flex-col items-center">{children}</div>
        </div>
    )
    
}

export default Widget;