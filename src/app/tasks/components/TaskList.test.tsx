import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';
import { toggleTaskAction, deleteTaskAction } from '../actions';

jest.mock('../actions', () => ({
  toggleTaskAction: jest.fn(),
  deleteTaskAction: jest.fn(),
}));

const mockTasks = [
  {
    id: '1',
    title: 'Task 1',
    completed: false,
    createdAt: new Date('2025-10-01'),
  },
  {
    id: '2',
    title: 'Task 2',
    completed: true,
    createdAt: new Date('2025-10-02'),
  },
  {
    id: '3',
    title: 'Task 3',
    completed: false,
    createdAt: new Date('2025-10-03'),
  },
];

describe('TaskList', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders all tasks by default', () => {
    render(<TaskList initialTasks={mockTasks} />);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('shows filter buttons with correct counts', () => {
    render(<TaskList initialTasks={mockTasks} />);

    expect(screen.getByText(/All \(3\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Active \(2\)/i)).toBeInTheDocument();
    expect(screen.getByText(/Completed \(1\)/i)).toBeInTheDocument();
  });

  it('filters active tasks when Active button is clicked', () => {
    render(<TaskList initialTasks={mockTasks} />);

    const activeButton = screen.getByRole('button', { name: /Active \(2\)/i });
    fireEvent.click(activeButton);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Task 2')).not.toBeInTheDocument(); // completed
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  it('filters completed tasks when Completed button is clicked', () => {
    render(<TaskList initialTasks={mockTasks} />);

    const completedButton = screen.getByRole('button', {
      name: /Completed \(1\)/i,
    });
    fireEvent.click(completedButton);

    expect(screen.queryByText('Task 1')).not.toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.queryByText('Task 3')).not.toBeInTheDocument();
  });

  it('calls toggleTaskAction when checkbox is clicked', () => {
    (toggleTaskAction as jest.Mock).mockResolvedValue({
      success: true,
    });

    render(<TaskList initialTasks={mockTasks} />);

    const checkboxes = screen.getAllByRole('button', { name: /Mark as/i });
    fireEvent.click(checkboxes[0]!);

    expect(toggleTaskAction).toHaveBeenCalledWith('1');
  });

  it('calls deleteTaskAction when delete button is clicked', () => {
    (deleteTaskAction as jest.Mock).mockResolvedValue({
      success: true,
    });

    render(<TaskList initialTasks={mockTasks} />);

    const deleteButtons = screen.getAllByLabelText(/Delete task/i);
    fireEvent.click(deleteButtons[0]!);

    expect(deleteTaskAction).toHaveBeenCalledWith('1');
  });

  it('shows empty state when no tasks match filter', () => {
    render(<TaskList initialTasks={[]} />);

    expect(screen.getByText(/No tasks yet/i)).toBeInTheDocument();
  });

  it('shows correct empty state for active filter', () => {
    const completedTasks = [
      { id: '1', title: 'Task 1', completed: true, createdAt: new Date() },
      { id: '2', title: 'Task 2', completed: true, createdAt: new Date() },
    ];

    render(<TaskList initialTasks={completedTasks} />);

    const activeButton = screen.getByRole('button', { name: /Active/i });
    fireEvent.click(activeButton);

    expect(screen.getByText(/No active tasks/i)).toBeInTheDocument();
  });

  it('applies correct styling to completed tasks', () => {
    render(<TaskList initialTasks={mockTasks} />);

    const task2 = screen.getByText('Task 2');
    expect(task2).toHaveClass('line-through');
  });

  it('shows checkmark for completed tasks', () => {
    render(<TaskList initialTasks={mockTasks} />);

    const checkboxes = screen.getAllByRole('button', { name: /Mark as/i });
    const completedCheckbox = checkboxes[1]!; // Task 2 is completed

    expect(completedCheckbox.textContent).toContain('✓');
  });
});
