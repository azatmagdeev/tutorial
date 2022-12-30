import { render, screen } from '@testing-library/react';
import App from './App';
import { ColorProvider } from './ColorContext';

test('render empty app', () => {
  render(<App />);
  const linkElement = screen.getByText(/No colors/i);
  expect(linkElement).toBeInTheDocument();
});

test('render app with provider', () => {
  render(
    <ColorProvider>
      <App />
    </ColorProvider>

  );
  const linkElement = screen.getByText(/bright red/i);
  expect(linkElement).toBeInTheDocument();
});
