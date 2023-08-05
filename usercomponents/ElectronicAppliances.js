// ElectronicAppliances.js
import React, { useState } from 'react';
import './ElectronicAppliances.css'; // Import the CSS file for styling

const ElectronicAppliances = () => {
  // Sample data for electronic appliances products
  const products = [
    {
      id: 1,
      name: 'Television',
      price: 499.99,
      image: 'tv.png',
    },
    {
      id: 2,
      name: 'Refrigerator',
      price: 799.99,
      image: '/fridge.png',
    },
    {
      id: 3,
      name: 'Microwave',
      price: 199.99,
      image: 'microwave.jpg',
    },
    {
        id: 4,
        name: 'Trimmers',
        price: 50.99,
        image: 'trimmer.webp',
      },
      {
        id: 5,
        name: 'Mobiles',
        price: 399.99,
        image: '/mobiles.webp',
      },
    
  ];

  // Step 2: Create state to track cart items
  const [cartItems, setCartItems] = useState([]);

  // Function to handle adding an item to the cart
  const addToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <div>
      <h2>Electronic Appliances</h2>
      <div className="products">
        {products.map((product) => (
          <div key={product.id} className="product">
            <img  src={product.image} alt={product.name} style={{width:'auto'}} />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ElectronicAppliances;

// Appliances.js
// import React, { useState } from 'react';
// import './ElectronicAppliances.css'; // Import the CSS file for styling

// const ElectronicAppliances = () => {
//   // Sample array of electronic appliances products
//   const products = [
//     {
//       id: 1,
//       name: 'Product 1',
//       image: 'https://example.com/product1.jpg',
//       price: 100,
//     },
//     {
//       id: 2,
//       name: 'Product 2',
//       image: 'https://example.com/product2.jpg',
//       price: 150,
//     },
//     {
//       id: 3,
//       name: 'Product 3',
//       image: 'https://example.com/product3.jpg',
//       price: 200,
//     },
//     // Add more product options here...
//   ];

//   // Step 3: Handle the "Add to Cart" functionality
//   const [cart, setCart] = useState([]);

//   const handleAddToCart = (product) => {
//     setCart((prevCart) => [...prevCart, product]);
//   };

//   return (
//     <div className="appliances">
//       <h2>Electronic Appliances</h2>
//       <div className="products-container">
//         {products.map((product) => (
//           <div key={product.id} className="product-card">
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>Price: ${product.price}</p>
//             <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
//           </div>
//         ))}
//       </div>
//       <div className="cart">
//         <h3>Cart</h3>
//         <ul>
//           {cart.map((item) => (
//             <li key={item.id}>{item.name} - ${item.price}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default ElectronicAppliances;

