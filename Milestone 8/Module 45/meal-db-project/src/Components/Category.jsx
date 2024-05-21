import { useNavigate } from "react-router-dom";


const Category = ({category}) => {
    const { idCategory, strCategory, strCategoryThumb, strCategoryDescription } = category;
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate(`/categories/${strCategory}`);
    }

    return (
        <div>
            <img src={strCategoryThumb} alt={strCategory} />
            <h3>Category Id: {idCategory}</h3>
            <h4>Category Name: {strCategory}</h4>
            <p><small>{strCategoryDescription}</small></p>
            <button onClick={handleNavigate}>View {strCategory} Meals</button>
        </div>
    );
};

export default Category;