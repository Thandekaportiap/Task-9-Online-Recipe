//Display in the Crud Operations
import React,{useState, useEffect} from 'react'
import axios from 'axios'
import TypewriterEffect from '../components/TypeEffect'
import { Link } from 'react-router-dom'
import CardRecipe from '../components/CardRecipe'

const RecipeList = ({id}) => {
    // console.log(id)
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

        {filteredRecipes.length === 0 ? (
          <div className="text-center col-span-3 text-4xl text-red-700">No Recipes available that match your search. Add your first Recipe!</div>
        ) : (
<div className='lg:grid lg:grid-cols-3 lg:gap-4 ssm:flex ssm:flex-row justify-center items-center p-4'>
{filteredRecipes.map(item => (
  <CardRecipe key={item.id} item={item}/>
))}
</div>
        )}
</section>
    </>
  )
}

export default RecipeList
