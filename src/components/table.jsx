export const MyTable = ({taskList})=> {

    return <>
    <table>
    {taskList.map(x=> <tr>
    <th>{x.id}</th>
    <th>{x.description}</th>
    <th>{x.done}</th>
    <th>{x.time}</th>
    </tr>)}
    </table>
    </>
    
}