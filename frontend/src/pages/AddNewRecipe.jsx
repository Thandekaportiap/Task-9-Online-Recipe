
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const AddNewRecipe = ({ id }) => {
    // console.log(id)

    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            navigate('/Unauthorized');
        }
    }, [id, navigate]);

    const [recipeName, setRecipeName] = useState('');
    const [recipePicture, setRecipePicture] = useState(null);
    const [preview, setPreview] = useState(null);
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    const [preparationTime, setPreparationTime] = useState('');
    const [cookingTime, setCookingTime] = useState('');
    const [servings, setServings] = useState('');
   

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setRecipePicture(selectedFile);
        if (selectedFile && selectedFile.type.startsWith("image/")) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPreview(reader.result);
            };
            reader.readAsDataURL(selectedFile);
        } else {
            setPreview(null);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newRecipe = {
            userId:id,
            recipeName,
            ingredients,
            instructions,
            category,
            preparationTime,
            cookingTime,
            servings,
            preview
        };

        axios.post('http://localhost:8000/recipes', newRecipe)
      .then(result => {
        alert("Successfully")
        navigate('/RecipeList')
      })
    };

    return (
        <section  className='bg-cover bg-no-repeat '
     style={{backgroundImage:`url(${require("../assets/download.jpeg")})`}}
   >
        <div className="addnew  p-8 rounded shadow-md max-w-lg mx-auto">
            <h2 className="text-2xl font-bold text-center mb-6" style={{ color: '#006D5B' }}>Add New Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Recipe Name</label>
                    <input
                        type="text"
                        value={recipeName}
                        onChange={(e) => setRecipeName(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Recipe Picture</label>
                    <input
                        type="file"
                        onChange={handleFileChange} 
                        className="w-full border rounded"
                        accept="image/*"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Ingredients</label>
                    <textarea
                        value={ingredients}
                        onChange={(e) => setIngredients(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        rows="4"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Instructions</label>
                    <textarea
                        value={instructions}
                        onChange={(e) => setInstructions(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        rows="4"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="Dessert">Dessert</option>
                        <option value="Main Course">Main Course</option>
                        <option value="Appetizer">Appetizer</option>
                        <option value="Appetizer">Traditional</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Preparation Time (minutes)</label>
                    <select
                        value={preparationTime}
                        onChange={(e) => setPreparationTime(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    >
                        <option value="">Select Time</option>
                        <option value="10">Less than 10</option>
                        <option value="20">10 - 20</option>
                        <option value="30">20 - 30</option>
                        <option value="60">30 - 60</option>
                        <option value="60+">More than 60</option>
                    </select>
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Cooking Time (minutes)</label>
                    <input
                        type="number"
                        value={cookingTime}
                        onChange={(e) => setCookingTime(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                <div className="mb-4">
                    <label className="block text-gray-700">Servings</label>
                    <input
                        type="number"
                        value={servings}
                        onChange={(e) => setServings(e.target.value)}
                        className="w-full px-4 py-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#006D5B] text-white py-2 rounded hover:bg-green-700 transition duration-300"
                >
                    Add Recipe
                </button>
            </form>
        </div>
        </section>
    );
};
    export default AddNewRecipe;