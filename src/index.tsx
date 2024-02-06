import reactToWebComponent from "react-to-webcomponent"
import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import LineChart from "./LineChart";
import { ChartMetadata } from './line-chart.metadata';

console.log('Plugin Chart started')

interface Props {
  data: any
  labels: any
  values: any
  title: any
}

export function App(props: Props) {

  const [title, setTitle] = useState<string>(props.title)

  const [labels, setLabels] = useState<string[]>([])

  const [values, setValues] = useState<string[]>([])

  const [color, setColor] = useState<string>('')

  const nodeRef = useCallback(node => {

    const style = getComputedStyle(node) as any
    
    setColor(style['color'])    

  }, [])

  useEffect(() => {

    async function init() {

      console.log('props', props)

      setTitle(props.title)

      const rows = props.data
      console.log('rows', rows)

      // const labelsColumnIndex = rows?.labels.findIndex(l => l === labelsColumn)
      // const valuesColumnIndex = rows?.labels.findIndex(l => l === valuesColumn)

      const newLabels = rows.items    ?.values.map(row => row[labelsColumnIndex!])
      // const newValues = rows?.values.map(row => row[valuesColumnIndex!])

      // setLabels(newLabels || [])
      // setValues(newValues || [])
    }

    init()

  }, [props.title, props.data, props.labels, props.values]);

  
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
(App as any).propTypes = {
  'data': PropTypes.string.isRequired,
  'labels': PropTypes.string.isRequired,
  'values': PropTypes.string.isRequired,
  'title': PropTypes.string.isRequired
}

const customElement = reactToWebComponent(App, React, ReactDOM, { shadow: true })

zySdk.services.registry.registerComponent(ChartMetadata, customElement)