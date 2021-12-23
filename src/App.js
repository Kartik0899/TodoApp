// import React from 'react';
// import TodoList from './Components/TodoList'

// function App() {
//   return (
//     <div className="bg-gray-800 w-full h-screen text-gray-100 fixed">
//       <div className="p-4 mt-0 sm:p-8 lg:container lg:mt-8 lg:mx-auto bg-gray-900">
//         <h1 className="text-4xl font-semibold pb-2">Basic Todo App</h1>
//         <TodoList />
//       </div>
//       <div className="mt-1 text-center text-sm tracking-wide">
//         Built with <a className="hover:underline text-blue-300" href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a> & <a className="hover:underline text-teal-600" href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">Tailwind CSS</a> &bull; 2020 &copy; <a className="hover:underline" href="https://dirlam.dev/" target="_blank" rel="noopener noreferrer">Dylan Dirlam</a>
//       </div>
//     </div>
//   );
// }

// export default App;






import React from 'react';
import './App.css';
import TodoApp from './TodoApp';


function App() {
  return (
    <>
      <TodoApp />
    </>
  );
}

export default App;