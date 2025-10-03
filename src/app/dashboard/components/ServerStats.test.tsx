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
});
