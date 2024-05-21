import { useLoaderData } from "react-router-dom";

const RandomMeals = () => {
    const {meals} = useLoaderData();
    return (
        <div>
            {
                meals.map(meal => {
                    return <div key={meal.idMeal}>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                        <h2>Name: {meal.strMeal}</h2>
                        <p>Category: {meal.strCategory}</p>
                        <p>Region: {meal.strArea}</p>
                        <p>Instructions: <small>{meal.strInstructions}</small></p>
                        <p>Tags: {meal.strTags}</p>
                        <a href={meal.strYoutube}>Watch on Youtube</a>
                    </div>
                })
            }
        </div>
    );
};

export default RandomMeals;