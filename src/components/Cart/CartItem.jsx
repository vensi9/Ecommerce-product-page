import React from 'react';

const CartCounter = ({ cartItems }) => {
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="absolute sm:relative left-2 sm:left-7 bottom-2 bg-orange text-white rounded-full w-4 h-4 flex items-center justify-center text-10 font-700">
      <span>{cartItemCount}</span>
    </div>
  );
};

export default CartCounter;
