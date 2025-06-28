import Navbar from '../navbar/navbar'
import '../homepage/homepage.css'
import { Link } from 'react-router-dom';
import Projects from '../projects/projects'
import React from 'react';
import blueline from '../../assets/Screenshot (21).png'
import chadchat from "../../assets/chadchat.png"
import expense from "../../assets/expenseimg.png"
import mental from "../../assets/mentalHealthSS.png"
import budgApp from "../../assets/budgeappphoto.png"
const Homepage=()=>{
    return(
        <div>
            <Navbar/>
            <div className="port-cont">
            <h1 className="port-name">Zachary Taylor</h1>
            
               <p className='box'> Mid-level Web Developer 3+ years of professional experience (Node|ReactJs|Git|VueJs|JavaScript|jQuery|PHP|MySQL|C#|ASP.net|AS400)</p>
            
            <h2 className='title'>About me:</h2>
            
            <p className='box'>Full-Stack Web Developer with 3.5+ years of professional experience building responsive, scalable, and user-focused applications across front-end and back-end environments. I specialize in JavaScript, React, PHP, HTML5, CSS3, and Node.js, and have practical experience with C# and ASP.NET, enabling me to develop full-featured web solutions from API to UI.
            </p>
            <p className='box'>I'm passionate about writing clean, maintainable code and delivering high-impact features that solve real business problems. Whether working independently or as part of a remote Agile team, I bring strong problem-solving skills, fast learning, and a drive to continually expand my tech stack.</p>
            <p className='box'>Currently focused on remote opportunities where I can contribute to innovative projects, collaborate with forward-thinking developers, and continue growing as a full-stack engineer.</p>
            <p className='box'>When I am not coding, I like to spend time with family and 3 dogs. I am very personable person and I enjoy working as a team.</p>
            <h2 className='title'>Projects:</h2>
            <div className='project-cont'>

        <a href='#/projects/blue'><div className=''>
        <img className="proj-img" src={blueline}/>
        <p className="project-desc">Tracks the Washington Blue Line Train.</p>
        </div></a>
        <a href='#/projects/chad'><div className=''>
        <img className="proj-img" src={chadchat}/>
        <p className="project-desc">Chadchat allows users to chat and message each other and make forum posts, but was discontinued</p>
        </div></a>
        <a href='#/projects/expense'><div className=''>
        <img className="proj-img" src={expense}/>
        <p className="project-desc">Expense Tracker allows you to track your expenses, but was discontinued.</p>
        </div></a>
        <a href='#/projects/budgetApp'><div className=''>
        <img className="proj-img" src={budgApp}/>
        <p className="project-desc">Budget Tracker allows you to track your budget, but was discontinued.</p>
        </div></a>
        <a href='#/projects/mental'><div className=''>
        <img className="proj-img" src={mental}/>
        <p className="project-desc">Mental Health Facts provides you with random facts about mental health, but was discontinued.</p>
        </div></a>
</div>
            <h2 className='title'>My Achievements:</h2>
            <ul className='box'>
            <li>Transformed legacy codebase into a modern, scalable architecture, significantly improving system performance and maintainability.</li>
            <li>Expanded a basic quoting tool into a comprehensive enterprise infrastructure, enhancing business capabilities and supporting company-wide growth.</li>
            <li>Earned Certified Pharmacy Technician credential by independently mastering the material and passing the state exam on the first attempt, demonstrating strong self-discipline and initiative.</li>
            </ul>
            </div>
        </div>
    )
}
export default Homepage;