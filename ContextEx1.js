import {useState, createContext, useContext} from 'react';
import ContextEx2 from './ContextEx2';
export const UserContext = createContext();

function ContextEx1() {
    const [user, setUser] = useState("hong");
    const context = {
        user,
        setUser:setUser.bind(this)
    }
    return (
        <UserContext.Provider value={context}>
            <h1>{`Hello ${user}`}</h1>
            <ContextEx2/>
        </UserContext.Provider>
    )
}
export default ContextEx1;