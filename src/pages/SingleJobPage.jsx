import React from "react";
import Wrapper from "../components/Wrapper";
import { useJob } from "../api/apiCall";
import { useParams } from "react-router-dom";

const SingleJobPage = () => {
const {id} = useParams()

    const {data:job,isLoading,error} = useJob(id)

    if(isLoading) return <span>loading...</span>
    if(error) return <span>Error fetching data!</span>
    
    console.log(job);
  return (
    <Wrapper>
        <div className="container my-10">
      {/* left */}
      <div className="flex flex-col md:flex-row gap-10">
        <div className=" basis-3/5">
          <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
            <div className="text-gray-500 mb-4">{job.type}</div>
            <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
            <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
              <p className="text-orange-700">{job.location}</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-indigo-800 text-lg font-bold mb-6">{job.type}</h3>
            <p className="mb-4">{job.description}</p>
            <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
            <p className="mb-4">{job.salary}</p>
          </div>
        </div>

        {/* sidebar */}
        <div className=" basis-2/5">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-6">Company Info</h3>
            <h2 className="text-2xl">{job.company.name}</h2>
            <p className="my-2">{job.company.description}</p>
            <hr className="my-4" />
            <h3 className="text-xl">Contact Email:</h3>
            <p className="my-2 bg-indigo-100 p-2 font-bold">
              {job.company.contactEmail}
            </p>
            <h3 className="text-xl">Contact Phone:</h3>
            <p className="my-2 bg-indigo-100 p-2 font-bold">
             { job.company.contactPhone}
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md mt-6">
            <h3 className="text-xl font-bold mb-6">Manage Job</h3>
            <button className="btn bg-indigo-500 hover:bg-indigo-600 mb-4">
              Edit Job
            </button>
            <button className="btn bg-red-500 hover:bg-red-600">
              Delete Job
            </button>
          </div>
        </div>
      </div>
    </div>
    </Wrapper>
  );
};

export default SingleJobPage;
