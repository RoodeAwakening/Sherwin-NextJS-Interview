import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Mexico from '../app/mexico/page';

jest.mock('@/lib/fetchData', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue([
    {
      name: {
        common: 'Mexico',
        official: 'United Mexican States'
      },
      region: 'Americas'
    }
  ])
}));

describe('Mexico Page', () => {
  test('should display button to fetch data', () => {
    render(<Mexico />);
    
    const button = screen.getByText(/click here to get Mexico data/i);
    expect(button).toBeInTheDocument();
  });
  
  test('should display Mexico data after button click', async () => {
    render(<Mexico />);
    
    expect(screen.queryByText(/Common Name: Mexico/i)).not.toBeInTheDocument();
    
    const button = screen.getByText(/click here to get Mexico data/i);
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText(/Common Name: Mexico/i)).toBeInTheDocument();
      expect(screen.getByText(/Official Name: United Mexican States/i)).toBeInTheDocument();
      expect(screen.getByText(/Region: Americas/i)).toBeInTheDocument();
    });
  });
});
