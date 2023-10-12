import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import thunk from 'redux-thunk';
import configureStore from 'redux-mock-store';
import axios from 'axios';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import FinancialSlice, { fetchFinance, financialItemDetail } from './Redux/FinancialSlice';
import store from './Redux/store';
import Detail from './components/Detail/Detail';
import Header from './components/Navbar/Header';
import Navbar from './components/Navbar/Navbar';
import Layout from './components/Navbar/Layout';
import HomeComponent from './components/Home/HomeComponent';
import Home from './pages/Home';
import App from './App';

const mockResponseData = {
  symbol: 'AAPL',
  name: 'Apple Inc.',
  price: 150.42,
  exchange: 'NASDAQ',
  exchangeShortName: 'NASDAQ',
  type: 'stock',
};
jest.mock('axios');
axios.get.mockResolvedValue(mockResponseData);

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

  it('fetches financial data and returns the data', async () => {
    axios.get.mockResolvedValue({ data: mockResponseData });
    const mockStore = configureStore([thunk]);
    const store = mockStore();
    await store.dispatch(fetchFinance());
    const actions = store.getActions();
    expect(actions[0].type).toEqual(fetchFinance.pending.type);
    expect(actions[1].type).toEqual(fetchFinance.fulfilled.type);
    expect(actions[1].payload).toEqual(mockResponseData);
  });

  it('should handle financialItemDetail action', () => {
    const initialState = {
      financial: [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' },
      ],
      financialItemDetailsArray: [],
    };

    const action = financialItemDetail('AAPL');
    const newState = FinancialSlice(initialState, action);
    expect(newState).toEqual({
      financial: [
        { symbol: 'AAPL', name: 'Apple Inc.' },
        { symbol: 'GOOGL', name: 'Alphabet Inc.' },
      ],
      financialItemDetailsArray: [
        { symbol: 'AAPL', name: 'Apple Inc.' },
      ],
    });
  });
});
