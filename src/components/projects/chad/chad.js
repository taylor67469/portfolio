import Navbar from '../../navbar/navbar'
import chad from '../../../assets/chadchat.png'
const Chad=()=>{
    return(
        <div>
        <Navbar/>
        <br/>
        <br/>
        <img src={chad}/>
        <div className='par'>
        <p>A brilliant web application where you can chat to other like-minded individuals in a chat room and have a disucssion on the forums</p>
        <br/>
        <p>This application utilizies the Socket.IO for the chatroom system.</p>
        <br/>
        <br/>
        <p>Link: <a href="https://github.com/taylor67469/chadChat">Github</a></p>
        <p>Web: <a href="https://chadchat1234.herokuapp.com/">Web</a></p>
        <p>Stack: React.js,
Node.js, Express.js,MongoDB, Socket.IO</p>
    </div>
        </div>)
}
export default Chad;