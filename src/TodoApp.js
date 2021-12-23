import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrFormAdd } from "react-icons/gr";
import { v4 as uuidv4 } from "uuid";
import './App.css';

const TodoApp = () => {
    const [text, setText] = useState({
        myText: "",
    });

    // state for todo
    const [todo, setTodo] = useState([]);

    // handle text changes
    const handleChange = (e) => {
        setText({
            ...text,
            [e.target.name]: e.target.value,
        });
    };

    // handle submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const newTodo = {
            id: uuidv4(),
            todoItem: text,
        };

        setTodo([...todo, newTodo]);
        setText({
            myText: "",
        });
    };

    //   handle delete
    const handleDelete = (e, id) => {
        setTodo(todo.filter((items) => items.id !== id))

    }

    return (
        <>
            <div className="flex justify-center items-center" >
                <div className="mx-10 rounded-lg mt-10 shadow-lg overflow-hidden sm:mx-20 md:mx-52 lg:mx-80 boxcolor">
                    {/* header */}
                    <div className="h-16 m-4 flex justify-center items-center flex-col todoboxcolor">
                        <p className="text-xl ptop">2022</p>
                        <p className="text-3xl text-#48456C font-bold ptop">TODO APP</p>
                    </div>

                    <div className="flex justify-center" >
                        <ul className="flex flex-wrap flex-row" >
                            <li className="linum ml-4 mt-4 p-3">10</li>
                            <li className="linum ml-4 mt-4 p-3">11</li>
                            <li className="ml-4 mt-4 font-bold middleli">12</li>
                            <li className="linum ml-4 mt-4 p-3">13</li>
                            <li className="linum ml-4 mt-4 p-3">14</li>
                        </ul>
                    </div>

                    {/* body */}
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="mt-5 flex justify-center items-center">
                                <input
                                    name="myText"
                                    value={text.myText}
                                    onChange={handleChange}
                                    type="text"
                                    placeholder="Enter todos..."
                                    className="p-1 rounded pl-3 w-9/12 focus:outline-none inputfield"
                                />

                                <button
                                    type="submit"
                                    className="rounded-full px-1 m-2 boxicon"
                                >
                                    <GrFormAdd className="text-3xl text-white px-1 m-1" />
                                </button>
                            </div>
                        </form>

                        {/* todolist */}
                        <div className="itembox" >
                            {todo.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <div className="mt-3 flex justify-center">
                                            <ul className="w-9/12 rounded itemlist">
                                                <li className="text-xl pl-3 p-1 listitem">
                                                    {item.todoItem.myText}
                                                </li>
                                            </ul>
                                            <div className="rounded-r-lg px-1 deletebox">
                                                <RiDeleteBin6Line className="cursor-pointer text-3xl text-white px-1 mt-1 p-1"
                                                    onClick={(e) => handleDelete(e, item.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TodoApp;