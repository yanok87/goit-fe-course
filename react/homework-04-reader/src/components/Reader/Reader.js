/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import queryString from 'query-string';
import Publication from './Publication';
import Counter from './Counter';
import Controls from './Controls';
import publicationsJson from './publications.json';
import styles from './Reader.module.css';

const getItemFromLocation = location => queryString.parse(location.search).item;

export default class Reader extends Component {
  state = {
    currentArticle: 1,
    articles: publicationsJson,
  };

  componentDidMount() {
    // const { currentArticle } = this.state;
    const { location } = this.props;
    const parsed = getItemFromLocation(location);

    this.setState({ currentArticle: Number(parsed) });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentArticle } = this.state;
    const { history, location } = this.props;
    if (prevState.currentArticle !== currentArticle) {
      history.push({
        ...location,
        search: `item=${currentArticle}`,
      });
    }
  }

  handleIncrement = () => {
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle + 1,
    }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({
      currentArticle: prevState.currentArticle - 1,
    }));
  };

  render() {
    const { currentArticle, articles } = this.state;

    return (
      <div className={styles.reader}>
        <Publication item={articles[currentArticle - 1]} />
        <Counter
          currentArticle={currentArticle}
          articleQuantity={articles.length}
        />
        <Controls
          onHandleIncrement={this.handleIncrement}
          onHandleDecrement={this.handleDecrement}
          disablePrev={currentArticle === 1 ? 'true' : 'false'}
          disableNext={currentArticle === articles.length ? 'true' : 'false'}
        />
      </div>
    );
  }
}
