import '../App.css'; 
export const MyList = ({taskList})=> {

return (
    <div className="tasks-container">
      {taskList.map((task) => (
        <div key={task.id} className="task-item">
          <h3>{task.description}</h3>
          <p>שעה: {task.time}</p>
          <p>סטטוס: {task.done ? "בוצע ✅" : "ממתין ⏳"}</p>
        </div>
      ))}
    </div>
  );
};