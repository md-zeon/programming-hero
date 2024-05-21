import { useLoaderData } from "react-router-dom";
import Meal from "./Meal";


const CategoryDetails = () => {
    const { meals } = useLoaderData(); 
    return (
        <div>
            <h2>Meals: {meals.length}</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '20px'
            }}>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default CategoryDetails;