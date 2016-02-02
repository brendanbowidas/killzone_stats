import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchData, setName } from '../actions/index';

 class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  _onInputChange(e) {
    this.setState({
      term: e.target.value
    });
  };

  _onFormSubmit(e){
    e.preventDefault();
    this.props.fetchData(this.state.term)
    .then((response) => {
      this.props.setName(this.state.term);
      this.setState({term: ''});

    })
  }
  render() {
    return(
      <div className="playerList container">
        <div className="row">
              <div className="col-xs-12 col-md-8 col-md-offset-2">
                  <img className="img-responsive" src="img/killzone.png"/>
              </div>
          </div><br/>
        <div className="row">
        <form onSubmit={(e) => this._onFormSubmit(e)}
          className="input-group col-xs-12 col-md-8 col-md-offset-2" >
          <input type="text"
            placeholder="Enter a PSN ID (case sensitive)"
            className="form-control"
            value={this.state.term}
            autofocus="true"
            onChange={(e) => this._onInputChange(e)}
          />

          <span className="input-group-btn">
            <button type="submit" className="btn btn-primary">
            Submit
            </button>
          </span>

        </form>
        </div>

      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchData, setName }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
