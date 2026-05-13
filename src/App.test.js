import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock(
  'react-router-dom',
  () => {
    const React = require('react');
    const Link = React.forwardRef(({ to, children, ...props }, ref) => (
      <a ref={ref} href={typeof to === 'string' ? to : '#'} {...props}>
        {children}
      </a>
    ));

    return {
      BrowserRouter: ({ children }) => <>{children}</>,
      Link,
      Route: () => null,
      Routes: ({ children }) => {
        const pathname = globalThis.window.location.pathname;
        const route = React.Children.toArray(children).find((child) => child.props.path === pathname);
        return route?.props.element || null;
      },
      useLocation: () => ({ pathname: globalThis.window.location.pathname }),
      useNavigate: () => jest.fn(),
    };
  },
  { virtual: true }
);

jest.mock(
  'swiper/react',
  () => ({
    Swiper: ({ children }) => <div>{children}</div>,
    SwiperSlide: ({ children }) => <div>{children}</div>,
  }),
  { virtual: true }
);

jest.mock('swiper/modules', () => ({ Navigation: {}, Pagination: {} }), { virtual: true });
jest.mock('swiper/css', () => ({}), { virtual: true });
jest.mock('swiper/css/navigation', () => ({}), { virtual: true });
jest.mock('swiper/css/pagination', () => ({}), { virtual: true });

const renderAt = (path) => {
  window.history.pushState({}, '', path);
  return render(<App />);
};

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test('renders app without crashing', () => {
  renderAt('/');
  expect(document.body).toBeInTheDocument();
});

test('renders privacy policy with OpenClaw messaging terms', () => {
  const { container } = renderAt('/privacy-policy');

  expect(screen.getByRole('heading', { name: /privacy policy/i })).toBeInTheDocument();
  expect(container).toHaveTextContent(/openclaw messaging/i);
  expect(container).toHaveTextContent(/not be sold, rented, or shared/i);
});

test('renders terms with sms opt-out and support instructions', () => {
  const { container } = renderAt('/terms-and-conditions');

  expect(screen.getByRole('heading', { name: /terms and conditions/i })).toBeInTheDocument();
  expect(container).toHaveTextContent(/message and data rates may apply/i);
  expect(container).toHaveTextContent(/Reply STOP/i);
  expect(container).toHaveTextContent(/Reply HELP/i);
});
