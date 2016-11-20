import React, { PureComponent, PropTypes } from 'react';
import Style from './Detail.scss';

export default class Detail extends PureComponent {
  render() {
    return (
      <div className={Style.box}>
        Detail
      </div>
    );
  }
}

Detail.propTypes = {
};
