import React, { Component } from 'react';
import { setVisibilityFilter, GetPollTemplate } from '../../actions'
import createpoll from './getpolltemplate'

import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setVisibilityFilter: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}


const polltemplate = connect(
  mapStateToProps,
  mapDispatchToProps
)(GetPollTemplate)

export default polltemplate