import { TaskStructure } from "../../types";
import ToggleTaskButton from "../ToggleTaskButton/ToggleTaskButton";
import "./TaskCard.css";

interface TaskCardProps {
  task: TaskStructure;
}

const TaskCard = ({
  task: { id, isDone, name },
}: TaskCardProps): JSX.Element => {
  return (
    <>
      <ToggleTaskButton id={id} isDone={isDone} /> {name}
    </>
  );
};

export default TaskCard;
