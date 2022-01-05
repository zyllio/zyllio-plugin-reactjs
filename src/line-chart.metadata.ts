const IconData = `
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="24" height="24" viewBox="0 0 24 24" fill="#cccccc">    
    <path d="M16,11.78L20.24,4.45L21.97,5.45L16.74,14.5L10.23,10.75L5.46,19H22V21H2V3H4V17.54L9.5,8L16,11.78Z" />
  </svg>
`;

export const ChartMetadata: ComponentMetadataModel = {
  id: 'custom-chart',
  icon: IconData,
  label: 'Chart',
  category: 'Basics',
  subCategory: 'Plugins',
  hidden: false,
  keepRatio: false,
  properties: [/*{
    id: 'table',
    name: 'Table',
    type: PropertyTypes.Table,
    tootip: 'The table being used to populate',
    default: '',
    main: true
  }, {
    id: 'labels',
    name: 'Labels',
    type: PropertyTypes.Column,
    tootip: '',
    default: '',
  }, {
    id: 'values',
    name: 'Values',
    type: PropertyTypes.Column,
    tootip: '',
    default: '',
  }*/],
  styles: [{
    id: 'width',
    name: 'Width',
    type: 'width',
    default: '340px'
  },
  {
    id: 'height',
    name: 'Height',
    type: 'height',
    default: '30px'
  }, {
    id: '--color',
    name: 'Color',
    type: 'color',
    default: '#fca311'
  }  
  ]
}