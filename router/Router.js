import React from 'react';
import {NativeRouter, Switch, Route} from 'react-router-native';
import BaseLayout from '../views/layout/BaseLayout';

function Routes() {
  return (
    <NativeRouter>
      <Switch>
        <Route exact path="/" component={BaseLayout} />
      </Switch>
    </NativeRouter>
  );
}
export default Routes;
