import React from 'react';
import PropTypes from 'prop-types';

class Fetch extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {},
      error: {},
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
    const { isFetching, data, error } = this.state;

    return (
      <div className="fetch-container">
        {isFetching && (<div className="is-fetching">Fetching...</div>)}
        {(!isFetching && data) && (<div className="data">{JSON.stringify(data)}</div>)}
        {(!isFetching && error) && (<div className="error">{JSON.stringify(error)}</div>)}
      </div>
    )
  }
}

// const Fetch = ({
//   url,
//   options,
//   children,
// }) => {
//   const [isInitialized, setInitialized] = useState(false);
//   const [data, setData] = useState({});
//   const [error, setError] = useState({});
//   const [isFetching, setFetching] = useState(false);
//
//   const onFetch = () => {
//     if (!isInitialized) {
//       setInitialized(true);
//
//       setFetching(true);
//
//       fetch(url, options)
//         .then(response = response.json())
//         .then((response) => {
//           setData(response);
//           setFetching(false);
//         })
//         .catch((error) => {
//           setError(error);
//           setFetching(false);
//         });
//     }
//   };
//
//   useEffect(onFetch);
//
//   return (
//     <div className="fetch-container">
//       {isFetching && (<div className="is-fetching">Fetching...</div>)}
//       {(!isFetching && data) && (<div className="data">{JSON.stringify(data)}</div>)}
//       {(!isFetching && error) && (<div className="error">{JSON.stringify(error)}</div>)}
//     </div>
//   );
// };

Fetch.propTypes = {
  url: PropTypes.string.isRequired,
  options: PropTypes.object,
  children: PropTypes.node,
  // children: function (props, propName, componentName) {
  //   const { [propName]: prop } = props;
  //
  // },
};

Fetch.defaultProps = {
  options: {},
  children: null,
};

export default Fetch;
