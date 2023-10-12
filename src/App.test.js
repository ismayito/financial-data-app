import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Detail from './components/Detail/Detail';
import Header from './components/Navbar/Header';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Navbar/Layout';
import HomeComponent from './components/Home/HomeComponent';
import Home from './pages/Home';
import App from './App';

describe('Tests for the financial App', () => {
  it('Tests the display of Header Component', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const headerTitle = screen.getByText('Finance');
    expect(headerTitle).toBeInTheDocument();
  });

  it('Tests the display of Header Component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of Navbar Component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of Layout Component', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of Home Component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <HomeComponent />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of detail Component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Detail />
      </Provider>,

    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of Home page ', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of Detail page ', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <Detail />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Tests the display of App ', () => {
    const component = renderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
