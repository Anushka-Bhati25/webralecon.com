"use client";
import React from 'react'
import { MdOutlineDesignServices } from "react-icons/md";

const Cards = () => {
    const data = [
        { id: 1,  heading: "Design", summary: "Our product design service lets you prototype, test and validate your ideas" },
        { id: 2,  heading: "Development", summary: "Our product design service lets you prototype, test and validate your ideas." },
        { id: 3, heading: "Data Analytics", summary: "Our product design service lets you prototype, test and validate your ideas." }
    ]
    return (
        <>
            <div className='bg-blue-600'>
                <div className='mt-14 py-10 text-center text-zinc-900 font-medium'>
                    <p> &#47;&#47; WHY CHOOSE US</p>
                    <p className='text-4xl text-white font-bold'>We craft your ideas to globalize your brand</p>
                </div>
                <div className="flex gap-6 flex-wrap justify-center pb-14 sm:h-full md:h-full lg:h-full">
                    {data.map(item => {
                        return (
                            <>
                                <div
                                    className="transform p-10 rounded-xl max-w-sm max-h-60 bg-blue-700 hover:bg-blue-500 shadow-xl transition duration-300 hover:scale-105 hover:rounded-none" style={{ width: '' }}>
                                    {/* <div className='h-48 w-48 pt-11 mx-auto items-center block  '>
                                    </div> */}
                                    <div className="h-full justify-center items-center">
                                        <p className="font-bold text-center text-white">{item.heading}</p>
                                        <p className="text-center p-5 text-zinc-200  mb-6">
                                            {item.summary}
                                        </p>
                                    </div>
                                </div>
                            </>
                        )
                    })}

                </div>
            </div>
        </>
    )
}

export default Cards