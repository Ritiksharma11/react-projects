import React from 'react'
import { useState } from 'react'
import { MdDelete } from "react-icons/md";

const Todo = () => {
    const [input, setInput] = useState('');
    const [todo, setTodo] = useState(() => {
        const saveTodos = localStorage.getItem('todos');

        if (!saveTodos) {
            return []
        }
        return JSON.parse(saveTodos)
    });

    const handleChange = (e) => {
        console.log(e.target.value)
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (input == '') {
            alert("Please enter something")
        }
        else if (todo.includes(input)) {
            alert("Duplicate value")
        }
        else {
            setTodo([...todo, input]);

            localStorage.setItem('todos', JSON.stringify([...todo, input]))

            setInput('');
        }
    }

    const handleDelete = (i) => {
        let filterTodos = todo.filter((elem, id) => {
            return id != i;
        })
        setTodo(filterTodos);
        localStorage.setItem('todos', JSON.stringify(filterTodos))
    }

    return (
        <div className='w-full min-h-screen bg-green-950 flex justify-center'>
            <div className='mt-10 flex flex-col items-center '>
                <h1 className='text-4xl font-semibold mb-5 text-white'>Todo List</h1>
                <form onSubmit={handleSubmit} className='flex items-center gap-5'>
                    <input type="text" className='py-1 px-2 outline-none rounded-md '
                        value={input} onChange={handleChange}
                        placeholder='Enter your todos here...'
                    />
                    <button type="submit" className='bg-blue-600 rounded-full cursor-pointer text-white py-1 px-3'>Submit</button>
                </form>

                <div className='mt-10'>
                    {
                        todo.map((t, i) => (
                            <div key={i} className='flex items-center justify-between gap-5 mt-5 text-xl font-font-semibold bg-white py-1 px-4 w-60 rounded-xl '>
                                <h1>{t}</h1>
                                <button>
                                    <MdDelete onClick={() => handleDelete(i)} className='text-red-500' />
                                </button>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Todo