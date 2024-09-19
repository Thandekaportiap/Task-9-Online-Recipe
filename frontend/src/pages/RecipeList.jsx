//Display in the Crud Operations
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import TypewriterEffect from '../components/TypeEffect'
import { Link } from 'react-router-dom'

const RecipeList = ({id}) => {
    console.log(id)
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/recipes?userId=${id}`)
            .then(result => {
                setRecipes(result.data || []);
                setFilteredRecipes(result.data || []); 
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, [id]); 

    useEffect(() => {
        setFilteredRecipes(
            recipes.filter(recipe => 
                recipe.recipeName.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );
    }, [searchTerm, recipes]);

  return (
    <>
<section>
<div className='p-6'>
<TypewriterEffect/>
</div>
<div className='mt-6 flex justify-center items-center'>
<input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Recipes..."
        className="border border-y-8 border-double border-teal-800 rounded-md shadow-lg px-6 py-2 mb-4"
      />
</div>
      

      <div className='lg:grid lg:grid-cols-3 lg:gap-4 ssm:flex ssm:flex-row justify-center items-center p-4'>
      {filteredRecipes.map(item => (
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
                         </div>
                       </div>
                     </div>
                       </div>
            ))}
      </div>
</section>
    </>
  )
}

export default RecipeList
