import React, { Component } from 'react';
import { setVisibilityFilter, GetGenericPoll } from '../../actions'
import AllGenericPolls from './allgenericpolls'

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


const GenericPoll = connect(
  mapStateToProps,
  mapDispatchToProps
)(AllGenericPolls)

export default GenericPoll