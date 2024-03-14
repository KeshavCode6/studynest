function AssignmentDisplay(props) {

    const {name, subject, dueDay} = props;

    var dueDayColor = "#D0CB4E";

    if (dueDay == "Tomorrow") {
        dueDayColor = "#E25757";
    }

    return (
        <>
            <div>
                <input type="checkbox" className="w-[25px] h-[25px] accent-purple-900 rounded-[300px] break-all"></input>
                <span className="text-[30px] font-bold">{name}</span>
                <span className="text-[25px]" style={{color: subject.color}}>({subject.name})</span>
                <span className="text-[30px] font-bold">•</span>
                <span className="text-[30px] font-bold" style={{color: dueDayColor}}>{dueDay}</span>
            </div>
        </>
    )

}

export default AssignmentDisplay;