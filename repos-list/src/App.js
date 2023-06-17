import logo from './logo.svg';
import React from 'react';
import './App.css';
import List from './List.js';
import Withholding from './List.js';

const ListWithLoading = Withholding(List);

class App extends React.Component {
    state = {
    {
      loading: false,
      repos: null
    };

    componentDidMount() {
      this.setState( { loading: true});
      fetch(`https://api.github.com/users/hacktivist123/repos`)
      .then((json) => json.json())
      .then((repos) => {
        this.setState({ loading: false, repos: repos });
      });
    }
    render() {
      return (
        <ListWithLoading
          isLoading={this.state.loading}
          repos={this.state.repos}
        ></ListWithLoading>
      )
    }
  }
}

export default App;
