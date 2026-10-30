import { useState } from "react"
import { MyList } from "./list"
import { MyTable } from "./table"

export const MyTask = () =>{
    const [taskList,settaskList] = useState(
        [
            {id:1,description:"homework", done:true,time:"20:23"},
            {id:2,description:"wash", done:false,time:"14:13"},
            {id:3,description:"study", done:false,time:"00:20"},
            {id:4,description:"clean", done:true,time:"23:53"}
        ]
    )

    const [islist, setislist] = useState(false)
    const [istable, setistable] = useState(false)

    const f1 =(str)=>{
        
        switch(str){
            case "list":setislist(true);setistable(false); break;
            case "table":setistable(true);setislist(false); break;
        }
    }



    const dell=(id)=>{
        settaskList (taskList.filter(x=>x.id!=id))
    }

    const change = (id)=>{
        let y = taskList
        y.filter(x=>x.id==x.id).forEach(d=>d.done=!d.done)
        settaskList(y)
    }

    return <>
    <button onClick={()=>f1("list")}>list</button>
    <button onClick={()=>f1("table")}>table</button>
    {islist&&<MyList taskList = {taskList}></MyList>}
    {istable&&<MyTable taskList = {taskList}></MyTable>}
    </>
}