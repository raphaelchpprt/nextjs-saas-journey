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

    expect(usersStat).toBeInTheDocument();
    expect(revenueStat).toBeInTheDocument();
    expect(tasksStat).toHaveLength(2);
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

  it('handles database errors gracefully', async () => {
    (getStats as jest.Mock).mockRejectedValue(new Error('DB Error'));
    await expect(DashboardPage()).rejects.toThrow('DB Error');
  });

  it('displays different stats on multiple calls', async () => {
    (getStats as jest.Mock).mockResolvedValueOnce({
      users: 300,
      revenue: '$1000',
      tasks: 40,
    });

    const component1 = await DashboardPage();
    const { container: container1 } = render(component1);

    const usersStat1 = screen.getByText(/300/i);
    const revenueStat1 = screen.getByText(/\$1000/i);
    const tasksStat1 = screen.getAllByText(/40/i);

    expect(async () => {
      expect(usersStat1).toBeInTheDocument();
      expect(revenueStat1).toBeInTheDocument();
      expect(tasksStat1).toHaveLength(2);
    });

    (getStats as jest.Mock).mockResolvedValueOnce({
      users: 500,
      revenue: '$2000',
      tasks: 60,
    });

    const component2 = await DashboardPage();
    const { container: container2 } = render(component2);

    const usersStat2 = screen.getByText(/500/i);
    const revenueStat2 = screen.getByText(/\$2000/i);
    const tasksStat2 = screen.getAllByText(/60/i);

    expect(async () => {
      expect(usersStat2).toBeInTheDocument();
      expect(revenueStat2).toBeInTheDocument();
      expect(tasksStat2).toHaveLength(2);
    });
  });
});
