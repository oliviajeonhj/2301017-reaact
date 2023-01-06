import { render, screen } from '@testing-library/react';
import Hankkeut from './Hankkeut';

test('renders learn react link', () => {
  render(<Hankkeut />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
