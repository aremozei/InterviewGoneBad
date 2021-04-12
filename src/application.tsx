import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from './config/routes';

const Application: React.FunctionComponent<{}> = props => {
    useEffect(() => {
       console.log('Loading app');
    }, [])
    
    return(
        <div>
            <Router>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key= {index}
                                path= {route.path}
                                exact= {route.exact}
                                render= {
                                    (props: RouteComponentProps<any>) => (
                                        <route.component
                                            name={route.name} 
                                            {...props}
                                            {...route.props}
                                        />
                                    )}
                            />
                        );
                    })}
                </Switch>
            </Router>
        </div>
    )
}

export default Application;