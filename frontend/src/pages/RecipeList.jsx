//Display in the Crud Operations
import React,{useState, useEffect} from 'react'
import axios from 'axios'

const RecipeList = ({id}) => {
    console.log(id)
    const [searchTerm, setSearchTerm] = useState('');

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/recipes?userId=${id}`)
            .then(result => {
                setRecipes(result.data || []);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, []);

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
      

      <div className='lg:grid lg:grid-cols-3 lg:gap-4 ssm:flex ssm:flex-row justify-center items-center'>
      {recipes.map(item => (
                    <div key={item.id} className="card bg-line-100 w-96 shadow-xl">
                    <figure className="pl-12">
                    <img
                        src={item.preview}
                        alt={item.recipeName} 
                        className="rounded-xl h-3/5 w-9/12" />
                    </figure>
                    <div className="card-body items-center text-center">
                    <h2 className="herobar text-4xl card-title">{item.recipeName} </h2>
                    <p>{item.category}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary px-4 py-2">Read More</button>
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
