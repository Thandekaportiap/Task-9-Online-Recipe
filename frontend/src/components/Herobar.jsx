import React, { useEffect, useState } from 'react'
import Main from '../assets/main.jpg'
import Appetizing from '../assets/medium.jpg'
import Dessert from '../assets/dessert2.jpg'
import Traditional from '../assets/maxican.jpg'
import { Link } from 'react-router-dom'
import RecipeList from '../pages/RecipeList'


const Herobar = () => {

    const [categories, setCategories] = useState([]);

        useEffect(() => {
        const fetchProductCategories = () => {
                fetch("http://localhost:8000/recipes/categories")
        .then((res) => res.json())
        .then((json) => setCategories(json));
        };
        fetchProductCategories();
        }, []);

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
            <div className='bg-[#006D5B] text-white w-full h-1/5  lg:flex lg:flex-row ssm:flex ssm:flex-col justify-center items-center ssm:m-4'>
                {
                    list.map((item) => (
                        <div key={item.id} className="card bg-base-100 w-96 shadow-xl my-2 mx-4 ">
                            <figure className="px-10 pt-10">
                                <img
                                    src={item.url} size='20px'
                                    alt={item.title}  
                                    className="rounded-xl " />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="herobar card-title text-3xl my-3">{item.title}</h2>
                                <div className="card-actions">
                                    <Link to={"/RecipeList"}><button className="bg-white text-[#006D5B] py-2 px-4 rounded-lg">More!</button></Link>
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
