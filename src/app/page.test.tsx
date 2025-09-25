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
  it('should render the journey description', () => {
    render(<Home />);

    const description = screen.getByText(
      /My journey to master Next.js, TypeScript & Tailwind/i
    );
    expect(description).toBeInTheDocument();
  });
});
