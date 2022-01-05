/// <reference types="@zyllio/zy-sdk" />

// import ReactiveElements from 'reactive-elements';
import { ChartMetadata } from './line-chart.metadata';
import LineChart from "./LineChart";
import reactToWebComponent from "react-to-webcomponent"
import React from 'react';
import ReactDOM from 'react-dom';

console.log('Plugin Chart started')

export function App() {
  return <LineChart />;
}

const customElement = reactToWebComponent(App, React, ReactDOM);

// const customElement = ReactiveElements(ChartMetadata.id, App, { useShadowDom: true })

// console.log('reactiveElements: ', customElement);

zySdk.services.registry.registerComponent(ChartMetadata, customElement)