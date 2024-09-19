
import { useState, useEffect } from 'react';
import Cake from '../assets/dessert.jpeg'
import { Link, useParams } from 'react-router-dom'


const ReadMore = ({userId, data }) => {
    // console.log(userId)
    // console.log(data)

    

    const{id}=useParams();
  console.log(id)


    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);

    const handleEditClick = (item) => {
        setCurrentItem(item);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentItem(null);
    };

    const handleUpdate = (updatedInfo) => {
        // Update the logic to handle the updated information
        console.log('Updated Info:', updatedInfo);
        handleCloseModal();
    };


// let list = [{
//     recipeName: "dsfgsd",
//     ingredients: "cxbcx",
//     instructions: "fhfda",
//     category: "Main Course",
//     preparationTime: "20",
//     cookingTime: "353",
//     servings: "5",
//     preview:  Cake,
// }
// ]
  return (
    <>
    <section>
    {
        data.map((item) => (
            <div className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
        <img className="h-full w-full object-cover" src={item.preview} alt={item.recipeName}/>
    </div>
    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div className='flex justify-between  py-4 px-2'>
        <span className='text-xl'>{item.category}</span> <span className='text-xl'>Servings {item.servings}</span>
        </div>
        <div className="flex flex-col p-12 md:px-16 ">
            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">{item.recipeName}</h2>
            <p className="mt-4">
                {item.ingredients}
            </p>
            <p className="mt-4">
                {item.instructions}
            </p>
          <div className='flex justify-between items-center'>
          <span className='text-xl'>Preparation {item.preparationTime} Mins</span>
          <span className='text-xl'>Cooking {item.cookingTime} Mins</span>
          </div>
            <div className="mt-8">
                <button
                    className="text-center text-lg  text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-2  hover:bg-green-800 hover:shadow-md md:w-48 mx-3"
                    onClick={() => handleEditClick(item)}>Edit</button>
                    <button
                    className="text-center text-lg  text-gray-100 bg-red-600 border-solid border-2 border-gray-600 py-2  hover:bg-red-800 hover:shadow-md md:w-48">Delete</button>
            </div>
        </div>
        
    </div>
    </div>
        ))
    }

<Link to=".."><button style={{color:"whitesmoke",background:"black", position:"absolute",bottom:"90px",left:"8px"}}>Back to Recipes</button></Link>
    </section>
    </>
  )
}

export default ReadMore
