
type DataType = {
    listing_id: number
    url?: string
    MainImage?: string
    title?: string
    currency_code?: string
    price?: string
    quantity?: number
}

const ListItems = (props: DataType) => {
    const color = props.quantity >= 20 ? "high" : props.quantity >= 10 ? "medium" : props.quantity < 10 ? "low" : "low"

    return (


        <div className="item" key={props.listing_id}>
            <div className="item-image">
                <a href={props.url}>
                    <img src={props.MainImage} />
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{props.title}</p>
                {
                    props.currency_code === 'GBP' ? <p className="item-price"> {props.currency_code} {props.price}</p> : <p className="item-price">{props.price} {props.currency_code}</p>
                }
                <p className={`item-quantity level-${color}`}>{props.quantity > 50 ? '...' : props.quantity} left</p>

            </div>
        </div>


    )
}

export default ListItems
