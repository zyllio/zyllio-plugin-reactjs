/// <reference types="@zyllio/zy-sdk" />

import ReactiveElements from 'reactive-elements';
import { ChartMetadata } from './line-chart.metadata';
import LineChart from "./LineChart";

console.log('Plugin Chart started')

export function App() {
  return <LineChart />;
}

const customElement = ReactiveElements(ChartMetadata.id, App, { useShadowDom: true })

// console.log('reactiveElements: ', customElement);

zySdk.services.registry.registerComponent(ChartMetadata, customElement)