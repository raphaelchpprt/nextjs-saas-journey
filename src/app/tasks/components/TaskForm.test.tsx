import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TaskForm from './TaskForm';
import { addTaskAction } from '../actions';

jest.mock('../actions', () => ({
  addTaskAction: jest.fn(),
}));

describe('TaskForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the form with input and button', () => {
    render(<TaskForm />);

    const input = screen.getByPlaceholderText(/Add a new task/i);
    const button = screen.getByRole('button', { name: /Add Task/i });

    expect(input).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('calls addTaskAction when form is submitted', async () => {
    (addTaskAction as jest.Mock).mockResolvedValue({
      success: true,
      task: { id: '1', title: 'Test task', completed: false },
    });

    render(<TaskForm />);

    const input = screen.getByPlaceholderText(/Add a new task/i);
    const button = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(addTaskAction).toHaveBeenCalled();
    });
  });

  it('clears input after successful submission', async () => {
    (addTaskAction as jest.Mock).mockResolvedValue({
      success: true,
      task: { id: '1', title: 'Test task', completed: false },
    });

    render(<TaskForm />);

    const input = screen.getByPlaceholderText(
      /Add a new task/i
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: 'New task' } });
    expect(input.value).toBe('New task');

    const button = screen.getByRole('button', { name: /Add Task/i });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input.value).toBe('');
    });
  });

  it('shows loading state during submission', async () => {
    (addTaskAction as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ success: true }), 100)
        )
    );

    render(<TaskForm />);

    const input = screen.getByPlaceholderText(/Add a new task/i);
    const button = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(button);

    // Check for loading text
    await waitFor(() => {
      expect(screen.getByText(/Adding.../i)).toBeInTheDocument();
    });
  });

  it('disables input and button during submission', async () => {
    (addTaskAction as jest.Mock).mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(() => resolve({ success: true }), 100)
        )
    );

    render(<TaskForm />);

    const input = screen.getByPlaceholderText(/Add a new task/i);
    const button = screen.getByRole('button', { name: /Add Task/i });

    fireEvent.change(input, { target: { value: 'New task' } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(input).toBeDisabled();
      expect(button).toBeDisabled();
    });
  });
});
