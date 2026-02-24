import React, { useState } from "react";

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    // const alltask = [...task];
    // alltask.slice(idx, 1);
    // settask(alltask);
    console.log("form submitted:");
    console.log(title, detail);
     settitle("")
     setdetail("")
  };
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");
  // const [task, settask] = useState([]);
  return (
    <div className="min-h-screen bg-zinc-800">
      <div className="w-full py-7 bg-cyan-600 flex justify-center items-center ">
        <h1 className="text-4xl font-bold text-white">TODO APP</h1>
      </div>
      <center>
        <div className="w-100 h-70 bg-gray-600 mt-5 rounded-2xl  opacity-80">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col justify-center items-center gap-5 py-10"
          >
            <input
              className="bg-gray-300 font-bold w-80 outline-none py-3 rounded-[5px] px-5 text-black text-lg"
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => {
              settitle(e.target.value);
             
            }}
            />
            <textarea
              className="bg-gray-300 w-80 outline-none py-3 rounded-[5px] px-5 text-black text-lg"
              name=""
              id=""
              placeholder="Write Detail....."
              value={detail}
              onChange={(e) => {
              setdetail(e.target.value);
            }}
            ></textarea>
            <button
              onClick={submitHandler}
              className="bg-green-500 active:scale-95 text-white text-lg font-bold rounded-[5px] py-1 px-8"
            >
              ADD TASK
            </button>
          </form>
        </div>
      </center>
    </div>
  );
};

export default App;
