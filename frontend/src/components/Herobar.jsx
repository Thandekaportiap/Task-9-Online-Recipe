import React, { useEffect, useState } from 'react';
import Main from '../assets/main.jpg';
import Appetizing from '../assets/medium.jpg';
import Dessert from '../assets/dessert2.jpg';
import Traditional from '../assets/maxican.jpg';
import { Link } from 'react-router-dom';

const Herobar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchProductCategories = () => {
            fetch("https://task-9-online-recipe-2.onrender.com/product_categories")
                .then((res) => res.json())
                .then((json) => setCategories(json));
        };
        fetchProductCategories();
    }, []);

    const list = [
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
    ];

    return (
        <div className="bg-[#006D5B] text-white w-full py-8">
            <div className="flex flex-wrap justify-center gap-6 px-4">
                {list.map((item) => (
                    <div key={item.id} className="card bg-base-100 shadow-xl max-w-xs sm:max-w-sm">
                        <figure className="px-4 pt-4">
                            <img
                                src={item.url}
                                alt={item.title}
                                className="rounded-xl w-full h-40 object-cover"
                            />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-2xl font-semibold my-3">{item.title}</h2>
                            <div className="card-actions">
                                <Link to={`/CategoryRecipeList?category=${item.title}`}>
                                    <button className="bg-white text-[#006D5B] py-2 px-4 rounded-lg">More!</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Herobar;
