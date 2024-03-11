function Widget(props) {

    const {title, grow, children} = props;

    return (
        <div className="widgetTitle border border-primary-white rounded-[30px] m-5 text-primary-white select-text bg-indigo-950" style={{flexGrow: grow}}>
            <div className="widgetContent p-5 text-3xl font-bold relative text-center">
                <span>{title}</span>
            </div>
            <div className="widgetContent relative p-2 flex justify-center flex-col items-center">{children}</div>
        </div>
    )
    
}

export default Widget;