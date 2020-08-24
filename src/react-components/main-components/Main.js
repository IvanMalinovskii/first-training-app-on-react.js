import React from 'react';
import './main.css';
import {Switch, Route} from 'react-router-dom';

let Main = ({paths = []}) => {
    return (
        <main className="main">
            <div className="container">
                <Switch>
                    {
                        paths.map(path => 
                            <Route key={path.id} exact={path.to === ''} path={'/' + path.to}>
                               {path.component}
                            </Route>
                        )
                    }
                </Switch>
            </div>
        </main>
    );
};

export default Main;