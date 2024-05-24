import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredDonations } from "../../utility/localStorage";
import Donation from "../Donation/Donation";

const Donations = () => {
    const [gotDonations, setGotDonations] = useState([]);
    const [showTotal, setShowTotal] = useState(4);
    const donations = useLoaderData();
    useEffect(() => {
        const storedDonations = getStoredDonations();
        if(donations.length > 0) {
            const donationsGot = donations.filter(donation => storedDonations.includes(donation.id))
            setGotDonations(donationsGot);
        }
    },[donations]);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                    gotDonations.slice(0, showTotal).map(donation => <Donation key={donation.id} donation={donation} />)
                }
            </div>
            <div className={`${gotDonations.length < 4 ? 'hidden' : 'text-center'}`}>
                <button onClick={() => setShowTotal(gotDonations.length)} className={`${showTotal === gotDonations.length ? 'hidden' : 'mt-10 btn bg-[#009444] hover:bg-[#009444] text-white'}`}>See All</button>
            </div>
        </div>
    );
};

export default Donations;