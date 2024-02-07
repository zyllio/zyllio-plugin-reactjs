import reactToWebComponent from "react-to-webcomponent"
import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { ListColumnItemsModel } from "@zyllio/zy-sdk";

import LineChart from "./LineChart";
import { ChartMetadata } from './line-chart.metadata';

console.log('Plugin Chart started')

interface Props {
  data: ListColumnItemsModel
  title: string
}

export function App(props: Props) {

  const [title, setTitle] = useState<string>(props.title)

  const [labels, setLabels] = useState<string[]>([])

  const [values, setValues] = useState<string[]>([])

  const [color, setColor] = useState<string>('')

  const nodeRef = useCallback(node => {

    const style = getComputedStyle(node) as CSSStyleDeclaration

    setColor(style['color'])

  }, [])

  useEffect(() => {

    setTitle(props.title)

    const labels = props.data.items.map(row => row.label)

    const values = props.data.items.map(row => row.value)

    setLabels(labels || [])
    setValues(values || [])

  }, [props.title, props.data]);


  const style: CSSProperties = {
    width: '100%',
    height: '400px',
    padding: '10px',
    boxSizing: 'border-box',
    color: 'var(--color)',
  }

  if (labels.length === 0) {
    return 'Loading...'
  } else {
    return <div style={style} ref={nodeRef}>
      <LineChart title={title} labels={labels} values={values} color={color} />
    </div>;
  }
}

/* Cast prevents Treeshaking ?? */
App.propTypes = {
  'data': PropTypes.string.isRequired,
  'title': PropTypes.string.isRequired
}

const customElement = reactToWebComponent(App, React, ReactDOM, { shadow: true })

zySdk.services.registry.registerComponent(ChartMetadata, customElement)