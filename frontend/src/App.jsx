import { useState,useEffect } from 'react'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Navbar from './components/NavBar'
import Login from './pages/Login';
import RegisterPage from './pages/RegisterPage';
import Home from './pages/Home';
import NoPage from './pages/NoPage';
import Layout from './pages/Layout';
import Footer from './components/Footer';
import RecipeList from './pages/RecipeList';
import AddNewRecipe from './pages/AddNewRecipe';
import Privacy from './pages/Privacy';
import ReadMore from './pages/ReadMore';
import axios from 'axios';
import CategoryRecipeList from './pages/CategoryRecipeList';



function App() {
  const [id, setId] = useState(null); 

  const handleLogin = (id) => {
    setId(id);
  };

  const handleLogout = () => {
    setId(null); 
  };

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
      <BrowserRouter>
   <Navbar id={id} onLogout={handleLogout}/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/Login" element={<Login onLogin={handleLogin}/>} />
          <Route path="RecipeList"  >
            <Route index element={<RecipeList id={id} />}/>
            <Route path=":id" element={<ReadMore  data={recipes}/>}/>
          </Route>
          <Route path="/CategoryRecipeList" element={<CategoryRecipeList id={id} />} />
          <Route path="/AddNew" element={<AddNewRecipe id={id} onLogout={handleLogout} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      <Footer className='bottom-0'/>
    </BrowserRouter>
    </>
  )
}

export default App
