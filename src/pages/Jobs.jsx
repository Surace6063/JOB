import React, { useState } from 'react'
import Wrapper from '../components/Wrapper'
import JobLists from '../components/JobLists'

const Jobs = () => {
    const [type,setType] = useState('')
    console.log(type);
  return (
    <Wrapper>
        <div className='py-10 border-b mb-3'>
            <label htmlFor="filter">Filter By Type</label>
            <select name="type" id="filter" className='w-[200px]' value={type} 
             onChange={e => setType(e.target.value)}
            >
                <option value="">All Types</option>
                <option value="Full-Time">Full Time</option>
                <option value="Part-Time">Part Time</option>
                <option value="Contract">Contract</option>
            </select>
        </div>

        <JobLists type={type} />
    </Wrapper>
  )
}

export default Jobs