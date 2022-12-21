import React, { useState, useEffect } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa'
const url = 'https://course-api.com/react-tabs-project';

function App() {
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const [value, setValue] = useState(0);

  const fetchJobs = async () => {
    const response = await fetch(url);
    const newJobs = await response.json();
    setJobs(newJobs);
    setLoading(false);
  }
  
  useEffect(()=>{
    fetchJobs();
  }, [])

  if(loading) {
    return (
      <main className='bg-[#f1f5f8] flex flex-col justify-center items-center min-h-screen px-20'>
        <h2 className='text-4xl text-[#102a42] mb-3 tracking-wide font-bold'>Loading...</h2>
      </main>
    )
  }

  const { title, dates, duties, company } = jobs[value];
  return (
    <main className='bg-[#f1f5f8] flex flex-col items-center min-h-screen pt-20'>
      <div className="title mb-16">
        <h2 className='text-4xl text-[#102a42] mb-3 tracking-wide font-bold'>Exprience</h2>
        <div className="underline w-20 h-1 bg-[#2caeba] mx-auto"></div>
      </div>
      <div className="job-container w-[90vw] grid grid-cols-[200px_1fr] gap-x-16 max-w-6xl mx-auto">
        <div className="btn-container flex flex-col justify-start mb-16">
          {jobs.map((job, index) => {
            console.log("index: ", index)
            console.log("value: ", value)
            return <button key={job.id} onClick={() => setValue(index)} className={`mb-4 uppercase text-xl text-[#102a42] border-l-2-transparent hover:text-[#2caeba] hover:border-[#2caeba] ${value === index && 'border-l-2 text-[#2caeba] border-[#2caeba]'}`}>{job.company}</button>
          })}

        </div>
        <div className="job-info">
          <h3 className='text-3xl tracking-wide text-[#102a42] capitalize mb-3'>{title}</h3>
          <h4 className='text-[#617d98] uppercase bg-[#dae2ec] px-3	py-1.5 inline-block rounded	font-bold mb-3'>{company}</h4>
          <p className='mb-5 text-[#617d98] capitalize tracking-wide'>{dates}</p>
          <div className="duties">
            {duties.map((duty, index)=> { 
              return (
                <p key={index} className='text-[#324d67] mb-5'>
                  <FaAngleDoubleRight className='text-[#2caeba] inline-block mr-8'/>
                  {duty}
                </p>
              )
            })}
          </div>
        </div>
      </div>
      <button className='uppercase text-[#bff8fd] bg-[#2caeba] w-[12rem] py-1.5 px-3 rounded font-bold tracking-wide mt-6 mx-auto'>More Info</button>
    </main>
  );
}

export default App;
