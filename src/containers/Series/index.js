import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";

class Series extends Component {
  state = {
    series: [],
    seriesName: "",
    isFetching: false
  };

  onSeriesInputChange = e => {
    this.setState({ seriesName: e.target.value, isFetching: true });

    fetch(`https://api.tvmaze.com/search/shows?q=${e.target.value}`)
      .then(response => response.json())
      .then(json => this.setState({ series: json, isFetching: false }));
    // console.log (e)
    // console.log (e.target.value)
  };

  render() {
    const { series, seriesName, isFetching } = this.state;

    return (
      <div>
        <Intro message="Here you can find all of your most loved series" />
        {/* Search form: */}
        <div className="SearchForm">
          <input
            className="SearchForm-input"
            type="text"
            placeholder="Search..."
            value={seriesName}
            onChange={this.onSeriesInputChange}
          />
        </div>

        {/* Check for typing: */}
        {!isFetching && series.length === 0 && seriesName.trim() === "" && (
          <p>
            <em>Please enter series name into the input</em>
          </p>
        )}
        {!isFetching && series.length === 0 && seriesName.trim() !== "" && (
          <p>
            <em>No TV series have been found with this name</em>
          </p>
        )}

        {/* Showing info: */}
        {isFetching && <Loader />}
        {!isFetching && <SeriesList list={this.state.series} />}
      </div>
    );
  }
}

export default Series;
