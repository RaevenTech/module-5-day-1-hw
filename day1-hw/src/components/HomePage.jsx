import React from 'react'
import {useState, useEffect } from "react"
import NavBar from './header/NavBar';




function HomePage() {
    const [jobs, setJobSearch] = useState([]);

    const fetchJobsData = async () => {
        
        const  resp = await fetch("https://strive-jobs-api.herokuapp.com/jobs?search=developer&limit=10")
        const data = await resp.json()
        setJobSearch(data.data)
        console.log("Successful",
        data)
    }

    useEffect(() => {
        fetchJobsData()
    } , [])

  return (
      <>
    <NavBar />
    <div>
       
            <ul>
                {jobs.map(job => (
            <li key={job._id}>{job.company_name}</li>
                ))}
            </ul>
        
    </div>
  </>
  )
}

export default HomePage