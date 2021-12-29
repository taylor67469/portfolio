import Navbar from '../../navbar/navbar'
import mental from '../../../assets/mentalHealthSS.png'
const Mental=()=>{
    return(
        <div>
        <Navbar/>
        <br/>
        <br/>
        <img src={mental}/>
        <div className='par'>
        <p>A brilliant web application for learning new random facts about mental health.</p>
        <br/>
        <p>This application utilizies the myhealthfinder API  to create random facts about mental health.</p>
        <br/>
        <br/>
        <p>Link: <a href="https://github.com/taylor67469/MentalHealth">Github</a></p>
        <p>Web: <a href="http://mentalhealthfacts.azurewebsites.net/">Web</a></p>
        <p>Stack: .NET, Jquery, C#, External myhealthfinder API</p>
    </div>
        </div>)
}
export default Mental;