import { useState } from "react";
import Todo from "../../components/todo-project/Todo";

const NumberToggle = () => {
  const numbers = ["2025", "2018", "2020"];
  const [isShowingAll, setIsShowingAll] = useState(false);

  const toggleNumbers = () => {
    setIsShowingAll(!isShowingAll);
  };

  return (
    <div>
      <div style={{ display: "flex", overflow: "hidden", width: "100px" }}>
        {isShowingAll ? (
          numbers.map((number, index) => (
            <div key={index} style={{ display: "block" }}>
              {number}
            </div>
          ))
        ) : (
          <div>{numbers[0]}</div>
        )}
      </div>
      <button onClick={toggleNumbers}>
        {isShowingAll ? "Show One" : "Show All"}
      </button>
      {/* <Todo /> */}
    </div>
  );
};

export default NumberToggle;
