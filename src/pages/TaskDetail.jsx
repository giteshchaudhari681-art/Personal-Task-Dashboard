import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const TaskDetail = () => {
  const { id } = useParams();
  const [task, setTask] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then(res => res.json())
      .then(data => setTask(data));
  }, [id]);

  if (!task) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Task Detail</h1>
      <h2 className="text-xl">{task.title}</h2>
      <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
      <Link to="/tasks" className="text-blue-600">Back to Tasks</Link>
    </div>
  );
};

export default TaskDetail;