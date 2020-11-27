import React from 'react';

import {NavigationContainer, TabActions} from '@react-navigation/native';

import Routes from './src/Routes';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return <Routes />;
};

export default App;
