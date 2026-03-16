import Card from "./components/Card";
function App() {
  const jobs = [
    {
      logo: "https://yt3.googleusercontent.com/iBn9KeDnKNffvLlHQXPjl8VNkhuMp8N7FPxf6n6dwI85cWH6SE4DsuDLchoQNJNb5KB9oIlyzw=s900-c-k-c0x00ffffff-no-rj",
      companyName: "Meta",
      position: "Frontend Engineer",
      jobType: "Full Time",
      jobPostLevel: "Senior",
      pay: "$120/hr",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHWXIPNdXbKSE0eC4wiiIMmO7aTUjuws_4hw&s",
      companyName: "Apple",
      position: "iOS Developer",
      jobType: "Full Time",
      jobPostLevel: "Mid Level",
      pay: "$110/hr",
    },
    {
      logo: "https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg",
      companyName: "Amazon",
      position: "Backend Developer",
      jobType: "Full Time",
      jobPostLevel: "Junior",
      pay: "$95/hr",
    },
    {
      logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
      companyName: "Netflix",
      position: "Full Stack Engineer",
      jobType: "Full Time",
      jobPostLevel: "Senior",
      pay: "$130/hr",
    },
    {
      logo: "https://thumbs.dreamstime.com/b/google-logo-vector-format-white-background-illustration-407571048.jpg",
      companyName: "Google",
      position: "Software Engineer",
      jobType: "Full Time",
      jobPostLevel: "Senior",
      pay: "$140/hr",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiQXGMUd-boRykgZmJXW-MG1JD2x8GHwIyw&s",
      companyName: "Microsoft",
      position: "Cloud Engineer",
      jobType: "Full Time",
      jobPostLevel: "Mid Level",
      pay: "$115/hr",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0sYXeIVDVKMwpoYJh-dtKXdnylp4I1Tb7Jw&s",
      companyName: "Tesla",
      position: "Frontend Developer",
      jobType: "Part Time",
      jobPostLevel: "Junior",
      pay: "$85/hr",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUu61jNXFi1Sm_TjKJzX4SMZ_Ivn4b2WrBxw&s",
      companyName: "NVIDIA",
      position: "AI Engineer",
      jobType: "Full Time",
      jobPostLevel: "Senior",
      pay: "$150/hr",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrwQfjxYHgFGWPe6kpIwq3xWtlcSrBgjqfbA&s",
      companyName: "Adobe",
      position: "React Developer",
      jobType: "Full Time",
      jobPostLevel: "Mid Level",
      pay: "$105/hr",
    },
    {
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCGQHwyoYbOZNE0GLZaUOcTpsd0Zi_XnGcuA&s",
      companyName: "Salesforce",
      position: "Platform Engineer",
      jobType: "Full Time",
      jobPostLevel: "Senior",
      pay: "$125/hr",
    },
  ];

  return (
    <>
      <div className="bg-full">
        {jobs.map((elem, idx) => {
          return (
            <div key={idx}>
              <Card
                company={elem.companyName}
                logo={elem.logo}
                position={elem.position}
                jobType={elem.jobType}
                jobPostLevel={elem.jobPostLevel}
                pay={elem.pay}
              />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
