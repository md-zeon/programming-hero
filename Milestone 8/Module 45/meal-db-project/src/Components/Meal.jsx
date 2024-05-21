import { Link } from "react-router-dom";

const Meal = ({meal}) => {
    const {strMeal, strMealThumb, idMeal} = meal;
    return (
        <div>
            <img style={{width: 'auto', height: '400px'}} src={strMealThumb} alt={idMeal} />
            <h2>Name: {strMeal}</h2>
            <Link to={-1}><button>Go Back</button></Link>
        </div>
    );
};

export default Meal;