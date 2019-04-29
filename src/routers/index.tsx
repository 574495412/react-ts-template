import * as React from 'react';
import { Switch, Route, Redirect, BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux';
import configureStore from '../store/configureStore';
import { Spin } from 'antd'

const RouterList: any[] = [
    {
        component: React.lazy(() => import('../containers/App')),
        path: '/'
    },
    {
        component: React.lazy(() => import('../containers/Hello')),
        path: '/Hello/:id'
    },
]

const store = configureStore();
const App = () => (
    <Provider store={store}>
        <Router>
            <Switch>
                <React.Suspense fallback={<div className="spin"><Spin size="large" /></div>}>
                    {RouterList.map(item => (
                        <Route
                            key={item.path}
                            exact={true}
                            path={item.path}
                            component={item.component}
                        />
                    ))}
                </React.Suspense>
                <Redirect to="/" />
            </Switch>
        </Router>
    </Provider>
);
export default App;
