import { useAppDispatch } from "../../store/hooks";
import { toggleTaskActionCreator } from "../../store/taskSlice";
import Button from "../Button/Button";

export interface ToggleTaskButtonProps {
  id: number;
  isDone: boolean;
}

const ToggleTaskButton = ({
  id,
  isDone,
}: ToggleTaskButtonProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const toggleTaskStatus = () => {
    dispatch(toggleTaskActionCreator(id));
  };
  return (
    <Button
      icon={isDone ? "❌" : "✅"}
      type="toggle-status"
      actionOnClick={toggleTaskStatus}
    />
  );
};

export default ToggleTaskButton;
