const CartItemsList = (props) => {
  const cartItems = (
    <ul>
      {[{ id: "item1", name: "placeholderName", amount: 2, price: 12.99 }].map(
        (item) => (
          <li>{item.name}</li>
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
        <button onClick={props.onClose}>Close</button>
        <button>Order</button>
      </div>
    </div>
  );
};

export default CartItemsList;
