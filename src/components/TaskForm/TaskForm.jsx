import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
// Імпортуємо генератор екшену
import { addTask } from 'redux/actions';
import { FormField, InputField } from './TaskForm.styled';

export const TaskForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addTask(form.elements.text.value));
    form.reset();
  };

  return (
    <FormField onSubmit={handleSubmit}>
      <InputField type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </FormField>
  );
};
