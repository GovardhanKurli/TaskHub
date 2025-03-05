import React, { useEffect, useState } from "react";
import Axios from "axios";
import "./formSheet.css";
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
    <div className="Main-container">
      
      <form onSubmit={handleSubmit} className="form-container">
      <h2 className="form-title"> Assigne Task</h2>
        <div className="form-group">
          <label className="block font-medium"> Name: </label> <br />
          <input
            type="text"
            name="name"
            value={task.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="form-group">
          <label className="block font-medium">Task Description: </label> <br />
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label className="blockFont-medium">Due Date: </label> <br />
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
          className="submit-button"
        >
          Submit
        </button>
      </form>

      <div className="list-of-data">
    <h2 className="text-xl font-bold mb-4">Assigned Task List</h2>

    {response && response.length > 0 ? (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Task Description</th>
                    <th>Due Date</th>
                    <th>Submission Date</th>
                    <th>Status</th>
                </tr>
            </thead>
            <tbody>
                {response.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name || "No data available"}</td>
                        <td>{item.description}</td>
                        <td>{item.dueDate}</td>
                        <td>{item.SubmitioDate || "Not submitted"}</td>
                        <td>{item.status || "Pending"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    ) : (
        <p className="text-center text-gray-600">No tasks assigned yet.</p>
    )}
</div>

    </div>
  );
};

export default TaskForm;