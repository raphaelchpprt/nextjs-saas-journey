import {
  render,
  screen,
  fireEvent,
  waitFor,
  within,
} from '@testing-library/react';
import InteractiveWidget from './InteractiveWidget';
import { syncTasksWithCount } from '../action';

jest.mock('../action', () => ({
  syncTasksWithCount: jest.fn(),
}));

describe('InteractiveWidget', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders with initial count', async () => {
    render(<InteractiveWidget initialCount={10} />);
    expect(screen.getByText(/Task count:/i)).toHaveTextContent(
      'Task count: 10'
    );
  });

  it('increments the counter when + button is clicked', () => {
    render(<InteractiveWidget initialCount={5} />);
    const incrementButton = screen.getByRole('button', {
      name: '➕ Increment',
    });
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Task count:/i)).toHaveTextContent('Task count: 6');
  });

  it('decrements the counter when - button is clicked', () => {
    render(<InteractiveWidget initialCount={5} />);
    const decrementButton = screen.getByRole('button', {
      name: '➖ Decrement',
    });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Task count:/i)).toHaveTextContent('Task count: 4');
  });
  it('allows decrement below zero', () => {
    render(<InteractiveWidget initialCount={0} />);
    const decrementButton = screen.getByRole('button', {
      name: '➖ Decrement',
    });
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Task count:/i)).toHaveTextContent(
      'Task count: -1'
    );
  });
  it('toggles theme when button is clicked', () => {
    render(<InteractiveWidget initialCount={0} />);
    const toggleButton = screen.getByRole('button', { name: '🌙 Dark' });
    const container = screen.getByTestId('theme-preview-container');
    expect(container).toHaveClass('bg-gray-300 text-black');
    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveTextContent('☀️ Light');
    expect(container).toHaveClass('bg-gray-900 text-white');
  });
});
