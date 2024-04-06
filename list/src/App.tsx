import './App.css'
import ListItems from './ListItems'
import items from "./data/etsy.json";

function App() {


  return (
    <>
      <div className="wrapper">
        <div className="item-list">
          {
            items.map((item, i) => (
              <ListItems
                key={i}
                listing_id={item.listing_id}
                url={item.url}
                MainImage={item.MainImage?.url_170x135}
                title={item.title}
                currency_code={item.currency_code}
                price={item.price}
                quantity={item.quantity} />
            ))
          }
        </div >
      </div>
    </>
  )
}

export default App
