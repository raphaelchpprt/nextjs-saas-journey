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
});
