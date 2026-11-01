import '../App.css';
export const MyTable = ({taskList, dellfunc , changefunc})=> {

  return (
    <table className="tasks-table">
      <thead>
        <tr>
          <th>משימה</th>
          <th>שעה</th>
          <th>סטטוס</th>
          <th>מחיקה</th>
          <th>שינוי סטטוס</th>
        </tr>
      </thead>
      <tbody>
        {taskList.map((task) => (
          <tr key={task.id}>
            <td>{task.description}</td>
            <td>{task.time}</td>
            <td>{task.done ? "בוצע ✅" : "ממתין ⏳"}</td>
            <td><button onClick={()=>dellfunc(task.id)}>delete</button></td>
            <td><button onClick={()=>changefunc(task.id)}>change status</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};