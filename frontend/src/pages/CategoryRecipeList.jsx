import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CardRecipe from '../components/CardRecipe';
import { useNavigate } from 'react-router-dom';

const CategoryRecipeList = ({id}) => {

    const navigate = useNavigate();

    useEffect(() => {
        if (!id) {
            navigate('/Login');
        }
    }, [id, navigate]);


    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const queryParams = new URLSearchParams(window.location.search);
    const category = queryParams.get('category');

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get(`https://task-9-online-recipe-2.onrender.com/recipes?category=${category}`);
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
