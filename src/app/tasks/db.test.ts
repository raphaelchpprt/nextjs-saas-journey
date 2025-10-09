import { getTasks, addTask, toggleTask, deleteTask } from './db';

test('addTask creates a new task', async () => {
  const task = await addTask('Test task');
  expect(task.title).toBe('Test task');
  expect(task.completed).toBe(false);
});

test('toggleTask toggles a task', async () => {
  const task = await addTask('Test task');
  const initialCompleted = task.completed;
  const toggledTask = await toggleTask(task.id);
  expect(toggledTask.completed).toBe(!initialCompleted);
});

test('deleteTask removes a task', async () => {
  const task = await addTask('Test task');
  const deleted = await deleteTask(task.id);
  expect(deleted).toBe(true);
  const tasks = await getTasks();
  expect(tasks).not.toContainEqual(task);
});
test('getTasks returns all tasks', async () => {
  const tasks = await getTasks();
  expect(Array.isArray(tasks)).toBe(true);
});
