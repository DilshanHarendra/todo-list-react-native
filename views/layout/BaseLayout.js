import React from 'react';
import {View, SafeAreaView} from 'react-native';
import Home from '../Pages/Home';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from '../../store/store';
function BaseLayout() {
  return (
    <Provider store={createStore(reducer)}>
      <View>
        <SafeAreaView />
        <Home />
      </View>
    </Provider>
  );
}
export default BaseLayout;
