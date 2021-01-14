import './scss/index.scss';
import {Spreadsheet} from '@/components/shreadsheet/Spreadsheet';

const spreadsheet = new Spreadsheet('#app', {
  components: []
})

console.log('Spreadsheet', spreadsheet)
