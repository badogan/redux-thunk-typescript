import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchAstronauts } from '../actions/fetchAstronauts'
import { Button, Spinner } from "@chakra-ui/core";
 
class AppAstronauts extends Component {
 
  handleOnClick() {
    this.props.fetchAstronauts()
  }
 
  render() {
    const astronauts = this.props.astronauts.map((astro,index) => <li key={index}>{astro.title}</li>);
    const length= this.props.astronauts.length
 
    return(
      <div>
          <Button onClick={(event) => this.handleOnClick(event)} variantColor="green">Button</Button>
          {this.props.requesting && <Spinner size="xl" />}
          {length}
        {astronauts}
      </div>
    );
  }
};
 
function mapDispatchToProps(dispatch){
  return { fetchAstronauts: () => dispatch(fetchAstronauts()) }
}
 
function mapStateToProps(state){
  return {
      astronauts: state.astronauts,
      requesting: state.requesting
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(AppAstronauts)