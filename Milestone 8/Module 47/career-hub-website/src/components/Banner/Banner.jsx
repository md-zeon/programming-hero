import MainBtn from "../MainBtn/MainBtn";
import user from "../../assets/images/user.png";


const Banner = () => {
    return (
        <div className="h-screen flex flex-col-reverse md:flex-row items-center justify-between">
            <div className="flex-1 space-y-6">
                <h1 className="text-7xl font-extrabold">
                One Step <br />
                Closer To Your <br />
                <span className="text-gradient">Dream Job</span>
                </h1>
                <p className="text-lg font-medium text-[#757575]">
                Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                </p>
                <MainBtn value="Get Started"/>
            </div>
            <div className="flex-1 bg-cover bg-center">
                <img src={user} alt="user"/>
            </div>
        </div>
    );
};

export default Banner;