import { useEffect, useState } from "react";
import Job from "../Job/Job";
import MainBtn from "../MainBtn/MainBtn";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);

    // this is not the best way to show all data

    const [dataLength, setDataLength] = useState(4);

    useEffect( () => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => setJobs(data));
    }, [])

    return (
        <div className="mt-32">
            <div className="text-center">
                <h2 className="text-5xl mb-4 font-extrabold">Featured Jobs</h2>
                <p className="font-medium">Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 mb-8">
                {
                    jobs.slice(0, dataLength).map(job => <Job  key={job.id} job={job}/>)
                }
            </div>
            <div className={dataLength === jobs.length ? 'hidden' : 'text-center'}>
                <MainBtn className="" value="Show More" handleBtn={() => setDataLength(jobs.length)}/>
            </div>
        </div>
    );
};

export default FeaturedJobs;