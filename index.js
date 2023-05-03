const { Table } = require('voici.js')

const table = new Table([
  {
    id: 'foo',
    URL: 'https://www.example.com/?iamverylonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong',
    note: 'very short note'
  }
], {
  header: {
    width: 'auto',
    displayNames: {
      note: 'long-header-display-name',
    }
  }
});

table.print();
