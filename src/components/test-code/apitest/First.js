import React, { useEffect, useState } from "react";

const First = () => {
  const [cartData, setCartData] = useState();
  const bribooks = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data.products);
    setCartData(data.products);
  };

  useEffect(() => {
    bribooks();
  }, []);

  fetch('https://dummyjson.com/products')
  .then(res => res.json())
  .then(console.log);
            
  return (
    <div>
      {cartData?.map((item) => (
        <div className="border px-2 py-3" key={item.id}>
          <h1 className="w-50">
          {item.id} <br />
            <i>{item.title}</i> <br /> {item.description}
          </h1>
          {/* <img src={item.images} alt="" /> */}
          <h3>
            <b className="text-success">Price :</b> {item.price}{" "}
            <b className="text-success">Discount:</b>
            {item.discountPercentage}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default First;
