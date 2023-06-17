import './styles.css';
import { useState, useEffect } from 'react'

const PAGE_SIZE = 6;

function JobPosting({ url, time, by, title }) {

  return (
    <div className= "jb-post">
      <h4>
        {url ? (
          <a
          href={url}
          >{title}</a>
        ): (title)}
      </h4>
      <p className= "jb-post-metadata">
          By {by} {' '} {new Date(time * 1000).toLocaleString()}
      </p>
    </div>
  )
}


export default function App() {
  const [jobIds, setjobIds] = useState(null);
  const [fetchingJobDetails, setFetchingJobDetails] = useState(false);
  const [page, setPage] = useState(0);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetchJobs(page);
  }, [page]);

const fetchJobs = async function(page) {
    const jobPostingsIds = await fetchJobPostings(page);
    // console.log(`jobPostingsIds: ${jobPostingsIds}`);

    setFetchingJobDetails(true);

    fetchJobDetailsForPage(jobPostingsIds);

    setFetchingJobDetails(false);
}


const fetchJobPostings = async function (currPage) {
    const res = await fetch('https://hacker-news.firebaseio.com/v0/jobstories.json');
    
    let job_ids = await res.json();
    // console.log(job_ids);
    setjobIds(job_ids);
    
    const start = currPage * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    
    return job_ids.slice(start, end);
}

const fetchJobDetailsForPage = async function(ids){
  const jobsPerPg = await Promise.all(
    ids.map((jd) => {
      const url = `https://hacker-news.firebaseio.com/v0/item/${jd}.json`;
      // console.log(`id: ${jd}, url: ${url}`);
      return fetch(url)
      .then((res) => 
        res.json()
      )
    })
  );

  // console.log(jobsPerPg);
  setJobs([...jobs, ...jobsPerPg]);
  // console.log(jobs);

}



  return (
      <div className="job-board-container">
      <h3 className="title">Hacker News Job Board</h3>
      {jobIds == null ? (
          <p>Loading job details....</p>
        ) : (
          <div className="jobs" role="list">
          {jobs.map((jb) => {
            return <JobPosting key={jb.id} {...jb}></JobPosting>
          })}
          </div>
        )
      }
      {jobs.length > 0 && page * PAGE_SIZE + PAGE_SIZE < jobIds.length &&
        <button className="load-more" disabled={fetchingJobDetails} onClick={() => {setPage(page+1)}}>
          {fetchingJobDetails
            ? 'Loading...'
            : 'Load more jobs'}
          </button>
      }
      </div>
    );
}
