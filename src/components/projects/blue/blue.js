import bluepic from '../../../assets/Screenshot (21).png'
import Navbar from '../../navbar/navbar'
const Blue=()=>{
    return(
    <div >
    <Navbar/>
    <div className='port-cont'>
    <img src={bluepic}/>
    <div className='par'>
    <p>A brilliant web application for tracking the Washington Blue Line.</p>

    <p>This application utilizies the Washington Train Tracking API to deliver train times to the user in a user-friendly environment. The user can also save their favorite train stops.</p>

    <p>Link: <a href="https://github.com/haydenabeck/Project-1-App">Github</a></p>
    <p>Web: <a href="https://haydenabeck.github.io/Project-1-App/">Web</a></p>
    <p>Stack: Javascript, HTML5, CSS,
RESTAPI-Washington state's Blue Line Train</p>
</div>
</div>
    </div>)
}
export default Blue;