
import { useMemo } from "react";
import "./enterteam.css"
import { useState } from "react";


const EnterTeam=({id})=>{
    const [checked,setChecked]=useState(false)
    const onChange=()=>{
        let team=localStorage.getItem("teamkeys");
        if (team===null){
            team=[]
        } else {
            team=JSON.parse(team)
        } 
        if(team.indexOf(id,0)>-1){
           team.splice(team.indexOf(id,0), 1)

        } else {team.push(id)}
        localStorage.setItem("teamkeys",JSON.stringify(team))
        setChecked(!checked)
    }
 const memo=useMemo(()=>{
  
    let team=localStorage.getItem("teamkeys");
    if (team===null){
        team=[]
    } else {
        team=JSON.parse(team)
    } 
    let checked=false;
    if(team.indexOf(id,0)>-1){
        checked=true;

    } 
    return checked
}, [checked])
    return(
        <div className="myteam" onClick={onChange}>
                    <input type='checkbox' defaultChecked={memo}  />
                    <span>enter to my team</span>
                </div>
    )
}
export default EnterTeam;