import MainLayout from "@/layouts/main-layout"
import DiscussionCard from "@/components/discussions/discussion-card"

const DiscussionPage = ({ discussions }) => {
    console.log(discussions)

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