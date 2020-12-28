import React from 'react'
import Main from '../component/main.jsx'
import ViewProfile from '../component/ViewProfile'
import StudentProfile from '../component/StudentProfile'
import PDtracker from '../component/PDtracker'
import { Route } from 'react-router-dom'
//PDtracker
function DashBoard(){
    return(
        <>
     {/* <StudentProfile /> 
    <ViewProfile />
    <Main />
    <PDtracker /> */}
    <Route exact path="/" component={Main}/>
    <Route exact path="/PDtracker" component={PDtracker}/>
    <Route exact path="/ViewProfile" component={ViewProfile}/>
    <Route exact path="/StudentProfile" component={StudentProfile}/>
    </>
    )
}
export default DashBoard;