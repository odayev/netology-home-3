import "./App.css"
import { useState } from "react";
import Stars from "./Stars";

const count = 5;
const App = () => {
  const [rating, setRating] = useState(0);
  const [rateColor, setColor] = useState(null)
  return (<>

    <ul>
      <li>
        {[...Array(count)].map((star, index) => {
          const currentRate = index + 1
          return (
            <label>
              <input type="radio" name="rate"
                value={currentRate}
                onClick={() => setRating(currentRate)}
              />
              <Stars width={50} height={50}
                color={currentRate <= (rateColor || rating) ? "yellow" : "grey"}
              />
            </label>
          )
        })}
      </li>

    </ul>
  </>
  )
}

export default App