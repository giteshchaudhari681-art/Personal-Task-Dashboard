import { Link } from 'react-router-dom';

const TaskCard = ({ task }) => {
  return (
    <div className={`p-4 border rounded ${task.completed ? 'bg-green-100' : 'bg-red-100'}`}>
      <h2 className="font-bold">{task.title}</h2>
      <p>Status: {task.completed ? 'Completed' : 'Pending'}</p>
      <Link to={`/tasks/${task.id}`} className="text-blue-600">View Details</Link>
    </div>
  );
};

export default TaskCard;