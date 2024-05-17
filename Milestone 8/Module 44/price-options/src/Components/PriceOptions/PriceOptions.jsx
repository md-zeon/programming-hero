import { useEffect, useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const [priceOptions, setPriceOptions] = useState([]);
    useEffect(() => {
        fetch('priceOptions.json')
        .then(res => res.json())
        .then(data => setPriceOptions(data));
    }, []);

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option} />)
            }
            </div>
        </div>
    );
};

export default PriceOptions;