// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders TestDataBuilder title', () => {
    render(<App />);
    const titleElement = screen.getByText(/TestDataBuilder/i);
    expect(titleElement).toBeInTheDocument();
});
