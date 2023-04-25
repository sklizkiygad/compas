import { createStore } from 'vuex'

export default createStore({
  state: {
    defaultRecords:[
      {index:1,
        action:'',
        nameOfOne:[],
        price:5,
        count:1,
        name:'kkk',
        total:5
      },
      {index:2,
        action:'',
        nameOfOne:[],
        price:12,
        count:1,
        name:'kkk',
        total:5
      },

      {index:3,
        action:'',
        nameOfOne:[],
        price:250,
        count:1,
        name:'kkk',
        total:250
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
      { field:'nameOfOne',headerName: 'Наименование единицы',minWidth: 150, flex: 1, cellRenderer:'nameOfOneCellRenderer' },
      { field:'price',headerName: 'Цена', flex: 1, cellRenderer:'priceCellRenderer' },
      { field:'count',headerName: 'Кол-во', flex: 1, cellRenderer:'countCellRenderer' },
      { field:'name',headerName: 'Название товара', flex: 1,  cellRenderer:'nameCellRenderer' },
      { field:'total',headerName: 'Итого', flex: 1,  cellRenderer:'totalCellRenderer' },
    ],

  },
  getters: {
  },
  mutations: {
    setNamesOfOneListInRecords(state){
      state.defaultRecords.map((item)=>{
        item.nameOfOne=state.nameOfOneList
        item.name=state.nameOfOneList
      })
    },

    setInfoInRecord(state,dataRecord){
     state.defaultRecords.forEach(record=>{
       if(record.index===dataRecord.recordId){
         record[dataRecord.keyData]= +dataRecord.value
          record.total=record.price*record.count
       }
     })

      },

    setColumnDefsStore(state,dataRecord){
      state.columnDefsStore=dataRecord
      let newDataColumns=JSON.parse(localStorage.getItem('compas'))

      newDataColumns.columnDefsStore=state.columnDefsStore

      localStorage.setItem('compas',JSON.stringify(newDataColumns))
    },

    getLocalStorageData(state,stateData){
      state.columnDefsStore= stateData.columnDefsStore
      state.defaultRecords= stateData.defaultRecords
    },

    addRecord(state){
      state.defaultRecords=[...state.defaultRecords,
        {index:state.defaultRecords[state.defaultRecords.length-1].index+1,
        action:'',
        nameOfOne:[],
        price:12,
        count:1,
        name:'kkk',
        total:5
      }]

      let newDataRecords=JSON.parse(localStorage.getItem('compas'))
      newDataRecords.defaultRecords=state.defaultRecords
      localStorage.setItem('compas',JSON.stringify(newDataRecords))
    },


    deleteRecord(state,dataRecord){

      state.defaultRecords=state.defaultRecords.filter(item=>item.index !== dataRecord.index)

      let newDataRecords=JSON.parse(localStorage.getItem('compas'))
      newDataRecords.defaultRecords=state.defaultRecords
      localStorage.setItem('compas',JSON.stringify(newDataRecords))
    }




  },
  actions: {
  },
  modules: {
  }
})
