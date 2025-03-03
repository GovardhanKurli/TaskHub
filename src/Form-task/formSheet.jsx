import React, { useEffect, useState } from "react";
import Axios from "axios";
const TaskForm = () => {
  const [task, setTask] = useState({
    name: "",
    description: "",
    dueDate: "",
    SubmitioDate: new Date().toLocaleDateString(),
  });
  const [response, setResponse] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({ ...task, [name]: value });
  
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:5000/posts", task)
      .then((res) => {
        console.log("Task Submitted:", res.data);
        alert("Task Assumed Successfully");
        getdata();
        setTask({
          name: "",
          description: "",
          dueDate: "",
          SubmitioDate: new Date().toLocaleDateString(),
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error: " + error.message);
      });
      
  };

  const getdata = () => {
    Axios.get("http://localhost:5000/posts")
      .then((response) => {
        console.log("this" + response.data);
        setResponse(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("no data founded this url: " + error.message);
      });
  };
  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4"> Assigne Task</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="block font-medium">Task Name:</label>
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block font-medium">Task Description:</label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="blockFont-medium">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={task.dueDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <div className="list of data">
      <h2 className="text-xl font-bold mb-4"> Assigned Task List</h2>

        {response &&
          response.map((item) => (
            <div key={item.id} className="p-2 border rounded my-2">
              
              <table>
                <tr>
                  <th>Task Name</th>
                  <th>Task Description</th>
                  <th>Due Date</th>
                  <th>Submition Date</th>
                  <th>Status</th>
                </tr>
                <tr key={item.id}>
                  <td>{item ? item.name : "no data get"}</td>
                  <td>{item.description}</td>
                  <td>{item.dueDate}</td>
                  <td>{item.SubmitioDate}</td>
                </tr>
              </table>
            </div>
          ))}
        {/* {response && response.map(()=>{})} */}
      </div>
    </div>
  );
};

export default TaskForm;
