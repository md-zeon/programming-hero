import { AiOutlineDollar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom";
import MainBtn from "../MainBtn/MainBtn";
import PropTypes from 'prop-types';

const Job = ({ job }) => {
  const {
    id,
    logo,
    salary,
    job_title,
    location,
    job_type,
    remote_or_onsite,
    company_name,
  } = job;
  return (
    <div>
      <div className="card card-compact border p-10">
        <div>
          <img className="ps-5" src={logo} alt="Shoes" />
        </div>
        <div className="card-body">
          <h2 className="card-title">{job_title}</h2>
          <p>{company_name}</p>
          <div>
            <button className="px-5 py-2 border font-extrabold rounded text-[#7e90fe] border-[#7e90fe] mr-4">{remote_or_onsite}</button>
            <button className="px-5 py-2 border font-extrabold rounded text-[#7e90fe] border-[#7e90fe]">{job_type}</button>
          </div>
          <div className="mt-4 flex gap-4">
            <h2 className="flex items-center"><MdLocationOn className="text-2xl mr-2"/>{location}</h2>
            <h2 className="flex items-center"><AiOutlineDollar className="text-2xl mr-2" />{salary}</h2>
          </div>
          <div className="card-actions">
            <Link to={`/job/${id}`}><MainBtn value="View Details"/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
} 

export default Job;
