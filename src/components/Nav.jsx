import {  } from 'react'


const Nav = () => {
  return (
    <nav className="flex justify-between items-center bg-slate-950 w-full p-4 text-white text-lg font-medium shadow-lg rounded-md">
      <h1 className="text-xl font-bold text-white">Todo App</h1>
      <div className="flex gap-5">
        <h2 className="cursor-pointer">Home</h2>
        <h2 className="cursor-pointer">Todos</h2>
      </div>
    </nav>
  );
};

export default Nav;

