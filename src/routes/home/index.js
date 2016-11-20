import React, { PureComponent, PropTypes } from 'react';
import classnames from 'classnames';
import Util from '../../libs/util';
import Style from './Home.scss';

export default class Home extends PureComponent {
  toDetail = this.toDetail.bind(this)

  toDetail() {
    this.context.router.push('/detail');
  }

  componentWillMount() {
  }

  render() {
    // const { names, text } = this.props;

    return (
      <div className={ Style.home } onClick={ this.toDetail }>
        home
      </div>
    );
  }
}

Home.propTypes = {

};

Home.contextTypes = {
  router: PropTypes.object,
};
