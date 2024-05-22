import { useLoaderData, useParams } from 'react-router-dom';
import bg1 from '../../assets/images/bg1.png';
import MainBtn from '../MainBtn/MainBtn';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { LuCalendarDays } from 'react-icons/lu';
import { CiLocationOn } from 'react-icons/ci';
import { MdOutlineEmail, MdOutlinePhone } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localStorage';
const JobDetails = () => {
    const jobs = useLoaderData();
    const {jobId} = useParams();
    const jobIdInt = parseInt(jobId);
    const job = jobs.find(job => job.id === jobIdInt);
    console.log(job);
    console.log(jobId, jobs);
    const {
        educational_requirements,
        experiences,
        job_responsibility,
        job_description,
        salary,
        job_title,
        contact_information,
    } = job;
    const {
        phone,
        email,
        address,
    } = contact_information;

    const handleApplyJob = () => {
        saveJobApplication(jobIdInt);
        toast("You Have Applied Successfully")
    }

    return (
        <div>
            <div style={{backgroundImage: `url(${bg1})`}} className='text-center text-3xl font-extrabold text-[#1A1919] py-32 bg-no-repeat bg-left-bottom mb-32'>
                <h2>Job Details of: {jobId}</h2>
            </div>
            <div className='grid md:grid-cols-5 gap-4'>
                <div className="md:col-span-3 space-y-6">
                    <p><span className="font-extrabold">Job Description:</span>{job_description}</p>
                    <p><span className="font-extrabold">Job Responsibility:</span>{job_responsibility}</p>
                    <p>
                        <span className="font-extrabold">Educational Requirements:</span> <br />
                        {educational_requirements}
                    </p>
                    <p>
                        <span className="font-extrabold">Experiences:</span> <br />
                        {experiences}
                    </p>
                </div>
                <div className="md:col-span-2 space-y-6 p-8 bg-gradient-to-r from-[#7E90FE]/10 to-[#9873FF]/10">
                    <h2 className="text-xl font-extrabold text-[#1A1919] border-b-2 pb-6">Job Details</h2>
                    <div className="text-xl">
                        <div className="flex gap-3 ">
                            <AiOutlineDollarCircle className='text-gradient' /><p><span className="font-extrabold">Salary :</span> {salary} (Per Month)</p>
                        </div>
                        <div className="flex gap-3 ">
                        <LuCalendarDays /><p><span className="font-extrabold">Job Title :</span> {job_title}</p>
                        </div>
                    </div>
                    <h2 className="text-xl font-extrabold text-[#1A1919] border-b-2 pb-6">Contact Information</h2>
                    <hr />
                    
                    <div className="text-xl">
                        <div className="flex gap-3 ">
                            <MdOutlinePhone className='text-2xl' /><p><span className="font-extrabold">Phone :</span> {phone} (Per Month)</p>
                        </div>
                        <div className="flex gap-3 ">
                            <MdOutlineEmail /><p><span className="font-extrabold">Email :</span> {email}</p>
                        </div>
                        <div className="flex gap-3 ">
                            <CiLocationOn className='text-3xl' /><p><span className="font-extrabold">Address :</span> {address}</p>
                        </div>
                    </div>
                    <MainBtn handleBtn={handleApplyJob} className="w-full" value='Apply Now'/>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default JobDetails;