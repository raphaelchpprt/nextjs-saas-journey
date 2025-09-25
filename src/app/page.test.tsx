import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('should render the main heading', () => {
    render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /Day 1/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
