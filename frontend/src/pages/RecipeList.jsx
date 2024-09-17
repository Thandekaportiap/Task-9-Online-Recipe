//Display in the Crud Operations
import React,{useState} from 'react'
import Main from '../assets/main.jpg'
import Appetizing from '../assets/medium.jpg'
import Dessert from '../assets/dessert2.jpg'
import Traditional from '../assets/maxican.jpg'

const RecipeList = () => {
    const [searchTerm, setSearchTerm] = useState('');


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
<div>

<div className='mt-4 flex justify-center items-center'>
<input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Recipes..."
        className="border border-y-8 border-double border-teal-800 rounded-md shadow-lg px-6 py-2 mb-4"
      />
</div>
      

      <div>
        {list.map((item) => (
            <div className="card card-side bg-base-100 shadow-xl">
            <figure>
              <img
                src={item.url}
                alt={item.title} 
                style={{width:"30px", height:"40px"}}/>
            </figure>
            <div className="card-body">
              <h2 className="card-title">New movie is released!</h2>
              <p>Click the button to watch on Jetflix app.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
</div>
    </>
  )
}

export default RecipeList
