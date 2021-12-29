import Navbar from '../../navbar/navbar'
import expense from '../../../assets/expenseimg.png'
const Expense=()=>{
    return(
        <div>
        <Navbar/>
        <br/>
        <br/>
        <img src={expense}/>
        <div className='par'>
        <p>A brilliant web application for tracking your expenses.</p>
        <br/>
        <p>This application utilizies the Washington Train Tracking API to deliver train times to the user in a user-friendly environment. The user can also save their favorite train stops.</p>
        <br/>
        <br/>
        <p>Link: <a href="https://github.com/levickane/expensetracker7000">Github</a></p>
        <p>Web: <a href="https://expense-tracker-7000.herokuapp.com/">Web</a></p>
        <p>Stack: Node.js, Express.js,
Chart.js, MySQL, Sequelize</p>
    </div>
        </div>)
}
export default Expense;