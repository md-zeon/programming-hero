import { MdLocationOn } from "react-icons/md";
import MainBtn from "../MainBtn/MainBtn";
import { AiOutlineDollar } from "react-icons/ai";
import PropTypes from 'prop-types';

function AppliedJob({job}) {
const {
        logo,
        salary,
        job_title,
        location,
        job_type,
        remote_or_onsite,
        company_name,
    } = job;
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center md:justify-between justify-center p-8 border rounded-lg">
        <img className="px-12 py-24 bg-[#757575]/20" src={logo} alt={company_name} />
        <div className="text-start space-y-3">
            <h2 className="font-extrabold text-2xl">{job_title}</h2>
            <p className="font-semibold text-2xl">{company_name}</p>
            <div className="text-center md:text-start">
                <button className="px-5 py-2 border font-extrabold rounded text-[#7e90fe] border-[#7e90fe] mr-4">{remote_or_onsite}</button>
                <button className="px-5 py-2 border font-extrabold rounded text-[#7e90fe] border-[#7e90fe]">{job_type}</button>
            </div>
            <div className="mt-4 flex gap-4">
                <h2 className="flex items-center"><MdLocationOn className="text-2xl mr-2"/>{location}</h2>
                <h2 className="flex items-center"><AiOutlineDollar className="text-2xl mr-2" />{salary}</h2>
            </div>
        </div>
        <MainBtn value="View Details"/>
    </div>
  )
}

AppliedJob.propTypes = {
    job: PropTypes.object,
}

export default AppliedJob;