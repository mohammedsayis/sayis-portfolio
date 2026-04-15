import React from 'react'
import './Projects.css'
import bloodBank from '../../Assets/projects/BloodBank.png'
import emp from '../../Assets/projects/EmployeeManagement.png'
import restuarent from '../../Assets/projects/restuarentApp.png'
import netflix from '../../Assets/projects/netflix.png'


function Projects() {

  const handleClick=(link)=>{
    console.log(link);
    window.open(link, "_blank");
    
  }

  const projects = [
    { id: 1, code : 'https://github.com/mohammedsayis/bloodBank' ,title: "Blood Donation Management System", img: bloodBank, desc: "MongoDB,Express.js, React.js, Node.js, JWT Authentication Developed a full-stack blood donation management application using the MERN stack.Implemented role-based access for Donors and Volunteers with separate form submissions.Built a secure admin dashboard to manage and view donor and volunteer data.Integrated JWT-based authentication for secure admin login functionality" },
    { id: 2, code :"https://github.com/mohammedsayis/EmployeeManagement"  ,title: "Employee Management System", desc: "Developed a dynamic employee management application using React.js .Implemented core CRUD functionalities including adding, editing, and deleting employees", img: emp },
    { id: 3, code :'https://github.com/mohammedsayis/Restuarent_App' ,title: "Restuarent Menu Application", desc: "Developed a dynamic restaurant menu application using React.js", img: restuarent },
    { id: 4, code:'https://github.com/mohammedsayis/Netflix_app' ,title: "Netflix Cone Application", desc: "Developed a Netflix-inspired web application using React.js .Integrated TMDb API to fetch real-time movie and TV show data .  ", img: netflix }
  ];

  return (

    <div id='projects' >
      <div className='title'>
        <h1 className='projectTitle'>Projects</h1>
      </div>
      <div className="container" >


        {
          projects.map((item, key) => (

            <div className="card" key={item.id}>
              <img src={item.img} alt={item.img} />


              <div className="card-body">
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <button onClick={()=>handleClick(item.code)} className="custom-btn">View code </button>
              </div>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Projects 