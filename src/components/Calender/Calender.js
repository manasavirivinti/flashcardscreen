import axios from "axios"; 
import React,{useState,useEffect} from "react";
import "./Calender.css"


function Calender() {
    let [cards,setCards]=useState([])

    let [err,setErr]=useState("")
    useEffect(()=>{
        //fecth cards
        axios.get("http://localhost:4000/cards")
        .then(response=>{
            if(response.status===200){
            setCards(response.data)
            }
        })
        .catch(err=>{
            if(err.response){
                setErr(err.message)
            }
            else if(err.request){
                setErr(err.message)
            }
            else{
                setErr(err.message)
            }
        })
    } ,[])
    return (
        <div class="Cards">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    cards.map((userObj)=><div className='col'>
                        <div className="card">
                            <div className="card-body">
                                <p className="display-3 name">{userObj.Question}</p>
                                <p className="lead fs-4">{userObj.Answer}</p>
                                
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
}


export default Calender;