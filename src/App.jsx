import React, { useState } from "react";

const App = () => {
 const submitHandler = (e) => {
  e.preventDefault();

  const newTask = {
    title: title,
    detail: detail,
  };

  settask([...task, newTask]);

  settitle("");
  setdetail("");
};
  const [title, settitle] = useState("");
  const [detail, setdetail] = useState("");
  const [task, settask] = useState([]);
  return (
    <div className="min-h-screen bg-zinc-800">
      <div className="w-full py-3 bg-gray-700 flex justify-center items-center ">
        <h1 className="text-4xl font-bold text-white">TODO APP</h1>
      </div>
      <center className="flex flex-col lg:flex-row justify-center gap-20 items-center ">
        <div className="w-110 h-120  bg-gray-700 mt-5 rounded-2xl  opacity-80">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col justify-center items-center gap-5 py-4"
          >
            <input
              className="bg-gray-300 font-bold w-90 outline-none py-3 rounded-[5px] px-5 text-black text-lg"
              type="text"
              placeholder="Title..."
              value={title}
              onChange={(e) => {
              settitle(e.target.value);
             
            }}
            />
            <textarea
              className="bg-gray-300 w-90 outline-none py-3 rounded-[5px] px-5 text-black text-lg"
              name=""
              id=""
              maxLength={30}
              placeholder="Write Detail....."
              value={detail}
              onChange={(e) => {
              setdetail(e.target.value);
            }}
            ></textarea>
            <button type="submit"
              className="bg-green-500 active:scale-95 text-white text-lg font-bold rounded-[5px] py-1 px-34"
            >
              ADD TASK
            </button>
          </form>
        </div>
        <div className="scroll bg-gray-700 h-120 overflow-auto w-110 rounded-2xl mt-5">
         <h1 className="text-3xl font-bold text-white mt-4">My Tasks</h1>
         <div className="flex flex-wrap">
             {task.map((elem,idx)=>{
              return(
                <div
                key={idx}
                className="bg-white w-100 h-15 ml-5 mt-5 flex justify-between items-center p-4  rounded-[10px]">
                  <input className="w-5 h-5 cursor-pointer" type="checkbox" />
                  <h1 className="font-bold text-xl">{elem.title}</h1>
                  <p>{elem.detail}</p>
                 <button className="bg-red-600 cursor-pointer text-white p-1 rounded-[5px]">Delete</button>
                </div>
              )
             })}
         </div>
        </div>
      </center>
    </div>
  );
};

export default App;
