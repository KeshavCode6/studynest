function DashboardForumPost(props) {

    const {title, author, children} = props;

    return (
        <>
            <div className="flex flex-col border rounded-[10px] w-[90%] p-[5px] min-w-[400px] h-[250px] overflow-hidden">
                <span className="font-bold text-[20px]">{title}</span>
                <span>{author.displayName}</span>
                <span>{children}</span>
            </div>
        </>
    )

}

export default DashboardForumPost;