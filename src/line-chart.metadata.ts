import { ComponentMetadataModel } from "@zyllio/zy-sdk";

const IconData = `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
    <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
  </svg>
`;

export const ChartMetadata: ComponentMetadataModel = {
  id: 'custom-chart',
  metadataVersion: 2,
  icon: IconData,
  label: 'Chart',
  category: 'Plugins',
  subCategory: 'Plugins',
  hidden: false,
  properties: [{
    id: 'title',
    name: 'Title',
    type: 'text',
    tootip: 'The text of the legend',
    default: 'Title',
  }, {
    id: 'data',
    name: 'Table',
    type: 'table',
    tootip: 'The table being used to populate',
    default: '',
    main: true
  }, {
    id: 'label',
    name: 'Label',
    type: 'column',
    tootip: '',
    default: '',
  }, {
    id: 'value',
    name: 'Value',
    type: 'column',
    tootip: '',
    default: '',
  }],
  styles: []
}