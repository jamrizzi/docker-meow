import React, { Component } from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.scss';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (<div className={s.root}>
      <h1>Docker Meow</h1>
      A purrrfect way to test Docker
    </div>);
  }
}

export default withStyles(s)(Header);
