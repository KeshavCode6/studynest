function AssignmentDisplay(props) {

    const {name, subject, dueDay} = props;

    var dueDayColor = "#D0CB4E";

    if (dueDay == "Tomorrow") {
        dueDayColor = "#E25757";
    }

    return (
        <>
            <div>
                <span className="text-[30px] font-bold">{name}</span>
                <span className="text-[25px]" style={{color: subject.color}}>({subject.name})</span>
                <span className="text-[30px]">•</span>
                <span className="text-[30px]" style={{color: dueDayColor}}>{dueDay}</span>
            </div>
        </>
    )

}

export default AssignmentDisplay;