import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import JobCard from './JobCard'

const JobLists = () => {

    const {data:jobs,isLoading,error} = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
          try {
            const response = await axios.get("http://localhost:4001/jobs")
            return response.data
          } catch (error) {
            console.log(error);
          }
        }
    })

    if(isLoading) return <span>loading...</span>
    if(error) return <span>Error fetching data!</span>


  return (
    <div className='grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3'>
        {
           jobs.map(job => (
            <JobCard key={job.id} job={job} />
           ))
        }
    </div>
  )
}

export default JobLists