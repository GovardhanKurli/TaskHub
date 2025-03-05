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
          <label className="block font-medium"> Name: </label>
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
          <label className="block font-medium">Task Description: </label>
          <textarea
            name="description"
            value={task.description}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label className="blockFont-medium">Due Date: </label>
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
                  <th> Name</th>
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
// import React, { useEffect, useState } from "react";
// import Axios from "axios";
// import "./formSheet.css"; // Import the CSS file

// const TaskForm = () => {
//   const [task, setTask] = useState({
//     name: "",
//     description: "",
//     dueDate: "",
//     SubmitioDate: new Date().toLocaleDateString(),
//   });

//   const [response, setResponse] = useState([]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setTask({ ...task, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     Axios.post("http://localhost:5000/posts", task)
//       .then((res) => {
//         console.log("Task Submitted:", res.data);
//         alert("Task Assigned Successfully");
//         getdata();
//         setTask({
//           name: "",
//           description: "",
//           dueDate: "",
//           SubmitioDate: new Date().toLocaleDateString(),
//         });
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("Error: " + error.message);
//       });
//   };

//   const getdata = () => {
//     Axios.get("http://localhost:5000/posts")
//       .then((res) => {
//         console.log("Data fetched:", res.data);
//         setResponse(res.data);
//       })
//       .catch((error) => {
//         console.error("Error:", error);
//         alert("No data found: " + error.message);
//       });
//   };

//   useEffect(() => {
//     getdata();
//   }, []);

//   return (
//     <div className="task-container">
//       <h2 className="task-title">Assign Task</h2>
//       <form onSubmit={handleSubmit} className="task-form">
//         <div className="form-group">
//           <label>Name:</label>
//           <input type="text" name="name" value={task.name} onChange={handleChange} required />
//         </div>

//         <div className="form-group">
//           <label>Task Description:</label>
//           <textarea name="description" value={task.description} onChange={handleChange} required></textarea>
//         </div>

//         <div className="form-group">
//           <label>Due Date:</label>
//           <input type="date" name="dueDate" value={task.dueDate} onChange={handleChange} required />
//         </div>

//         <button type="submit" className="submit-button">Submit</button>
//       </form>

//       <h2 className="task-title">Assigned Tasks</h2>
//       {response.length > 0 ? (
//         <div className="table-container">
//           <table className="task-table">
//             <thead>
//               <tr>
//                 <th>Name</th>
//                 <th>Task Description</th>
//                 <th>Due Date</th>
//                 <th>Submission Date</th>
//               </tr>
//             </thead>
//             <tbody>
//               {response.map((item) => (
//                 <tr key={item.id}>
//                   <td>{item.name || "N/A"}</td>
//                   <td>{item.description || "N/A"}</td>
//                   <td>{item.dueDate || "N/A"}</td>
//                   <td>{item.SubmitioDate || "N/A"}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       ) : (
//         <p className="no-tasks">No tasks assigned yet.</p>
//       )}
//     </div>
//   );
// };

// export default TaskForm;
