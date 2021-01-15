import './scss/index.scss';
import {Spreadsheet} from '@/components/shreadsheet/Spreadsheet';
import {Toolbar} from '@/components/toolbar/Toolbar';
import {Table} from '@/components/table/Table';
import {Formula} from '@/components/formula/Formula';
import {Header} from '@/components/header/Header';

const spreadsheet = new Spreadsheet('#app', {
  components: [Header, Toolbar, Formula, Table]
})

spreadsheet.render()
