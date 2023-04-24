import { createStore } from 'vuex'

export default createStore({
  state: {
    defaultRecords:[
      {index:1,
        action:'',
        nameOfOne:[],
        price:5,
        count:2,
        name:'kkk',
        total:5
      },
      {index:2,
        action:'',
        nameOfOne:[],
        price:5,
        count:2,
        name:'kkk',
        total:5
      },

      {index:3,
        action:'',
        nameOfOne:[],
        price:5,
        count:2,
        name:'kkk',
        total:5
      },
    ],
    nameOfOneList:[
      {name:'Мраморный щебень фр. 2-5 мм, 25кг'},
      {name:'Мраморный щебень фр. 2-5 мм, 25кг (Белый)'},
      {name:'Мраморный щебень фр. 2-5 мм, 25кг (вайт)'},
      {name:'Мраморный щебень фр. 2-5 мм, 25кг, возврат'},
      {name:'Мраморный щебень фр. 2-5 мм, 25кг, 1т'}
    ],
    columnDefsStore:[
      { field:'index', headerName: '', minWidth: 50,width:50 , rowDrag: true},
      { field:'action',headerName: '', minWidth: 25, width:30,  cellRenderer:'actionCellRenderer'},
      { field:'nameOfOne',headerName: 'Наименование единицы', flex: 1, cellRenderer:'nameOfOneCellRenderer' },
      { field:'price',headerName: 'Цена', flex: 1 },
      { field:'count',headerName: 'Кол-во', flex: 1 },
      { field:'name',headerName: 'Название товара', flex: 1 },
      { field:'total',headerName: 'Итого', flex: 1 },

    ]
  },
  getters: {
  },
  mutations: {
    setNamesOfOneListInRecords(state){

      state.defaultRecords.map((item)=>{
        item.nameOfOne=state.nameOfOneList
      })


    }
  },
  actions: {
  },
  modules: {
  }
})
