import Navbar from '../navbar/navbar'
import '../homepage/homepage.css'
import { Link } from 'react-router-dom';
import Projects from '../projects/projects'
import React from 'react';
const Homepage=()=>{
    return(
        <div>
            <Navbar/>
            <h1>Zachary Taylor</h1>
            <p>
                Entry Level Software Developer (Node | Javascript | C# | ASP.NET)
            </p>
            <br/>
            <h2 className='title'>About me:</h2>
            <br/>
            <p className='box'>Hello! My name is Zachary Taylor. I am 27 years old and a Full Stack Web Developer. 
            In my free time, I am improving my skillset in coding and expanding my knowledge. I love to learn new technologies and implement them in my everyday coding activities. I've
            always been really good with technology ever since I was young. I would help my family with IT, such as removing viruses, taking apart my laptop, fixing it, 
            and putting it back together. I would also fix our internet whenever it went down or was compromised.

            </p>
            <br/>
            <Link to ="/projects"><button className='portfolioB'>Projects</button></Link>
            <br/>
            <h2 className='title'>My Achievements:</h2>
            <br/>
            <p className='box'>
            I recently graduated from Northwestern University with a Full Stack Web Development Certificate.
            I went to DeVry University for about a year and a half for Game and Simulation Programming. 
            <br/>
            <br/>
            I recieved a certificate as a Certified Pharmacy Technician by only studying the book and taking the state examination.
            </p>
        </div>
    )
}
export default Homepage;