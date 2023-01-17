import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello Friends, This is my first time deploying an app to aws/i);
  expect(linkElement).toBeInTheDocument();
});
