import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";


const Home = () => {

    const navigation = useNavigation();
    const location = useLocation();
    console.log(location)
    return (
        <div>
            <Header />
            <h2>This is the Home Component</h2>
            {
                navigation.state === "loading" ?
                <p>Loading...</p> : 
                <Outlet></Outlet>
            }
            <Footer />
        </div>
    );
};

export default Home;