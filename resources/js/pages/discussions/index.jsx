import MainLayout from "@/layouts/main-layout"
import DiscussionCard from "@/components/discussions/discussion-card"

const discussions = [
    {
        id: '1',
        title: "My fedora broke while downloading games",
        date: 'Oct 4, 2025',
        solutions: 4,
        tags: ["#linux", "#fedora", "#gnome"]
    },
    {
        id: '2',
        title: "I can't open my dock to dash in fedora with gnome. please help asap",
        date: 'Oct 30, 2025',
        solutions: 1,
        tags: ["#linux"]
    }
]

const DiscussionPage = () => {
    return (
        <MainLayout>
            <div className="grid grid-cols-2">
                <div className="">
                    {discussions.map(({ id, title, date, solutions, tags }) => (
                        <DiscussionCard
                            key={id}
                            title={title}
                            date={date}
                            solutions={solutions}
                            tags={tags}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default DiscussionPage