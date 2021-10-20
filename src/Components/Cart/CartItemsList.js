const CartItemsList = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "item1", name: "placeholderName", amount: 2, price: 12.99 }].map(
        (item) => (
          <li key={item.id}>{item.name}</li>
        )
      )}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div>
        <span>Total: </span>
        <span></span>
      </div>
      <div>
        <button onClick={props.onClick}>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default CartItemsList;
