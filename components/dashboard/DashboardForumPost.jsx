function DashboardForumPost(props) {

    const {title, author, children} = props;

    return (
        <>
            <a className="flex flex-col border rounded-[10px] w-[90%] p-[5px] h-[250px] overflow-hidden hover:border-[2px]" href="/forums/post?id=0">

                <span className="font-bold text-[1.2rem]">{title}</span>

                <div className="flex flex-row relative bottom-[20px] right-[10px]">
                    <img className="rounded-[1000px] w-[32px]" src="https://cdn.discordapp.com/avatars/768181277814685706/54be8bca571ece91cd47cd1e7e1d8aa1.webp?size=100"/>
                    <span className="relative right-[10px] top-[3px] text-[1rem] text-gray-400">{author.displayName}</span>
                </div>

                <span className="relative bottom-[30px]">{children}</span>
            </a>
        </>
    )

}

export default DashboardForumPost;