import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import DishList from './components/DishList';
import DishDetails from './components/DishDetails';

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  const searchDishes = async (query) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };

  const fetchDishDetails = async (id) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      return data.meals ? data.meals[0] : null;
    } catch (error) {
      console.error('Error fetching dish details:', error);
      return null;
    }
  };

  const handleSearch = async (query) => {
    const results = await searchDishes(query);
    setSearchResults(results);
  };

  const handleDishClick = async (dish) => {
    const details = await fetchDishDetails(dish.idMeal);
    setSelectedDish(details);
  };

  return (
    <div className="container">
      <h1>MealApp</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="row">
        <div className="col-md-6">
          <h2>Search Results</h2>
          <DishList dishes={searchResults} onDishClick={handleDishClick} />
        </div>
        <div className="col-md-6">
          {selectedDish && <DishDetails dish={selectedDish} />}
        </div>
      </div>
    </div>
  );
}

export default App;
