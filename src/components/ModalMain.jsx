import React from 'react'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import Modal from './Modal';

const ModalMain = () => {
    const [open, setOpen] = useState(false)
    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <button onClick={() => setOpen(true)} className='flex items-center py-1 px-4 rounded-md text-lg gap-2 bg-red-600 text-white font-semibold'>
                <MdDelete /> Delete
            </button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <div className='p-4 flex flex-col justify-center items-center '>
                    <button className='absolute top-1 right-2 text-xl font-bold'>X</button>
                    <MdDelete className='text-red-500 text-4xl' />
                    <h1 className='font-bold text-xl pt-4'>Confirm Delete</h1>
                    <p className='text-lg' >Are you sure you want to delete?</p>
                </div>
            </Modal>
        </div>
    )
}

export default ModalMain