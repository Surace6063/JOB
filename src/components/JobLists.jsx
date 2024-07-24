import React from 'react'
import JobCard from './JobCard'
import { useJobs } from '../api/apiCall'


const JobLists = ({type,isHome}) => {

    const {data:jobs,isLoading,error} = useJobs(type)

    if(isLoading) return <span>loading...</span>
    if(error) return <span>Error fetching data!</span>

    const filterdData = isHome ? jobs.slice(0,3) : jobs

  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {
           filterdData.map(job => (
            <JobCard key={job.id} job={job} />
           ))
        }
    </div>
  )
}

export default JobLists