import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import updatePessoa from './screens/updatePessoa';

export const Routes = () => {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route exact path="/update" component={updatePessoa} />
            </Switch>
        </div>
    );
};