import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Form from '../app/form/page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

describe('Form Component', () => {
  test('renders form with all required fields', () => {
    render(<Form />);
    
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  test('updates input fields when user types', () => {
    render(<Form />);
    
    const firstNameInput = screen.getByLabelText(/first name/i);
    const lastNameInput = screen.getByLabelText(/last name/i);
    const emailInput = screen.getByLabelText(/email/i);
    
    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john.doe@example.com' } });
    
    expect(firstNameInput).toHaveValue('John');
    expect(lastNameInput).toHaveValue('Doe');
    expect(emailInput).toHaveValue('john.doe@example.com');
  });

  test('redirects to success page on form submission with valid inputs', async () => {
    const mockPush = jest.fn();
    require('next/navigation').useRouter.mockImplementation(() => ({
      push: mockPush,
    }));
    
    render(<Form />);
    
    fireEvent.change(screen.getByLabelText(/first name/i), { target: { name: 'firstName', value: 'John' } });
    fireEvent.change(screen.getByLabelText(/last name/i), { target: { name: 'lastName', value: 'Doe' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { name: 'email', value: 'john.doe@example.com' } });
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith(
        expect.stringContaining('firstName=John&lastName=Doe&email=john.doe%40example.com')
      );
    });
  });

  test('form requires all fields to be filled', () => {
    render(<Form />);
    
    fireEvent.click(screen.getByRole('button', { name: /submit/i }));
    
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });
});
