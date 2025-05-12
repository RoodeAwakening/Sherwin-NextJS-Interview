import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Canada from '../app/canada/page';

jest.mock('@/lib/fetchData', () => ({
  __esModule: true,
  default: jest.fn().mockResolvedValue([
    {
      name: {
        common: 'Canada',
        official: 'Canada'
      },
      region: 'Americas'
    }
  ])
}));

describe('Canada Page', () => {
  test('should display button to fetch data', () => {
    render(<Canada />);
    
    const button = screen.getByText(/click here to get canada data/i);
    expect(button).toBeInTheDocument();
  });
  
  test('should display Canada data after button click', async () => {
    render(<Canada />);
    
    expect(screen.queryByText(/Common Name: Canada/i)).not.toBeInTheDocument();
    
    const button = screen.getByText(/click here to get canada data/i);
    fireEvent.click(button);
    
    await waitFor(() => {
      expect(screen.getByText(/Common Name: Canada/i)).toBeInTheDocument();
      expect(screen.getByText(/Official Name: Canada/i)).toBeInTheDocument();
      expect(screen.getByText(/Region: Americas/i)).toBeInTheDocument();
    });
  });
});
