import ListItem from "../ListItem/ListItem";
import accounts from "../../assets/icons/accounts.png"
import creative from "../../assets/icons/creative.png"
import chip from "../../assets/icons/chip.png"
import marketing from "../../assets/icons/marketing.png"

const CategoryList = () => {
    return (
        <div className="mt-32">
            <h2 className="text-5xl font-extrabold text-center">Job Category List</h2>
            <p className="text-center mt-4">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                <ListItem image={accounts} title={"Account & Finance"} jobs={300} />
                <ListItem image={creative} title={"Creative Design"} jobs={100} />
                <ListItem image={marketing} title={"Marketing & Sales"} jobs={150} />
                <ListItem image={chip} title={"Engineering Job"} jobs={224} />
            </div>
        </div>
    );
};

export default CategoryList;