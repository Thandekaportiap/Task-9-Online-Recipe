import React, { useState } from 'react';

const EditModal = ({ recipes, onClose, onUpdate }) => {
    const [formData, setFormData] = useState({ ...recipes });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate(formData);
        console.log(formData)
    };

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-20">
            <div className="bg-white p-6 rounded shadow-lg w-6/12">
                <h2 className="text-xl font-bold mb-4 text-center text-teal-800">Edit Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Recipe Name</label>
                        <input
                            type="text"
                            name="recipeName"
                            value={formData.recipeName}
                            onChange={handleChange}
                            className="border-2 border-teal-800 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Ingredients</label>
                        <textarea
                            name="ingredients"
                            value={formData.ingredients}
                            onChange={handleChange}
                            className="border-2 border-teal-800 rounded w-full h-fit p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Instructions</label>
                        <textarea
                            name="instructions"
                            value={formData.instructions}
                            onChange={handleChange}
                            className="border-2 border-teal-800 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Preparation Time</label>
                        <input
                            type="number"
                            name="preparationTime"
                            value={formData.preparationTime}
                            onChange={handleChange}
                            className="border-2 border-teal-800 rounded w-full p-2"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Cooking Time</label>
                        <input
                            type="number"
                            name="cookingTime"
                            value={formData.cookingTime}
                            onChange={handleChange}
                            className="border-2 border-teal-800 rounded w-full p-2"
                        />
                    </div>
                    <div className="flex justify-between">
                        <button type="button" onClick={onClose} className="bg-red-700 px-4 py-2 rounded">Cancel</button>
                        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditModal;
