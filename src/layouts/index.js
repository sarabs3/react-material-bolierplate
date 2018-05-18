import React from 'react';
import Content from '../components/content';

class BasicLayout extends React.Component {
  render() {
    return (
      <div>
        <div className="header" />
        <div className="sidebar" />
        <div className="content">
          <Content />
        </div>
      </div>
    );
  }
}

export default BasicLayout;
