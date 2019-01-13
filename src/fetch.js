import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      error: null,
      isFetching: false,
    };

    this.onFetch = this.onFetch.bind(this);
  }

  componentDidMount() {
    this.setState({ isFetching: true }, this.onFetch);
  }

  onFetch() {
    const { url, options } = this.props;

    fetch(url, options)
      .then(response => response.json())
      .then((data) => {
        this.setState({ isFetching: false, data });
      })
      .catch((error) => {
        this.setState({ isFetching: false, error });
      });
  }

  render() {
    return this.props.render(this.state);
  }
}

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  options: PropTypes.object,
  render: PropTypes.func.isRequired,
};

Fetch.defaultProps = {
  options: {},
  // render: () => <Fragment />,
};

export default Fetch;
