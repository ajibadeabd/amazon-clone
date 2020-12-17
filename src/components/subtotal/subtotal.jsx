import React from "react";
import "./subtotal.css";
import { useStateValue } from "../store/stateProvider";
import { getBasketTotal } from "../store/reducer";
import CurrencyFormat from "react-currency-format";
export default function Subtotal() {
  const [state, dispatch] = useStateValue();
  
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({state.basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(state.basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>proceed to check out</button>

    </div>
  );
}
