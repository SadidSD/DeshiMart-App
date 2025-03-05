import React, { useState } from "react";

function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState("");
  const [completedTasks, setCompletedTasks] = useState([]);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newtask.trim() !== "") {
      setTasks([...tasks, newtask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const deleteTask2 = (index) => {
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  const transferToCompleted = (index) => {
    const completed = tasks[index];
    setCompletedTasks([...completedTasks, completed]);
    deleteTask(index);
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#f4f1ea] p-5">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">To-Do List</h1>
      <div className="flex flex-row w-full max-w-4xl bg-white shadow-lg rounded-lg overflow-hidden h-[500px]">
        {/* Pending Tasks Section */}
        <div className="w-1/2 p-6 border-r border-gray-300">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Pending Tasks</h2>
          <div className="flex items-center gap-2 mb-4">
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter a new task..."
              value={newtask}
              onChange={handleChange}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              onClick={addTask}
            >
              Add
            </button>
          </div>

          {/* Pending Tasks List */}
          <div className="space-y-3">
            {tasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-100 p-3 rounded-lg shadow">
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    onChange={() => transferToCompleted(index)}
                    className="cursor-pointer"
                  />
                  <p className="text-gray-700">{task}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  onClick={() => deleteTask(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Tasks Section */}
        <div className="w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Completed Tasks</h2>
          <div className="space-y-3">
            {completedTasks.map((task, index) => (
              <div key={index} className="flex items-center justify-between bg-green-100 p-3 rounded-lg shadow">
                <div className="flex items-center gap-2">
                  <input type="checkbox" checked readOnly className="cursor-pointer" />
                  <p className="text-gray-600 line-through">{task}</p>
                </div>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                  onClick={() => deleteTask2(index)}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tasks;
