import Layout from "./components/Layout/Layout";
import TaskCard from "./components/TaskCard/TaskCard";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const taskList = useAppSelector((state) => state.tasks);
  return (
    <div>
      <Layout />
      <ul className="tasks">
        {taskList.map((task) => (
          <li className="tasks-list" key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
