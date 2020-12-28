import React,{useEffect,useState} from 'react'
import Header from './Header'
import Footer from './Footer'
import Search from './Search'
import './main.css'
function Container(){
     //https://zubeda-hotel-server.glitch.me/bookings/1
    // https://ontrack-team3.herokuapp.com/students
    //https://progresstracer.glitch.me/students
    // https://ontrack-team3.herokuapp.com/students
    //const [urlMain,setURLMain]=useState('https://ontrack-team3.herokuapp.com/students')
    const [urlSearch,setURLSearch]=useState(null)
   
    //////////function to addChange ApI according to search cretria
    function urlFunc(urlSearch){
        document.getElementById("main").innerHTML=""
        setURLSearch(urlSearch)
        
    }
    
    /////////////////////////this function is used to make refresh data after new entry
    const [addChange,setChange]=useState(null)
    const [load,setLoad]=useState(null);
    function addFreshFunc(addChange){
        alert("thanks.your data is updated now")
        document.getElementById("main").innerHTML=""
        setChange(addChange)
        setLoad('https://ontrack-team3.herokuapp.com/students')
    }
     /////////////////////////this function is used to make refresh data after delete a record
    // const [load,setLoad]=useState(null);
     
   
    
    return(
        <div id="container">
        <Header />
        <hr></hr>
        <Search urlFunc={urlFunc} />
        <hr></hr>
        <Main url='https://ontrack-team3.herokuapp.com/students' cnt='https://ontrack-team3.herokuapp.com/students' urlFunc={urlFunc} addFreshFunc={addFreshFunc} />
        {urlSearch && (<Main url={urlSearch} cnt={urlSearch} urlFunc={urlFunc} addFreshFunc={addFreshFunc} />)}
        {addChange && (<Main url={load} cnt={addChange} urlFunc={urlFunc} addFreshFunc={addFreshFunc}  /> )}
        <hr></hr>
        <Footer />
        </div>
    )
}
/////////////////////////////////////////////component header

/////////////////////////////////////////////component Main
function Main(prop){
    ////following function is used to delete a record
 
    function delFunc(e){
        let id=e.target.parentNode.parentNode.id;
        let del=Math.random(101,200);
        const requestDel = {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            
        };
        var proceed = window.confirm("Are you sure?\nPress Ok to delete the record or press Cancel to finish?");
        if (proceed) {
            fetch(`https://ontrack-team3.herokuapp.com/students/${id}`, requestDel) 
            prop.addFreshFunc(del);
            // prop.urlFunc('https://ontrack-team3.herokuapp.com/students')
            //prop.readdFreshFunc('https://ontrack-team3.herokuapp.com/students') 
            //  prop.urlFunc('https://ontrack-team3.herokuapp.com/students') 
        } 
    }
    ////////////API to extract al  students records on main page load
    const [data,setData]=useState([]);
    useEffect(
        function(){
        const url=prop.url;
       
        fetch(url)
            .then(function(obj){
                return obj.json();
            })
            .then(function(db){
            
                //console.log(db);
                setData(db);
                //console.log(data);
            })
            .then(function(error) {
                console.log(error);
            });
        }
    ,[prop.cnt,prop.url])
////////////////////setAdd method is used to on/off the new entry div
const [add,setAdd]=useState(null);
function addCancelFunc(){
     if(add===null){
        setAdd("add");
        document.getElementById("addNew").textContent="X"
        document.getElementById("addNew").style.backgroundColor="red";
    }
    else{
        setAdd(null)
        document.getElementById("addNew").textContent="AddNew"
        document.getElementById("addNew").style.backgroundColor="green";
    }
}
return(
<main id="main">
    {/* following button is used to block the addNew component */}
    <div id="frmAdd">
        <button type="button" class="btn btn-success" id="addNew" onClick={addCancelFunc}>Add New</button>                      
    </div>
   {/* call AddNew component for new entry*/}
    {add && (<AddNew addCancelFunc={addCancelFunc} addFreshFunc={prop.addFreshFunc}/>)}
    <table class="table table-striped table-bordered" >
    <caption>List of users</caption>
    <thead>
        <tr>
        <th scope="col" style={{fontSize:'1.2rem'}}>#</th>
        <th scope="col" style={{fontSize:'1.2rem'}} >Name</th>
        <th scope="col" style={{fontSize:'1.2rem'}}>Photo</th>
        <th scope="col" style={{fontSize:'1.2rem'}}>Edu Buddy</th>
        <th scope="col" style={{fontSize:'1.2rem'}}>PD Buddy</th>
        <th scope="col" style={{fontSize:'1.2rem'}}>GitHub</th>
        <th scope="col" style={{fontSize:'1.2rem'}}>English Test</th>
        <th scope="col" style={{fontSize:'1.2rem'}}>Language Support</th>
        <th scope="col"></th>
        <th scope="col"></th>
        <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
    {
    
    data.map(function(obj){
        return(<>
            <tr id={obj.id} key={obj.id}>
                <th scope="row" key={obj.id}>{obj.id}</th>
                <td style={{fontSize:'1.2rem'}}>{obj.name}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.photo}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.pdBuddy}</td>
                <td>{obj.eduBuddy}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.gitHub}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.englishTest}</td>
                <td style={{fontSize:'1.2rem'}}>{obj.languageSupport}</td>
                <td>
                    <button style={{fontSize:'1.2rem'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnProfile">Edit</button>
                </td>
                <td id="tdDel">
                    <button  style={{fontSize:'1.2rem',borderColor:'red'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnProfile" onClick={delFunc}>X</button>
                    
                </td>
                <td>
                    <button style={{fontSize:'1.2rem'}} class="btn btn-outline-success my-2 my-sm-0" type="submit" id="btnProfile" ><a href="/#/ViewProfile">Profile</a></button>
                </td>
            </tr>
        </>)
    })
    }
    </tbody>
    </table>
</main>
)
}
/////////////////////////////////////////////////////component addNew
function AddNew(prop){
    const [name,setName]=useState(null)
    const [photo,setPhoto]=useState("yes")
    const [edu,setEdu]=useState(null)
    const [pd,setPD]=useState(null)
    const [gitHub,setGitHub]=useState(null)
    const [english,setEnglish]=useState("Excellent")
    const [languageSupport,setLanuageSupport]=useState("Yes")
    const [location,setLocation]=useState(null);
    const [className,setClassName]=useState(null);
    const addChange=Math.random(100);
     //following method is used to validate forn
    function validate(){
     
        if(name===null){
            alert("Enter the name please")
            return false
        }
        if(className===null){
            alert("Enter class name please")
            return false
        }
        if(location===null){
            alert("Enter location  please")
            return false
        }
        if(edu===null){
            alert("Enter the Education Buddy please")
            return false
        }
        if(pd===null){
            alert("Enter the personal development buddy")
            return false
        }
        if(gitHub===null){
            alert("Enter github id please")
            return false
        }
       
        return true;
    }
    //following method is used to send new entry to server
    const post = () => {
      
       
        if(validate()){
            let student = {
                name: name,
                photo:photo,
                pdBuddy:pd,
                eduBuddy:edu,
                location:location,
                className:className,
                gitHub:gitHub,
                englishTest:english,
                languageSupport:languageSupport
            };
          
            const requestPost = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(student)
            };
            fetch("https://ontrack-team3.herokuapp.com/students", requestPost)
            var proceed = window.confirm("Saved:Press Ok if You like to add more or press Cancel to finish?");
            if (proceed) {
                setName("")
                setEdu("");
                setPD("") ;
                setGitHub(""); 
                setLocation("")
                setClassName("")
                //prop.urlFunc('https://ontrack-team3.herokuapp.com/students') 
                prop.addFreshFunc(addChange)
                //prop.addCancelFunc('https://ontrack-team3.herokuapp.com/students'); 
            } else {
               prop.addCancelFunc('https://ontrack-team3.herokuapp.com/students');
            }
        }
    }
    //following method is used to send msg to component main to hide the this component
   
    return(
        <div id="newEntry">
            <table class="table table-striped table-bordered" >
                <thead>
                    <tr>
                     
                        <th scope="col" style={{fontSize:'1.2rem'}}>Name</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>Photo</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>Class</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>Location</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>Edu Buddy</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>PD Buddy</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>GitHub</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>English Test</th>
                        <th scope="col" style={{fontSize:'1.2rem'}}>Language Support</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                    </thead>  
                    <tbody>
                    <tr>
                        <td style={{fontSize:'1.2rem'}}><input style={{width:'15rem'}} placeholder="Enter Name" type="text" name="txtName" id="txtName" value={name} onChange={function(e){setName(e.target.value)}} /></td>
                        <td style={{fontSize:'1.2rem'}}>
                            <select name="txtPhoto" onChange={function(e){setPhoto(e.target.value)}}>
                                <option style={{fontSize:'1.2rem'}} value="yes">Yes</option>
                                <option style={{fontSize:'1.2rem'}} value="No">No</option>
                            </select>                        
                        </td>
                        <td style={{fontSize:'1.2rem'}}><input style={{width:'10rem'}} placeholder="Enter Location" type="text" name="txtLocation" id="txtLocation" value={location} onChange={function(e){setLocation(e.target.value)}} /></td>
                        <td style={{fontSize:'1.2rem'}}><input style={{width:'10rem'}} placeholder="Enter Class" type="text" name="txtClassName" id="txtClassName" value={className} onChange={function(e){setClassName(e.target.value)}} /></td>

                        <td style={{fontSize:'1.2rem'}}><input style={{width:'10rem'}} type="text" placeholder="Enter Edu Buddy" name="txtEdu" value={edu} onChange={function(e){setEdu(e.target.value)}} /></td>
                        <td><input style={{width:'10rem'}} type="text" name="txtPD" value={pd} placeholder="Enter PD Buddy" onChange={function(e){setPD(e.target.value)}} /></td>
                        <td style={{fontSize:'1.2rem'}}><input type="text" name="txtGitHub" placeholder="Enter GitHub ID" value={gitHub} onChange={function(e){setGitHub(e.target.value) }} /></td>
                        <td style={{fontSize:'1.2rem'}}>
                            <select name="selectEnglishTest" onChange={function(e){setEnglish(e.target.value)}} >
                                <option style={{fontSize:'1.2rem'}} value="Excellent">Excellent</option>
                                <option style={{fontSize:'1.2rem'}} value="Good">Good</option>
                                <option style={{fontSize:'1.2rem'}} value="Poor">Poor</option>
                            </select>
                        </td>
                        <td style={{fontSize:'1.2rem'}}>
                            <select name="selectLanguageSupport" onChange={function(e){setLanuageSupport(e.target.value)}}>
                                <option style={{fontSize:'1.2rem'}} value="Yes">Yes</option>
                                <option style={{fontSize:'1.2rem'}} value="No">No</option>
                            </select>
                        </td>
                        <td>
                            {/* <form method="post" action="https://progresstracker.glitch.me/students" class="form-inline my-2 my-lg-0" name="frmProfile"> */}
                                
                                <button style={{fontSize:'1.2rem'}} class="btn btn-success my-2 my-sm-0" onClick={post} id="btnSave">Save</button>
                            {/* </form> */}
                        </td>
                        
                    </tr>
                    </tbody>
                 
            </table>
           <hr></hr> 
        </div>
    )
}
/////////////////////////////////////////////////////////component footer

export default Container;