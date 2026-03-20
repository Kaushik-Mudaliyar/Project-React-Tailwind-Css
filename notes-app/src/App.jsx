import React, { useState } from "react";
import Card from "./components/Card.jsx";
function App() {
  const [input, setInput] = useState("");
  const [text, setText] = useState("");
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input !== "" && text !== "") {
      const copyTask = [...task];
      copyTask.push({ input, text });

      setTask(copyTask);

      setInput("");
      setText("");
    }
  };

  return (
    <div className="w-full h-screen xl:h-full lg:flex bg-amber-200 text-slate-950">
      <div className="lg:w-1/2 lg:h-screen mb-10">
        <div className="w-full flex flex-col gap-6 justify-center items-center ">
          <h1 className="text-2xl font-bold mt-6">Notes App</h1>
          <form
            className="w-full flex flex-col px-10 items-center gap-4"
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              type="text"
              className="border w-full p-2 outline-none rounded"
              placeholder="Enter note title"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <textarea
              type="text"
              className="w-full border h-40 p-2 outline-none rounded"
              placeholder="Enter note details"
              value={text}
              onChange={(e) => {
                setText(e.target.value);
              }}
            />
            <button className="bg-black text-white px-4 py-1 rounded active:scale-95 ">
              Add Note
            </button>
          </form>
        </div>
      </div>
      <div className="lg:w-1/2 lg:h-screen lg:border-l">
        <h1 className="text-2xl font-semibold pt-8 px-8">Recent Notes</h1>

        <div className="flex flex-wrap lg:justify-startoverflow-auto gap-8 p-8">
          {task.map((elem, idx) => {
            return (
              <Card details={elem} index={idx} task={task} setTask={setTask} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
