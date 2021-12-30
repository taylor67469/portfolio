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
            In my free time, I am either spending time with my girlfriend Daphnee, playing video games, or making music. I have been together with my girlfriend for 7 years as of September 10th 2014. 
            I love spending time with her and playing League of Legends together. 
            Otherwise, I am making music or freestyle rapping.</p>
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