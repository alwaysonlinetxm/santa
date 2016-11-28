import React, { PureComponent, PropTypes } from 'react';
import Style from './ListItem.scss';

class ListItem extends PureComponent {
  toDetail = this.toDetail.bind(this)

  toDetail() {
    this.context.router.push('/detail');
  }

  render() {
    const { img, title, desc } = this.props.node;
console.log(img)
    return (
      <li className={ Style.item } onClick={ this.toDetail }>
        <div className={ Style.img } style={{ backgroundImage: `url(${img})` }}></div>
        <h2 className={ Style.title }>{ title }</h2>
        <p className={ Style.desc }>{ desc }</p>
      </li>
    );
  }
}

ListItem.propTypes = {
  node: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired
  }).isRequired
};

ListItem.contextTypes = {
  router: PropTypes.object,
};

export default ListItem;
