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
        </div>
    )
}
export default Projects;