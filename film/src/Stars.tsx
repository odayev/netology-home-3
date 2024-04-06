interface RatingProps {
    color?: string;
    height?: number;
    width?:number;
}

const Stars = (props: RatingProps) => {

    return (
        <svg fill={props.color}
            height={props.height}
            viewBox="0 0 18 18"
            width={props.width}
            xmlns="http://www.w3.org/2000/svg">
            <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
            <path d="M0 0h18v18H0z" fill="none" />
        </svg>
    )
}

export default Stars
