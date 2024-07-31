import React from "react";

const TodoComplete = ({ computedItemsLeft, clearComplete }) => {
  return (
    <section className="flex justify-between rounded-b-md bg-white py-4 px-4 mr-20">
      <span className="text-gray-400">{computedItemsLeft} items left</span>
      <button className="text-gray-400" onClick={clearComplete}>
        Clear Completed
      </button>
    </section>
  );
};

export default TodoComplete;
