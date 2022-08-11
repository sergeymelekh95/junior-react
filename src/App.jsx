import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Category } from './components/Category/Category';
import { Product } from './components/Category/Product/Product';
import { Header } from './components/Header/Header';
import { getAllCategories } from './queries/getAllCategories';
import { getCurrencies } from './queries/getCurrencies';

import classes from './App.module.css';
import { ProductInfo } from './components/Category/Product/ProductInfo/ProductInfo';

class App extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            categories: [],
            indexCurrency: 0,
            routes: [],
            isDropdown: false,
            currencies: [],
        };

        this.handleCurrency = this.handleCurrency.bind(this);
        this.getLocalStorData = this.getLocalStorData.bind(this);
        this.handleDropdown = this.handleDropdown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    createRoutes(categories) {
        const routes = [];

        categories.forEach(({ name }) => {
            routes.push({
                name: name,
                path: `/${name}`,
            });
        });

        this.setState({
            categories: categories,
            routes: routes,
            loading: false,
        });
    }

    handleDropdown() {
        this.setState({ isDropdown: !this.state.isDropdown });
    }

    handleCurrency(indexCurrency) {
        this.setState({
            indexCurrency: indexCurrency,
        });

        if (this.state.isDropdown) this.handleDropdown();
        localStorage.setItem('indexCurrency', indexCurrency);
    }

    getLocalStorData() {
        const indexCurrency = localStorage.getItem('indexCurrency');
        if (indexCurrency) this.handleCurrency(indexCurrency);
    }

    handleClick() {
        if (this.state.isDropdown) this.setState({ isDropdown: false });
    }

    componentDidMount() {
        this.getLocalStorData();

        getAllCategories().then((result) =>
            this.createRoutes(result.data.categories)
        );

        getCurrencies().then((result) =>
            this.setState({
                currencies: result.data.currencies,
            })
        );
    }

    render() {
        const { categories, routes, indexCurrency, currencies, isDropdown } =
            this.state;
        const { container, main, content } = classes;
        const mainPage = categories.length ? categories[0].name : null;

        return routes.length ? (
            <BrowserRouter>
                <div className={container} onClick={this.handleClick}>
                    {categories.length && currencies.length ? (
                        <Header
                            isDropdown={isDropdown}
                            handleDropdown={this.handleDropdown}
                            handleCurrency={this.handleCurrency}
                            categories={categories}
                            currencies={currencies}
                            indexCurrency={indexCurrency}
                        />
                    ) : null}
                    <main className={main}>
                        <div className={content}>
                            <Routes>
                                <Route
                                    path='/'
                                    element={<Navigate to={mainPage} />}
                                ></Route>
                                {routes
                                    ? routes.map(({ path, name }) => (
                                          <Route
                                              path={path}
                                              element={
                                                  <Category
                                                      name={name}
                                                      indexCurrency={
                                                          this.state
                                                              .indexCurrency
                                                      }
                                                  />
                                              }
                                              key={name}
                                          ></Route>
                                      ))
                                    : null}
                                {/* Добавить двоеточие для динамики. а пока так */}
                                <Route
                                    path='/:categoryName'
                                    element={<Product />}
                                ></Route>
                                <Route
                                    path='/:categoryName/:productId'
                                    element={<ProductInfo indexCurrency={indexCurrency} />}
                                ></Route>
                            </Routes>
                        </div>
                    </main>
                </div>
            </BrowserRouter>
        ) : (
            <h1>Loading...</h1>
        );
    }
}

export default App;
