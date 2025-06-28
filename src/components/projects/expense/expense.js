import Navbar from '../../navbar/navbar'
import expense from '../../../assets/expenseimg.png'
const Expense=()=>{
    return(
        <div>
        <Navbar/>
        <div className='port-cont'>
        <img src={expense}/>
        <div className='par'>
        <p>A brilliant web application for tracking your expenses.</p>
        <p>This application utilizes Chart.js to show your tracked expenses, as well as, having a working login feature.</p>
        <p>Link: <a href="https://github.com/levickane/expensetracker7000">Github</a></p>
        <p>Web: discontinued</p>
        <p>Stack: Node.js, Express.js, Chart.js, MySQL, Sequelize</p>
    </div>
    </div>
        </div>)
}
export default Expense;