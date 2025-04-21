"use client";
import { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center text-blue-600">
          Concept Coaching Classes - To-Do List
        </h1>
        <p className="text-center text-gray-500 mt-2">
          Organize tasks efficiently for students & teachers
        </p>

        {/* Input Field */}
        <div className="mt-4 flex gap-2">
          <input
            type="text"
            placeholder="Add a new task..."
            className="border p-2 w-full rounded"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            onClick={addTask}
          >
            Add Task
          </button>
        </div>

        {/* Task List */}
        <ul className="mt-4 space-y-3">
          {tasks.map((task, index) => (
            <li
              key={index}
              className={`flex justify-between items-center p-3 border rounded ${
                task.completed ? "line-through text-gray-500" : ""
              }`}
            >
              <span onClick={() => toggleTaskCompletion(index)}>
                {task.text}
              </span>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoApp;
