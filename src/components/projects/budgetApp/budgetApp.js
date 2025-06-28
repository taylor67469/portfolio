import Navbar from '../../navbar/navbar'
import budget from '../../../assets/budgeappphoto.png'
const BudgetApp=()=>{
    return(
        <div>
        <Navbar/>
        <div className='port-cont'>
        <img src={budget}/>
        <div className='par'>
        <p>A brilliant web application for tracking your budget.</p>

        <p>This application designed for mobile uses LocalStorage, React-native, and TypeScript to track, save, and reset your budget.</p>

        <p>Link: <a href="https://github.com/taylor67469/budgeApp">Github</a></p>
        <p>Web: discontinued</p>
        <p>Stack: LocalStorage, React-native, TypeScript</p>
    </div>
    </div>
        </div>)
}
export default BudgetApp;