import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Content from './Content';
import Aside from './Aside';



function Main(props) {


  return (<>
    <Header text="I am HEader"/>
    <Content testPost={props.testPost}/>
    <Aside text="I am Aside"/>

    </>);
}


Main.propTypes = {
  testPost: PropTypes.array
}

export default Main;
