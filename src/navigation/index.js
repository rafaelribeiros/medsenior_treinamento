import React from 'react';
import {connect} from 'react-redux';
import {RootNavigator} from './navigator';

const NavigatorStack = ({nav, dispatch}) => (
  <RootNavigator state={nav} dispatch={dispatch} />
);

const mapStateToProps = state => ({
  nav: state.nav,
});

export const Navigator = connect(mapStateToProps)(NavigatorStack);
