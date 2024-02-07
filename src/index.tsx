import reactToWebComponent from "react-to-webcomponent"
import React, { useState, useCallback, CSSProperties } from 'react';
import ReactDOM from 'react-dom';

import { ListColumnItemsModel } from "@zyllio/zy-sdk";

import LineChart from "./LineChart";
import { ChartMetadata } from './line-chart.metadata';

console.log('Plugin Chart started')

interface Props {
  data: ListColumnItemsModel
  title: string
}

export function App({ title, data }: Props) {
  console.log('title, data', title, data)

  const labels = (data) ? data.items.map(row => row.label) : []

  const values = (data) ? data.items.map(row => row.value) : []

  const [color, setColor] = useState<string>('')

  const nodeRef = useCallback(node => {

    const style = getComputedStyle(node) as CSSStyleDeclaration

    setColor(style['color'])

  }, [])

  const style: CSSProperties = {
    width: '100%',
    height: '400px',
    padding: '10px',
    boxSizing: 'border-box',
    color: 'var(--color)',
  }

  if (data === undefined) {
    return 'Loading...'
  } else {
    return <div style={style} ref={nodeRef}>
      <LineChart title={title} labels={labels} values={values} color={color} />
    </div>;
  }
}

const customElement = reactToWebComponent(App, React, ReactDOM, {
  props: {
    'data': 'object',
    'title': 'string'
  }
})


zySdk.services.registry.registerComponent(ChartMetadata, customElement)