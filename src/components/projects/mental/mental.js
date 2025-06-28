import Navbar from '../../navbar/navbar'
import mental from '../../../assets/mentalHealthSS.png'
const Mental=()=>{
    return(
        <div>
        <Navbar/>
        <div className='port-cont'>
        <img src={mental}/>
        <div className='par'>
        <p>A brilliant web application for learning new random facts about mental health.</p>

        <p>This application utilizies the myhealthfinder API  to create random facts about mental health.</p>

        <p>Link: <a href="https://github.com/taylor67469/MentalHealth">Github</a></p>
        <p>Web: discontinued</p>
        <p>Stack: .NET, Jquery, C#, External myhealthfinder API</p>
    </div>
    </div>
        </div>)
}
export default Mental;