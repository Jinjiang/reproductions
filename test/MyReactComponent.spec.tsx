import { render, screen, fireEvent } from '@testing-library/react';
import { MyReactComponent } from '../src/MyReactComponent';

// Type assertion for testing library matchers
declare global {
  namespace Vi {
    interface Matchers<R> {
      toHaveTextContent(text: string): R;
      toBeInTheDocument(): R;
      toBeDisabled(): R;
      toHaveClass(className: string): R;
    }
  }
}

describe('MyReactComponent', () => {
  it('should render with default label', () => {
    render(<MyReactComponent />);
    expect(screen.getByRole('button').textContent).toContain('Click me');
  });

  it('should render with custom label', () => {
    render(<MyReactComponent label="Submit" />);
    expect(screen.getByRole('button').textContent).toContain('Submit');
  });

  it('should increment click counter on click', () => {
    render(<MyReactComponent />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(screen.getByText('1')).toBeDefined();
    
    fireEvent.click(button);
    expect(screen.getByText('2')).toBeDefined();
  });

  it('should not show counter when clickCount is 0', () => {
    const { container } = render(<MyReactComponent />);
    expect(container.querySelector('.count')).toBeNull();
  });

  it('should handle disabled state', () => {
    render(<MyReactComponent disabled={true} />);
    const button = screen.getByRole('button') as HTMLButtonElement;
    
    expect(button.disabled).toBe(true);
  });

  it('should support variant prop', () => {
    render(<MyReactComponent variant="secondary" />);
    const button = screen.getByRole('button');
    
    expect(button.className).toContain('btn-secondary');
  });

  it('should not increment when disabled', () => {
    render(<MyReactComponent disabled={true} />);
    const button = screen.getByRole('button');
    
    fireEvent.click(button);
    expect(screen.queryByText('1')).toBeNull();
  });
});
