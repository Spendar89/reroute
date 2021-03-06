import React from 'react';
import Router from './Router';

export default function createProvider ({ plugins, store }) {
  const router = new Router(plugins, store);

  return class Provider extends React.Component {
    static childContextTypes = {
      route: React.PropTypes.func,
      subscribe: React.PropTypes.func,
      state: React.PropTypes.object
    };

    getChildContext () {
      return {
        state: router.state,
        route: router.route.bind(router),
        subscribe: router.subscribe.bind(router)
    };

    render () {
      return (
        <div>
          { this.props.children }
        </div>
      );
    };
  };
};
