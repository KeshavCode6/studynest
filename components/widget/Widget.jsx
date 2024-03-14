function Widget(props) {

    const {title, grow, children} = props;

    return (
        <div className="widgetTitle border border-primary-white rounded-[10px] m-3 text-primary-white bg-widget-purple max-w-[2000px]" style={{flexGrow: grow}}>
            <div className="widgetContent p-2 text-3xl font-bold relative text-center pt-[30px]">
                <span>{title}</span>
            </div>
            <div className="widgetContent relative p-2 flex justify-center flex-col items-center">{children}</div>
        </div>
    )
    
}

export default Widget;