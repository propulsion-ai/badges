// React import not needed for JSX in React 17+
import { render, screen } from '@testing-library/react';
import { Badge } from '../src/components/Badge';

describe('Badge Component', () => {
  it('renders with text', () => {
    render(<Badge text="Test Badge" />);
    expect(screen.getByText('Test Badge')).toBeInTheDocument();
  });

  it('applies default variant styling', () => {
    const { container } = render(<Badge text="Default" />);
    const badge = container.firstChild as HTMLElement;
    expect(badge.style.backgroundColor).toBeTruthy();
    expect(badge.style.color).toBeTruthy();
  });

  it('applies filled variant styling', () => {
    const { container } = render(<Badge text="Filled" variant="filled" />);
    const badge = container.firstChild as HTMLElement;
    expect(badge.style.backgroundColor).toBeTruthy();
    expect(badge.style.color).toBeTruthy();
  });

  it('applies outline variant styling', () => {
    const { container } = render(<Badge text="Outline" variant="outline" />);
    const badge = container.firstChild as HTMLElement;
    expect(badge.style.backgroundColor).toBe('transparent');
    expect(badge.style.border).toContain('0.5px solid');
  });

  it('applies ghost variant styling', () => {
    const { container } = render(<Badge text="Ghost" variant="outline" borderWidth={0} />);
    const badge = container.firstChild as HTMLElement;
    expect(badge.style.backgroundColor).toBe('transparent');
    // With borderWidth=0, the style will either be 'none' or empty
    expect(badge.style.border === 'none' || badge.style.border === '').toBe(true);
  });

  it('applies filled variant styling with custom border', () => {
    const { container } = render(<Badge text="Filled" variant="filled" borderWidth={2} />);
    const badge = container.firstChild as HTMLElement;
    expect(badge.style.border).toContain('2px solid');
  });

  it('applies custom className', () => {
    const { container } = render(<Badge text="Custom" className="custom-class" />);
    const badge = container.firstChild as HTMLElement;
    expect(badge).toHaveClass('custom-class');
  });

  it('generates consistent colors for the same text', () => {
    const { container: container1 } = render(<Badge text="Consistent" />);
    const { container: container2 } = render(<Badge text="Consistent" />);

    const badge1 = container1.firstChild as HTMLElement;
    const badge2 = container2.firstChild as HTMLElement;

    expect(badge1.style.backgroundColor).toBe(badge2.style.backgroundColor);
    expect(badge1.style.color).toBe(badge2.style.color);
  });

  it('generates different colors for different text', () => {
    const { container: container1 } = render(<Badge text="First" />);
    const { container: container2 } = render(<Badge text="Second" />);

    const badge1 = container1.firstChild as HTMLElement;
    const badge2 = container2.firstChild as HTMLElement;

    expect(badge1.style.backgroundColor).not.toBe(badge2.style.backgroundColor);
  });
});