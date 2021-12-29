import bluepic from '../../../assets/Screenshot (21).png'
import Navbar from '../../navbar/navbar'
const Blue=()=>{
    return(
    <div>
    <Navbar/>
    <br/>
    <br/>
    <img src={bluepic}/>
    <div className='par'>
    <p>A brilliant web application for tracking the Washington Blue Line.</p>
    <br/>
    <p>This application utilizies the Washington Train Tracking API to deliver train times to the user in a user-friendly environment. The user can also save their favorite train stops.</p>
    <br/>
    <br/>
    <p>Link: <a href="https://github.com/haydenabeck/Project-1-App">Github</a></p>
    <p>Web: <a href="https://haydenabeck.github.io/Project-1-App/">Web</a></p>
    <p>Stack: Javascript, HTML5, CSS,
RESTapi-Washington state's Blue Line Train</p>
</div>
    </div>)
}
export default Blue;