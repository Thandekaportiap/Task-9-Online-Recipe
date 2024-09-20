import React from 'react'
import { Link } from 'react-router-dom'

export default function RecipeCard({item}) {
    return (

        
        
                <div class="flex flex-col w-fit mx-auto">
                    <div class="product-card grid grid-cols-1 md:grid-cols-2 gap-10 py-12 lg:pb-8 lg:pt-10">
                        <div
                            class="bg-gradient-to-b from-teal-600 to-blue-200 dark:from-gray-800 dark:to-gray-700 border rounded-xl w-fit mx-auto flex flex-col justify-center gap-y-4">
                            <div class="w-full flex flex-col justify-between gap-y-5 max-w-[20rem] mx-auto p-5 rounded-xl">
                                <img class="rounded-[calc(20px-12px)] rounded-b-none" src={item.preview} />
                                <h4 class="listcard text-4xl font-bold text-black dark:text-white lg:text-left">{item.recipeName}
                                </h4>
                                <p class="text-black dark:text-white text-sm lg:text-left">{item.category}</p>
                                <Link to={`${item.id}`}><button class="flex item-start bg-black text-white w-fit px-5 py-1 rounded-full">Read More!</button></Link>
                                {console.log(item)}
                            </div>
                        </div>
                    </div>
            
        
        </div>

    )
}
