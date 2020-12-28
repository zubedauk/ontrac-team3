
import React,{useState} from 'react'
function Search(prop){
    const [searchLocation,setSearchLocation]=useState("");
    const [searchClass,setSearchClass]=useState("");
    const [searchName,setSearchName]=useState("");
    function search(){
        let query;
        if(searchLocation==="locaton"){
            searchLocation("")
        }
         query=`https://ontrack-team3.herokuapp.com/students/search?location=${searchLocation}&className=${searchClass}&term=${searchName}` 
         prop.urlFunc(query);
 
     }
    return(
        <>
        <div  id="search">
                        <li >
                            <a class="nav-link" href="www.google" id="home">Home <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                        <select name="selectLocation" id="selectLocation" onChange={function(e){setSearchLocation(e.target.value)}}>
                            <option value="">Location</option>
                            <option value="London">London</option>
                            <option value="Birmingham">Birmingham</option>
                            <option value="Manchester">Manchester</option>
                        </select>
                        </li>
                        <li class="nav-item">
                        <select name="selectClass" id="selectClass" onChange={function(e){setSearchClass(e.target.value)}}>
                            <option value="">Class</option>
                            <option value="Class1">Class1</option>
                            <option value="Class2">Class2</option>
                            <option value="Class5">Class5</option> 
                        </select>
                        </li>
                        <li>
                            {/* <form class="form-inline my-2 my-lg-0" name="frmSearch"> */}
                                <div style={{display:'flex'}}>

                                    <input onChange={function(e){setSearchName(e.target.value)}} name="txtTerm" id="txtName" style={{fontSize:'1.4rem',width:'10rem'}} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                    <button style={{fontSize:'1.4rem'}} class="btn btn-outline-success my-2 my-sm-0"  id="btnSearch" onClick={search}>Search</button>
                                </div>
                                
                            {/* </form> */}
                        </li>
                </div>
        </>
    )
}
export default Search;