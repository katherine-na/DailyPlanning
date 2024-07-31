import React from "react";

const TodoFilter = ({ changeFilter }) => {
  return (
    <section>
      <div className="pl-10 flex flex-col items-start gap-4 rounded-md">
        <button
          className=""
          onClick={() => {
            changeFilter("all");
          }}
        >
          All
        </button>
        <button
          className=""
          onClick={() => {
            changeFilter("active");
          }}
        >
          Active
        </button>
        <button
          className=""
          onClick={() => {
            changeFilter("completed");
          }}
        >
          Complete
        </button>
      </div>
    </section>
  );
};

export default TodoFilter;
