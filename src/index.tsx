/// <reference types="@zyllio/zy-sdk" />
/// <reference types="prop-types" />

import { ChartMetadata } from './line-chart.metadata';
import LineChart from "./LineChart";
import reactToWebComponent from "react-to-webcomponent"
import React from 'react';
import ReactDOM from 'react-dom';


console.log('Plugin Chart started')


interface Props {
  'data-table': PropertyValueModel
}

export function App(props: Props) {

console.log('props: ', props);

  
  return <LineChart />;
}

(App as any).propTypes = { 
  'data-table': PropTypes.string.isRequired
}

const customElement = reactToWebComponent(App, React, ReactDOM, { shadow: true })

zySdk.services.registry.registerComponent(ChartMetadata, customElement)

setTimeout( () => {

  // const propertyValue = zySdk.services.component.getPropertyValue(customElement, 'table')
  // console.log('propertyValue: ', propertyValue);

})