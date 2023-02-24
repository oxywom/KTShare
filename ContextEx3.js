import {useState, useContext} from 'react';
import { UserContext } from './ContextEx1';

function ContextEx3() {
    const [myuser, setMyuser] = useState('');
    const context = useContext(UserContext);
    return(
        <>
        <h2>{`Hello ${context.user} again!`}</h2>
        <input type='text' value={myuser} onChange={(e)=>setMyuser(e.target.value)}/>
        <button onClick={()=>{context.setUser(myuser)}}>변경</button>
        </>
    )
}
export default ContextEx3;