export interface DataProps {
    id: string
    type?: ("response" | "message" | "typing");
    time: string
    text?: string
    name: string
}


const MessageHistory = (props: DataProps) => {
    return (
        <ul>
            <li className="clearfix">
                <div className="message-data align-right">
                    <span className="message-data-time">{props.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{props.name}</span>
                    <i className="fa fa-circle me"></i>
                </div>
                <div className={`${props.type} other-message float-right`}>
                    {props.text}
                </div>
            </li>
            {/* … и так далее */}
        </ul>
    )
}

export default MessageHistory
