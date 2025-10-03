import { render, screen } from '@testing-library/react';
import { ServerStats } from './ServerStats';

describe('ServerStats', () => {
  it('renders all stat cards with correct values', () => {
    const mockStats = {
      users: 150,
      revenue: '$2500',
      tasks: 25,
    };
    render(<ServerStats stats={mockStats} />);

    expect(screen.getByText('150')).toBeInTheDocument();
    expect(screen.getByText('$2500')).toBeInTheDocument();
    expect(screen.getByText('25')).toBeInTheDocument();
  });

  it('applies danger variant when tasks > 50', () => {
    const mockStats = {
      users: 150,
      revenue: '$2500',
      tasks: 75,
    };
    render(<ServerStats stats={mockStats} />);
    const cards = screen.getAllByTestId('user-stats-card');
    const taskCard = cards[2];
    expect(taskCard).toHaveClass('bg-red-800');
  });

  it('uses default variant when tasks <= 50', () => {
    const mockStats = {
      users: 100,
      revenue: '$1000',
      tasks: 30,
    };
    render(<ServerStats stats={mockStats} />);
    const cards = screen.getAllByTestId('user-stats-card');
    const taskCard = cards[2];
    expect(taskCard).toHaveClass('bg-gray-800');
  });
});
