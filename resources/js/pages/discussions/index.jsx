import MainLayout from "@/layouts/main-layout"
import DiscussionCard from "@/components/discussions/discussion-card"

const DiscussionPage = () => {
    return (
        <MainLayout>
            <div className="grid grid-cols-2">
                <div className="">
                    <DiscussionCard title={'My fedora broke while downloading games'} date={'Oct 3, 2025'} solutions={2} />
                    <DiscussionCard title="I can't open my dock to dash in fedora with gnome. please help asap" date={'Oct 3, 2025'} solutions={1} />
                </div>
            </div>
        </MainLayout>
    )
}

export default DiscussionPage