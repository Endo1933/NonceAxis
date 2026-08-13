// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NonceAxis title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NonceAxis/i);
    expect(titleElement).toBeInTheDocument();
});
