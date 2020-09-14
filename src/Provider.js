import React, {useState} from "react";

import PackageContext from "./Context";//here we can use any name to call bcz we are using export DEFAULT in the context.js file

const Provider = props => {
    const [mission, setMission] = useState({
        mname : "Goto Russia",
        agent : "007",
        accept : 'Not Accepted'
    })
    return(
        <PackageContext.Provider
        value = {{
            data : mission,
            missionStatus: () => {
                setMission({...mission, accept:"ACCEPTED"});
            }
        }}>
            {props.children}
        </PackageContext.Provider>
    )
}
export default Provider;