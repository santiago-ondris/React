import React from 'react';

const CartWidget = () => {
  const itemsInCart = 5; 

  return (
    <div className="d-flex align-items-center">
      <img src="../../public/cart-fill.svg" alt="carrito" width="24" height="24" />
      <div className="bg-danger text-white rounded-circle d-flex justify-content-center align-items-center" style={{ width: '24px', height: '24px' }}>
        {itemsInCart}
      </div>
    </div>
  );
};

export default CartWidget;








