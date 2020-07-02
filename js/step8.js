var app = new Vue({
  el: "#app",
  data: {
    f1:1,
    f2:0,
    f3:0,
    input:'',
    input1:'',
    tableData: [{
      date: '2016-05-02',
      name: '买入',
      address: '6523',
      dell:'￥253'
    }, {
      date: '2016-05-04',
      name: '卖出',
      address: '6563.05',
      dell:'￥2453'
    }, {
      date: '2016-05-01',
      name: '买入',
      address: '62300',
      dell:'￥123'
    }, {
      date: '2016-05-03',
      name: '买入',
      address: '50000',
      dell:'￥253'
    },{
      date: '2016-05-03',
      name: '买入',
      address: '50000',
      dell:'￥253'
    },{
      date: '2016-05-03',
      name: '买入',
      address: '50000',
      dell:'￥253'
    }],
    tableData1: [{
      daty: '2016-05-02',
      gu_id: 'sh00725',
      gu_name: '京东方A',
      gu_dell:'买入',
      dell:'100',
      sell:'￥30',
      allsell:'￥3000'
    },{
      daty: '2016-05-02',
      gu_id: 'sh6000360',
      gu_name: '华微电子',
      gu_dell:'买入',
      dell:'500',
      sell:'￥2',
      allsell:'￥1000'
    },{
      daty: '2016-05-02',
      gu_id: 'sh603900',
      gu_name: '萊绅通灵',
      gu_dell:'买入',
      dell:'360',
      sell:'￥5.3',
      allsell:'￥1908'
    },{
      daty: '2016-05-02',
      gu_id: 'sh600506',
      gu_name: '香梨股份',
      gu_dell:'买入',
      dell:'68',
      sell:'￥9.7',
      allsell:'￥659.6'
    },{
      daty: '2016-05-02',
      gu_id: '0005123',
      gu_name: '大河网',
      gu_dell:'买入',
      dell:'46',
      sell:'￥12',
      allsell:'￥552'
    }]
  },
  created() {
    
  },
  methods: {
    changeactive(num){
      if(num==1){
        this.$set(this,'f1',1);
        this.$set(this,'f2',0);
        this.$set(this,'f3',0)
      }
      if(num==2){
        this.$set(this,'f1',0);
        this.$set(this,'f2',1);
        this.$set(this,'f3',0)
      }
      if(num==3){
        this.$set(this,'f1',0);
        this.$set(this,'f2',0);
        this.$set(this,'f3',1)
      }
    },
  }
});
