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
    const mockStats = { users: 200, revenue: '$5000', tasks: 10 };
    (syncTasksWithCount as jest.Mock).mockResolvedValue(mockStats);

    const component = await InteractiveWidget();
    render(component);
    const taskSection = screen.getByText(/Task count:/i).closest('p');
    const count = within(taskSection!).getByText('10');
    expect(count).toBeInTheDocument();
  });
});
