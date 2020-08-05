import React, { Component } from "react";
import Loader from "../../components/Loader";
import "./index.css";

class SingleSeries extends Component {
  state = {
    show: null
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    fetch(`https://api.tvmaze.com/shows/${id}?embed=episodes`)
      .then(response => response.json())
      .then(json => this.setState({ show: json }));
  }

  render() {
    const { show } = this.state;
    console.log(show);

    return (
      <div>
        <p>
          <a href="/" alt="Back to Homepage">
            Back to search
          </a>
        </p>
        {show === null && <Loader />}
        {show !== null && (
          <div className="Show">
            <h3 className="Show-name">{show.name}</h3>
            <p>
              <img src={show.image.medium} alt="Thumbnail" />
            </p>
            <div style={{ textAlign: "left" }}>
              <p className="Show-infoItem">Premiered: {show.premiered}</p>
              <p className="Show-infoItem">Rating: {show.rating.average}</p>
              <p className="Show-infoItem">Url: {show.url} </p>
              <p className="Show-infoItem">Summary: {show.summary}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default SingleSeries;
