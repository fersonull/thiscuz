import MainLayout from "@/layouts/main-layout";
import DiscussionBody from "@/components/show-discussion/discussion-body";
import Comments from "@/components/show-discussion/comments";

const discussion = {
    id: 1,
    title: "My fedora broke while downloading games",
    content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia corrupti voluptate labore dolorem totam delectus dolore? Eum asperiores fugit magni quis rem commodi facere, neque, voluptatem placeat nam delectus.',
    date: 'Oct 4, 2025',
    solutions: 4,
    tags: ["#linux", "#fedora", "#gnome"]
}

const Discussion = () => {
    return (
        <MainLayout>
            <DiscussionBody
                id={discussion.id}
                title={discussion.title}
                content={discussion.content}
                date={discussion.date}
                tags={discussion.tags}
                solutions={discussion.solutions}
            />

            <Comments />
        </MainLayout>
    )
}

export default Discussion;
