import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import EditModal from '../components/Edit';
import { FaArrowLeft } from "react-icons/fa";
import axios from 'axios';

const ReadMore = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(true);

    if (!id) {
        return <div>Please log in to view this recipe.</div>;
    }

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const result = await axios.get(`http://localhost:8000/recipes/${id}`);
                setRecipe(result.data);
            } catch (error) {
                console.error("Error fetching data: ", error);
                Swal.fire('Error!', 'Failed to fetch recipe data.', 'error');
            } finally {
                setLoading(false);
            }
        };
        fetchRecipe();
    }, [id]);

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleUpdate = async (updatedInfo) => {
        try {
            const response = await axios.put(`http://localhost:8000/recipes/${updatedInfo.id}`, updatedInfo);
            Swal.fire('Updated!', 'Your recipe has been updated.', 'success');
            setRecipe(response.data);
            handleCloseModal();
        } catch (error) {
            console.error("Error updating recipe:", error);
            Swal.fire('Error!', 'Failed to update recipe.', 'error');
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
            try {
                await axios.delete(`http://localhost:8000/recipes/${recipeId}`);
                Swal.fire('Deleted!', 'Your recipe has been deleted.', 'success');
                setRecipe(null); // Clear the recipe state to trigger "No recipe found"
            } catch (error) {
                console.error("Error deleting recipe:", error);
                Swal.fire('Error!', 'Failed to delete recipe.', 'error');
            }
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!recipe) {
        return <div className='text-center text-4xl my-6 text-red-700'>No recipe found.
         <Link to="..">
                <button style={{ 
                    color: "whitesmoke", 
                    backgroundColor: "black", 
                    position: "absolute", 
                    bottom: "90px", 
                    left: "8px", 
                    display: "flex", 
                    alignItems: "center"
                }}>
                    <FaArrowLeft size={25} style={{ marginRight: "8px" }} />
                    Back to All Recipes
                </button>
            </Link>
        </div>; 
    }

    return (
        <section className='h-fit'>
            <div key={recipe.id} className="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">
                <div className="w-full h-64 lg:w-1/2 lg:h-auto">
                    <img className="h-full w-full object-cover rounded-lg" src={recipe.preview} alt={recipe.recipeName} />
                </div>
                <div className="max-w-lg bg-[#FBFBF9] md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
                    <div className='flex justify-between py-4 px-2'>
                        <span className='text-xl'>{recipe.category}</span>
                        <span className='text-xl'>Servings {recipe.servings}</span>
                    </div>
                    <div className="flex flex-col p-12 md:px-16">
                        <h2 className="text-2xl font-medium uppercase text-green-800 lg:text-4xl">{recipe.recipeName}</h2>
                        <span className='font-bold text-xl mt-4'>Ingredients:</span>
                        <p className="mt-1">{recipe.ingredients}</p>
                        <span className='font-bold text-xl mt-4'>Instructions:</span>
                        <p className="my-1">{recipe.instructions}</p>
                        <div className='flex justify-between items-center mt-3'>
                            <span className='text-xl'>Preparation {recipe.preparationTime} Mins</span>
                            <span className='text-xl'>Cooking {recipe.cookingTime} Mins</span>
                        </div>
                        <div className="mt-8">
                            <button
                                className="text-center text-lg text-gray-100 bg-green-600 border-solid border-2 border-gray-600 py-2 hover:bg-green-800 hover:shadow-md md:w-48 mx-3"
                                onClick={handleEditClick}>Edit</button>
                            <button
                                className="text-center text-lg text-gray-100 bg-red-600 border-solid border-2 border-gray-600 py-2 hover:bg-red-800 hover:shadow-md md:w-48"
                                onClick={() => handleDeleteRecipe(recipe.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>

            <Link to="..">
                <button style={{ 
                    color: "whitesmoke", 
                    backgroundColor: "black", 
                    position: "absolute", 
                    bottom: "90px", 
                    left: "8px", 
                    display: "flex", 
                    alignItems: "center"
                }}>
                    <FaArrowLeft size={25} style={{ marginRight: "8px" }} />
                    Back to Recipes
                </button>
            </Link>

            {isModalOpen && (
                <EditModal 
                    recipes={recipe} 
                    onClose={handleCloseModal} 
                    onUpdate={handleUpdate} 
                />
            )}
        </section>
    );
};

export default ReadMore;
