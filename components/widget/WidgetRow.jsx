function WidgetRow(props) {

    const {children} = props;

    return (
        <div className="flex flex-row">
            {children}
        </div>
    )
    
}

export default WidgetRow;