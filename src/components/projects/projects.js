import Navbar from '../navbar/navbar'
import blueline from '../../assets/Screenshot (21).png'
import chadchat from "../../assets/chadchat.png"
import expense from "../../assets/expenseimg.png"
import mental from "../../assets/mentalHealthSS.png"
import budgApp from "../../assets/budgeappphoto.png"
import '../projects/projects.css'
const Projects=()=>{
    return(
    <div>
        <Navbar/>
        <h3>My Projects</h3>
        <br/>
        <br/>
        <h3>Javascript/React Projects</h3>
        <div className='projC'>
        <a href='#/projects/blue'><div className='blue'>
        <img src={blueline}/>
        <p>This project tracks the Washington Blue Line Train.</p>
        </div></a>
        <a href='#/projects/chad'><div className='chad'>
        <img src={chadchat}/>
        <p>This project allows users to chat and message each other and make forum posts.</p>
        </div></a>
        <a href='#/projects/expense'><div className='expense'>
        <img src={expense}/>
        <p>This project allows you to track your expenses</p>
        </div></a>
        <a href='#/projects/budgetApp'><div className='budget'>
        <img src={budgApp}/>
        <p>This project allows you to track your budget</p>
        </div></a>
        <br/>
        <br/>
        <h3>ASP.NET/C# Projects</h3>
        <a href='#/projects/mental'><div className='mental'>
        <img src={mental}/>
        <p>This project provides you with random facts about mental health.</p>
        </div></a>
        </div>
    </div>
    )
}
export default Projects;