/// <reference types="@zyllio/zy-sdk" />

import reactToWebComponent from "react-to-webcomponent"
import React, { useEffect, useState, useCallback, CSSProperties } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import LineChart from "./LineChart";
import { ChartMetadata } from './line-chart.metadata';

console.log('Plugin Chart started')

interface Props {
  'data-table': any
  'data-labels': any
  'data-values': any
  'data-title': any
}

export function App(props: Props) {

  const [title, setTitle] = useState<string>(props['data-title']);
  const [labels, setLabels] = useState<string[]>([]);
  const [values, setValues] = useState<string[]>([]);

  const [color, setColor] = useState<string>('');

  const nodeRef = useCallback(node => {

    const style = getComputedStyle(node) as any
    
    setColor(style['color'])    

  }, [])

  useEffect(() => {

    async function init() {

      const titlePropertyValue = JSON.parse(props['data-title']) as StaticPropertyValueModel
      setTitle(titlePropertyValue.value)

      const tablePropertyValue = JSON.parse(props['data-table']) as TablePropertyValueModel
      const labelsPropertyValue = JSON.parse(props['data-labels']) as ColumnPropertyValueModel
      const valuesPropertyValue = JSON.parse(props['data-values']) as ColumnPropertyValueModel

      const tableId = tablePropertyValue.tableId
      const labelsColumn = labelsPropertyValue.columnName
      const valuesColumn = valuesPropertyValue.columnName

      const rows = await zySdk.services.storage.retrieveRows(tableId)

      const labelsColumnIndex = rows?.labels.findIndex(l => l === labelsColumn)
      const valuesColumnIndex = rows?.labels.findIndex(l => l === valuesColumn)

      const newLabels = rows?.values.map(row => row[labelsColumnIndex!])
      const newValues = rows?.values.map(row => row[valuesColumnIndex!])

      setLabels(newLabels || [])
      setValues(newValues || [])
    }

    init()

  }, [props['data-title'], props['data-table'], props['data-labels'], props['data-values']]);

  
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
  'data-table': PropTypes.string.isRequired,
  'data-labels': PropTypes.string.isRequired,
  'data-values': PropTypes.string.isRequired,
  'data-title': PropTypes.string.isRequired
}

const customElement = reactToWebComponent(App, React, ReactDOM, { shadow: true })

zySdk.services.registry.registerComponent(ChartMetadata, customElement)