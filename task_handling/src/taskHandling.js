import { useState } from "react";

export default function TaskPageHandling() {
  const [taskList, setTaskList] = useState(["task1", "task2", "task3"]);
  const [taskProgressList, setTaskProgressList] = useState([]);
  const [taskCompletedList, setTaskCompletedList] = useState([]);

  const handleChange = (e) => {
    let name = e.target.innerText;
    let data = taskList.filter((item) => {
      let a = item !== name
    return a;
    });
    setTaskList(data);
    let nData = taskList.find((item) => {
      let b = item === name;
      return b;
    });
    setTaskProgressList([...taskProgressList, nData]);
  };

  const handleInProgress = (e) => {
     let name = e.target.innerText;
    let c = [...taskProgressList];
    c = c.filter((item) => {
      let a = item !== name;
      return a;
    });
    setTaskProgressList(c);
    let nData = taskProgressList.find((item) => {
      let a = item === name;
      return a;
    });
    setTaskCompletedList([...taskCompletedList, nData]);
  };

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>TASKS</th>
            <th>IN PROGRESS</th>
            <th>COMPLETED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {taskList.map((item) => {
                return (
                  <button
                    id="1"
                    style={{ display: "flex", flexDirection: "column" }}
                    onClick={(e) => handleChange(e)}
                  >
                    {item}
                  </button>
                );
              })}
            </td>
            <td>
              {taskProgressList.map((item) => {
                return (
                  <button
                    id="2"
                    style={{ display: "flex", flexDirection: "column" }}
                    onClick={(e) => handleInProgress(e)}
                  >
                    {item}
                  </button>
                );
              })}
            </td>
            <td>
              {taskCompletedList.map((item) => {
                return (
                  <button
                    id="3"
                    style={{ display: "flex", flexDirection: "column" }}
                  >
                    {item}
                  </button>
                );
              })}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
