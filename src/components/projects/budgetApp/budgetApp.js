import Navbar from '../../navbar/navbar'
import budget from '../../../assets/budgeappphoto.png'
const BudgetApp=()=>{
    return(
        <div>
        <Navbar/>
        <br/>
        <br/>
        <img src={budget}/>
        <div className='par'>
        <p>A brilliant web application for tracking your budget.</p>
        <br/>
        <p>This application designed for mobile uses LocalStorage, React-native, and TypeScript to track, save, and reset your budget.</p>
        <br/>
        <br/>
        <p>Link: <a href="https://github.com/taylor67469/budgeApp">Github</a></p>
        <p>Web: <a href="https://budgeeapp.herokuapp.com/">Web</a></p>
        <p>Stack: LocalStorage, React-native, TypeScript</p>
    </div>
        </div>)
}
export default BudgetApp;