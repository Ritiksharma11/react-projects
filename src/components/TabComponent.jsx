import React from 'react'
import { useState } from 'react'

const TabComponent = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const tabs = [
        { id: 'tab1', label: 'Home' },
        { id: 'tab2', label: 'About' },
        { id: 'tab3', label: 'Services' },
        { id: 'tab4', label: 'Contact' },
    ]

    const content = {
        tab1: (
            <div>Home</div>
        ),
        tab2: (
            <div>About</div>
        ),
        tab3: (
            <div>Services</div>
        ),
        tab4: (
            <div>Contact</div>
        ),
    }

    return (
        <div className='bg-gradient-to-b from-purple-950 via-purple-900 to-purple-950 w-full min-h-screen flex justify-center items-center  '>
            <div className='w-[25rem] bg-white h-[25rem] '>
                <div className='flex justify-between py-2 px-4 border-b-2'>
                    {
                        tabs.map((tab) => (
                            <button onClick={() => setActiveTab(tab.id)} key={tab.id} className={`border-2 border-black py-1 px-4 ${activeTab == tab.id ? 'bg-black text-white' : ''} `}>{tab.label}</button>
                        ))
                    }
                </div>
                <div className='flex justify-center items-center mt-10'>
                    {
                        content[activeTab]
                    }
                </div>
            </div>
        </div>
    )
}

export default TabComponent