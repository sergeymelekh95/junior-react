import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Category } from './components/Category/Category';
import { Product } from './components/Category/Product/Product';
import { Header } from './components/Header/Header';
import { getAllCategories } from './queries/getAllCategories';
import classes from './App.module.css';

class App extends Component {
    constructor() {
        super();

        this.state = {
            loading: true,
            categories: [],
            routeComponents: [],
        };
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
            routeComponents: routes.map(({ path, name }) => (
                <Route
                    path={path}
                    element={<Category name={name} />}
                    key={name}
                ></Route>
            )),
            loading: false,
        });
    }

    componentDidMount() {
        getAllCategories().then((result) =>
            this.setState({
                categories: result.data.categories,
                routes: this.createRoutes(result.data.categories),
            })
        );
    }

    render() {
        const { loading, routeComponents, categories } = this.state;
        const { container, main, content } = classes;

        return !loading ? (
            <BrowserRouter>
                <div className={container}>
                    <Header categories={categories} />
                    <main className={main}>
                        <div className={content}>
                            <Routes>
                                <Route
                                    path='/'
                                    element={
                                        <Navigate to={categories[0].name} />
                                    }
                                ></Route>
                                {routeComponents}
                                {/* Добавить двоеточие для динамики. а пока так */}
                                <Route
                                    path='/:category/product'
                                    element={<Product />}
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
