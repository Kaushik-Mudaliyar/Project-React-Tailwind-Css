import React from "react";

function Card({ details, index, task, setTask }) {
  const handleClick = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    setTask(copyTask);
  };

  return (
    <div
      className="relative bg-slate-800 w-35 h-50 text-black flex flex-col items-center justify-between p-4 rounded z-10"
      key={index}
    >
      <h1 className="text-xl font-semibold">{details.input}</h1>
      <p className="text-sm">{details.text}</p>
      <button
        onClick={() => {
          handleClick(index);
        }}
        className="bg-red-500 w-full rounded py-1 active:scale-95 outline-none text-white"
      >
        delete
      </button>

      <img
        src="https://c8.alamy.com/comp/2H19Y1J/spiral-bound-notepad-real-open-notebook-paper-background-or-template-2H19Y1J.jpg"
        alt=""
        className="absolute w-35 h-50 object-cover top-0 -z-10 "
      />
    </div>
  );
}

export default Card;
