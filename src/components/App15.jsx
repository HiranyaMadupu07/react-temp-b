import React from "react";
import { FaHome, FaWhatsapp,FaShoppingCart  } from "react-icons/fa";
export default function App15() {
  return (
    <div>
      <h3>This is App15</h3>
      <div>
        <p><FaHome size={15} />
        Home</p>
        <p><FaWhatsapp size={15} />
        Contact</p>
        <p><FaShoppingCart size={15}/>
        Cart</p>
      </div>
    </div>
  );
}