import { useLoaderData } from "react-router-dom";
import Category from "./Category";

const Categories = () => {
    const {categories} = useLoaderData();
    const categoryStyle = {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '20px'
    }

    return (
        <div>
            <h3>Meal Catagories: {categories.length}</h3>
            <div style={categoryStyle}>
                {
                    categories.map((category) => <Category key={category.idCategory} category={category} />)
                }
            </div>
        </div>
    );
};

export default Categories;