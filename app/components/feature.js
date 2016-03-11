import React from 'react';

import Challenge from './challenge';
import FEATURES from '../features/index';

export default class Feature extends React.Component {
  constructor(props) {
    super(props);
    this.state = { features: [] }
  }

  componentWillMount() {
    System.import(`app/features/${this.props.feature}.js`).then((features) => {
      this.setState({ features: features.default });
    });
  }

  fixtureLocation(feature) {
    return `${this.props.feature}/${feature.index}.js`;
  }

  resultLocation(feature) {
    if (feature.hasResults) {
      return this.fixtureLocation(feature);
    } else {
      return null;
    }
  }

  renderFeature(feature) {
    return (
      <div className="col-md-12 featureEntry" key={feature.index}>
        <Challenge
          results = { this.resultLocation(feature) }
          fixture = { this.fixtureLocation(feature) }
          title = { feature.title }
        >{ feature.content ? feature.content : null }</Challenge>
      </div>
    )
  }


  render() {
    // For some reasons `props` get overwritten post-constructor, so
    // we can't get that just once at constructor time and augment props
    // there :-/
    const featureTitle = FEATURES.find(feat => feat.key === this.props.feature).title
    return (
      <div>
        <h1>{ featureTitle || this.props.feature }</h1>
        { this.state.features.map((f) => this.renderFeature(f)) }
      </div>
    )
  }
}
