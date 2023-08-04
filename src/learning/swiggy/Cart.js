import React from "react";
import { imageCDN_URL } from "../../config";

import { useSelector } from "react-redux";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  console.group(items);

  return (
    <>
      {items.map((item) => {
        return (
          <>
          <div className="flex border-2 p-4 ">
            <div className="border border-indigo-500 w-[200px]">
              <img
                src={imageCDN_URL + item.info.cloudinaryImageId}
                alt="food_image"
              />
              <h2 className="font-medium text-orange-300">
                {item.info.name}
              </h2>
              <p>{item.info.avgRating}</p>
              <p>{item.info.costForTwo} </p>
              <p>{item.name} </p>
              <button className="bg-green-500 text-white rounded px-2 py-[1px] font-bold">
                ADD
              </button>
            </div>
          </div>
        </>
        );
      })}
    </>
  );
};

export default Cart;
