import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardRecipe from '../components/CardRecipe';

const CategoryRecipeList = ({id}) => {

    if (!id) {
        return <div className='text-center text-4xl my-6 text-red-700'>Please log-in first!</div>;
    }


    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get('category');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/recipes?category=${category}`);
                setRecipes(response.data);
            } catch (err) {
                setError(err);
                console.error("Error fetching recipes:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchRecipes();
    }, [category]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <section>
            <h2 className="herobar text-6xl text-center my-4">{category} Recipes</h2>
            {recipes.length === 0 ? (
                <div className="text-center text-xl">No recipes found in this category.</div>
            ) : (
                <div className='lg:grid lg:grid-cols-3 lg:gap-4 ssm:flex ssm:flex-row justify-center items-center p-4'>
                    {recipes.map(item => (
                        <CardRecipe key={item.id} item={item} />
                    ))}
                </div>
            )}
        </section>
    );
};

export default CategoryRecipeList;
