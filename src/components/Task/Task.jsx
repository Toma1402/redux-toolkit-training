import { MdClose } from 'react-icons/md';
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { deleteTask, toggleCompleted } from '../../redux/actions';
import { TaskBtn, TaskCheck, TaskField, TaskTitle } from './Task.styled';

export const Task = ({ task }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task.id));
  return (
    <TaskField>
      <TaskCheck
        type="checkbox"
        checked={task.completed}
        onChange={handleToggle}
      />
      <TaskTitle>{task.text}</TaskTitle>
      <TaskBtn onClick={handleDelete}>
        <MdClose size={24} />
      </TaskBtn>
    </TaskField>
  );
};
