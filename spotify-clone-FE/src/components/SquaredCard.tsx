type Props = {
    image: string;
    title: string;
    artistName: string;
    onClick?: () => void;
};


export default function SquaredCard({
    image,
    title,
    artistName,
    onClick
}: Props) {

    return (
        <div className="squared-card" onClick={onClick}>
            <img
                src={image.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}${image}`}
                alt={title}
            />
            <h3>{title}</h3>
            <span>{artistName}</span>
            <div className="play-hover-big">
                <img src="../play-solid-full.svg" alt="" />
            </div>
        </div>
    )
}