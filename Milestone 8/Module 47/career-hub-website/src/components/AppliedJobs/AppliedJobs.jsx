import { useEffect, useState } from "react";
import bg1 from '../../assets/images/bg1.png';
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/localStorage";
import AppliedJob from "../AppliedJob/AppliedJob";

const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilter = filter => {
        if(filter === "all") {
            setDisplayJobs(appliedJobs);
        } else if(filter === "remote") {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        } else if(filter === "onsite") {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect( () => {
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0) {
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))
            const jobsApplied = [];
            for(const id of storedJobIds) {
                const job = jobs.find(job => job.id === id);
                if(job) {
                    jobsApplied.push(job);
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
            // console.log(jobs, storedJobIds, jobsApplied);
        }
    }, [jobs])
    return (
        <div>
        <div style={{backgroundImage: `url(${bg1})`}} className='text-center text-3xl font-extrabold text-[#1A1919] py-32 bg-no-repeat bg-left-bottom mb-32'>
            <h2>Jobs Applied: {appliedJobs.length}</h2>
        </div>
        <details className="dropdown text-end">
            <summary className="m-1 btn">Filter</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={() => handleJobsFilter("all")}><a>All</a></li>
                <li onClick={() => handleJobsFilter("remote")}><a>Remote</a></li>
                <li onClick={() => handleJobsFilter("onsite")}><a>Onsite</a></li>
            </ul>
        </details>
        <div className="space-y-6">
            {
                displayJobs.map(job => <AppliedJob key={job.id} job={job}/>)
            }
        </div>
        </div>
    );
};

export default AppliedJobs;