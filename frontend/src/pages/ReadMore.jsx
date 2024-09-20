import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditModal from '../components/Edit'; // Import the EditModal
import axios from 'axios';

const ReadMore = () => {
    const { id } = useParams();
    // console.log(id)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/recipes/${id}`)
            .then(result => {
                setRecipes(result.data || []);
                setFilteredRecipes(result.data || []); 
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            });
    }, [id]); 

    const handleEditClick = (recipes) => {
        setCurrentItem(recipes);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setCurrentItem(null);
    };

    const handleUpdate = async (updatedInfo) => {
        try {
            const response = await fetch(`http://localhost:8000/recipes/${updatedInfo.id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedInfo),
            });
    
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
    
            const updatedRecipe = await response.json(); // Moved this line up to ensure updatedRecipe is defined before using it.
            Swal.fire('Updated!', 'Your recipe has been updated.', 'success');
            handleCloseModal();
    
            setRecipes(recipes.map(recipe => recipe.id === updatedRecipe.id ? updatedRecipe : recipe));
        } catch (error) {
            console.error("Error updating recipe:", error);
        }
    };

    const handleDeleteRecipe = async (recipeId) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
        });
    
        if (result.isConfirmed) {
            await fetch(`http://localhost:8000/recipes/${recipeId}`, {
                method: 'DELETE',
            });
            setRecipes(recipes.filter(recipe => recipe.id !== recipeId)); // Fixed from 'id' to 'recipeId'
            window.location.reload();
            Swal.fire('Deleted!', 'Your recipe has been deleted.', 'success');
            
        }
    };

    return (
        <section className='h-fit'>
                <div key={recipes.id} className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                    <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                        <img className="h-full w-full object-cover rounded-lg" src={recipes.preview} alt={recipes.recipeName} />
                    </div>
                    <div className="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                        <div className='flex justify-between py-4 px-2'>
                            <span className='text-xl'>{recipes.category}</span>
                            <span className='text-xl'>Servings {recipes.servings}</span>
                        </div>
                        <div className="flex flex-col p-12 md:px-16">
                            <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">{recipes.recipeName}</h2>
                            <span className='font-bold text-xl mt-4'>Ingredients:</span>
                            <p className="mt-1">{recipes.ingredients}</p>
                            <span className='font-bold text-xl mt-4'>Instructions:</span>
                            <p className="my-1">{recipes.instructions}</p>
                            <div className='flex justify-between items-center mt-3'>
                                <span className='text-xl'>Preparation {recipes.preparationTime} Mins</span>
                                <span className='text-xl'>Cooking {recipes.cookingTime} Mins</span>
                            </div>
                            <div className="mt-8">
                                <button
                                    className="text-center text-lg text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-2 hover:bg-green-800 hover:shadow-md md:w-48 mx-3"
                                    onClick={() => handleEditClick(recipes)}>Edit</button>
                                <button
                                    className="text-center text-lg text-gray-100 bg-red-600 border-solid border-2 border-gray-600 py-2 hover:bg-red-800 hover:shadow-md md:w-48"
                                    onClick={() => handleDeleteRecipe(recipes.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                </div>

            <Link to="..">
                <button style={{ color: "whitesmoke", background: "black", position: "absolute", bottom: "90px", left: "8px" }}>
                    Back to Recipes
                </button>
            </Link>

            {isModalOpen && (
                <EditModal 
                    recipes={currentItem} 
                    onClose={handleCloseModal} 
                    onUpdate={handleUpdate} 
                />
            )}
        </section>
    );
};

export default ReadMore;
