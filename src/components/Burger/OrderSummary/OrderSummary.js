import React from "react";

import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igkey) => {
    return (
      <li key={igkey}>
        <span style={{ textTransform: "capitalize" }}>
          {igkey}:{props.ingredients[igkey]}
        </span>
      </li>
    );
  });
  return (
    <div>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <p>
        <strong>Total Price:{props.price.toFixed(2)}</strong>
      </p>
      <Button btnType="Danger" clicked={props.purchaseCanceld}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Continue
      </Button>
    </div>
  );
};

export default orderSummary;
