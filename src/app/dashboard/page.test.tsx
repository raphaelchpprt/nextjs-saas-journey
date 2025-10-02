import { render, screen, within } from '@testing-library/react';
import DashboardPage from './page';

jest.mock('./db', () => ({
  getStats: jest.fn(),
}));

import { getStats } from './db';

describe('DashboardPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the dashboard title', async () => {
    const mockStats = { users: 100, revenue: '$1000', tasks: 10 };
    (getStats as jest.Mock).mockResolvedValue(mockStats);
    const component = await DashboardPage();
    render(component);

    const title = screen.getByText(/Dashboard/i);
    expect(title).toBeInTheDocument();
  });

  it('fetches and displays all statistics from the database', async () => {
    const mockStats = { users: 250, revenue: '$5000', tasks: 42 };

    (getStats as jest.Mock).mockResolvedValue(mockStats);

    const component = await DashboardPage();
    render(component);

    const usersStat = screen.getByText(/250/i);
    const revenueStat = screen.getByText(/\$5000/i);
    const tasksStat = screen.getAllByText(/42/i);

    expect(getStats).toHaveBeenCalledTimes(1);

    expect(async () => {
      expect(usersStat).toBeInTheDocument();
      expect(revenueStat).toBeInTheDocument();
      expect(tasksStat).toHaveLength(2);
    });
  });

  it('passes initial count to InteractiveWidget', async () => {
    const mockStats = { users: 100, revenu: '$1000', tasks: 15 };
    (getStats as jest.Mock).mockResolvedValue(mockStats);
    const component = await DashboardPage();
    render(component);
    const taskSection = screen.getByText(/Task count:/i).closest('p');
    const count = within(taskSection!).getByText('15');
    expect(count).toBeInTheDocument();
  });
});
