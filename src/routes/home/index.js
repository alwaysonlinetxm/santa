import React, { PureComponent, PropTypes } from 'react';
// import classnames from 'classnames';
// import Util from '../../libs/util';
import { INDEX_LIST } from '../../constants/Data';
import ListItem from './components/ListItem';
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
      <div>
        <header className={ Style.header }>santa 爱睡觉</header>
        <ul className={ Style.list }>
          {
            INDEX_LIST.map((node, i) => <ListItem node={ node } key={ i } />)
          }
        </ul>
      </div>
    );
  }
}

Home.propTypes = {

};

Home.contextTypes = {
  router: PropTypes.object,
};
