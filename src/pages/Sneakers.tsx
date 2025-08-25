import { useState } from "react";
import shoes from "../data.ts";
import cart from "/assets/icon-cart.svg";
import minus from "/assets/icon-minus.svg";
import plus from "/assets/icon-plus.svg";
import previous from "/assets/icon-previous.svg";
import next from "/assets/icon-next.svg";
import Content from "./Content.tsx";

const Sneakers = () => {
  // const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const { largeImage } = shoes[0];

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    return 0;
  };

  return (
    <div className="md:flex gap-10 ">
      <div>
        {largeImage && <img src={largeImage} alt="large" />}

        <div className="flip-icon md:hidden flex justify-between relative bottom-50 ">
          <div className="border rounded-full bg-white w-10 h-10 p-3">
            <img src={previous} alt="previous-icon" />
          </div>
          <div className="border rounded-full bg-white w-10 h-10 p-3">
            <img src={next} alt="next-icon" />
          </div>
        </div>
      </div>
      <div>
        <Content />
        <div className="flex justify-between">
          <div className="p-2 flex gap-5">
            <p>$125.00</p>
            <p>50%</p>
          </div>
          <div>
            <p>$250.00</p>
          </div>
        </div>
        <div className="flex justify-evenly mt-5">
          <button type="button" onClick={decreaseCount}>
            <img src={minus} alt="minus-icon" />
          </button>
          <div>{count}</div>
          <button type="button" onClick={increaseCount}>
            <img src={plus} alt="plus-icon" />
          </button>
        </div>
        <div className="flex justify-center gap-5 mt-10">
          <img src={cart} alt="Add to cart" />
          <p>Add to cart</p>
        </div>
      </div>
    </div>
  );
};
export default Sneakers;
