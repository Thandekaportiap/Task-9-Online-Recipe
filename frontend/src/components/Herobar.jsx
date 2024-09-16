import React from 'react'
import Main from '../assets/main.jpg'
import Appetizing from '../assets/appetizing.jpeg'
import Dessert from '../assets/dessert2.jpg'
import Traditional from '../assets/zulu.jpg'

const Herobar = () => {

    let list = [
        {
            title: "Appetizing",
            url: Appetizing,
            id: 1
        },
        {
            title: "Dessert",
            url: Dessert,  
            id: 2
        },
        {
            title: "Main Course",  
            url: Main,
            id: 3
        },
        {
            title: "Traditional Food",
            url: Traditional,
            id: 4
        }
    ]
    
    return (
        <>
            <div className='bg-[#006D5B] text-white w-full h-1/4  lg:flex lg:flex-row ssm:flex ssm:flex-col'>
                {
                    list.map((item) => (
                        <div key={item.id} className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src={item.url} size='20px'
                                    alt={item.title}  
                                    className="rounded-xl " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{item.title}</h2>
                                <div className="card-actions">
                                    <button className="bg-white text-[#006D5B] py-2 px-4">More!</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
    </>
  )
}

export default Herobar
