import { render, screen } from '@testing-library/react';
import { Card, CardHeader, CardBody, CardFooter } from './Card';

describe('Card Component', () => {
  it('renders children correctly', () => {
    render(
      <Card>
        <CardBody>Test content</CardBody>
      </Card>
    );

    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('applies default variant classes', () => {
    const { container } = render(<Card>Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-gray-800');
  });

  it('applies highlighted variant classes', () => {
    const { container } = render(<Card variant="highlighted">Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-gradient-to-r');
  });

  it('applies danger variant classes', () => {
    const { container } = render(<Card variant="danger">Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('bg-red-800');
  });

  it('applies size variants correctly', () => {
    const { container, rerender } = render(<Card size="sm">Content</Card>);
    expect(container.firstChild).toHaveClass('p-3');

    rerender(<Card size="lg">Content</Card>);
    expect(container.firstChild).toHaveClass('p-6');
  });

  it('renders all card slots together', () => {
    render(
      <Card variant="highlighted">
        <CardHeader>Header Text</CardHeader>
        <CardBody>Body Text</CardBody>
        <CardFooter>Footer Text</CardFooter>
      </Card>
    );

    expect(screen.getByText('Header Text')).toBeInTheDocument();
    expect(screen.getByText('Body Text')).toBeInTheDocument();
    expect(screen.getByText('Footer Text')).toBeInTheDocument();
  });

  it('merges custom className with variant classes', () => {
    const { container } = render(<Card className="custom-class">Content</Card>);
    const card = container.firstChild as HTMLElement;
    expect(card).toHaveClass('custom-class');
    expect(card).toHaveClass('bg-gray-800'); // Garde aussi les classes du variant
  });
});
