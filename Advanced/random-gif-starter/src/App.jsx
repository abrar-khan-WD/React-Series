import React from "react";
import Random from "./components/Random";
import Tags from "./components/Tags";

const App = () => {
  return (
    <div className="w-full h-screen flex flex-col background relative overflow-x-hidden items-center">
      <h1 className="bg-white rounded-lg w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold ">Random GIFS</h1>
      <div className="flex flex-col w-full items-center gap-y-10 mt-10">
        <Random/>
        <Tags/>
      </div>
    </div>
  );
}

export default App;