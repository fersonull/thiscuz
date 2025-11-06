import Tag from "./tag"

export default function Tags({ tags }) {

    return (
        <div className="flex gap-2">
            {tags?.map((tag, idx) => (
                <Tag key={idx} tag={tag} />
            ))}
        </div>
    )
}
