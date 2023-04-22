import React,{ useState} from "react";
import "./Widgets.css";
import {useForm } from "react-hook-form";
import axios from "axios";
import {useNavigate} from 'react-router-dom'



function Widgets() {
    let navigate=useNavigate();
    let {
        register,
        handleSubmit,
        formState :{ errors },
    } = useForm();

    let [err,setErr]=useState("")

   let addNewCard=(newCard)=>{
    //console.log(newCard)
    //save to json server
    axios.post("http://localhost:4000/cards",newCard)
    .then(response=>{
        if(response.status===201){
            setErr("")
            navigate("/Calender")            
        }
    })
    .catch(err=>{
        //console.log("err is:",err)
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


   };
    return (
        <div className="add-card">
            {err.length!==0 && <p className="display-3 fw-bold text-center text-danger">err</p>}
           
        <div className="row">
            <div className="col-11.col-sm-8.col-md-6 mx-auto l1">
                <form onSubmit={handleSubmit(addNewCard)}>
                    {/*question*/}
                    <div className="mb-3 text-center display-5">
                        <label htmlFor="name">Question</label>
                        <input type="text"
                        id="Question"
                        className="form-control"
                        {...register("Question",{required:true})} 
                        />
                                               
                    </div>
                    {/*Anwser*/}
                    <div className="mb-3 text-center display-5">
                        <label htmlFor="name">Answer</label>
                        <input type="text"
                        id="Answer"
                        className="form-control"
                        {...register("Answer",{required:true})} 
                        />
                    </div>
                    <button type="submit" className="btn btn-success add-card-btn">Create New Card</button>
                </form>
            </div>
        </div>
    </div>

    );
    
}


export default Widgets;