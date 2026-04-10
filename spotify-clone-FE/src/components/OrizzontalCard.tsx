type Props = {
    image: string;
    title: string;
    onClick: () => void;
};


export default function OrizzontalCard({
    image,
    title,
    onClick
}: Props) {
    return (
        <div className='orizzontal-card' onClick={onClick}>
            <img
                src={image.startsWith('http') ? image : `${import.meta.env.VITE_API_URL}${image}`}
                alt={title}
            />
            <span>{title}</span>
            <div className="play-hover-small">
                <img src="../play-solid-full.svg" alt="" />
            </div>
        </div>
    )
}