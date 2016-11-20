import React, { PureComponent, PropTypes } from 'react';
import './reset.scss';

export default class Root extends PureComponent {
  render() {
    return (
      <div>{ this.props.children }</div>
    );
  }
}

Root.propTypes = {
  children: PropTypes.element
};
