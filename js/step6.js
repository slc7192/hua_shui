var app = new Vue({
  el: "#app",
  data: {
    tableData: [{
      date: 'sh000001',
      name: '000001',
      address: '上证指数',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }, {
      date: 'sh00725',
      name: '000725',
      address: '京东方A',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }, {
      date: 'sh6000360',
      name: '6000360',
      address: '华微电子',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }, {
      date: 'sh603900',
      name: '603900',
      address: '萊绅通灵',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }, {
      date: 'sh600506',
      name: '600506',
      address: '香梨股份',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }, {
      date: 'sh603229',
      name: '603229',
      address: '亚翔集成',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }, {
      date: 'sh603336',
      name: '603336',
      address: '宏辉果蔬',
      jingzhi:'0.0988',
      guzhi:'1.116',
      shang:'+0.002%',
      jian:'-1.63%'
    }],
    tableData1: [],
    value:[],
    val:'',
    multipleSelection: [],
    line_chi:''
  },
  created() {
    
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
      this.value=val;
      this.tableData1=val

    },
    deleteRow(index, rows) {
      console.log(rows)
      rows.splice(index, 1);
    },
    gitint(){
      console.log(this.value[0])
      this.tableData1=this.value[0]
    },
    line(obj){
      if(obj){
        this.isline_step=true;
        this.loading=false;
      }else{
        this.loading=true;
        this.isline_step=false;
      }
    },
    goBack(){
      window.history.go(-1);	             
    },
    jump:function(){
      var ko=document.querySelector(".line_step0_change");
      console.log(ko)
      if(ko==null || ko==''){
        this.$alert('请选择一种策略类型', '提示', {
          confirmButtonText: '确定',
        });
      }else{
        window.open('./step1.html');
      }
    },
    godown(){
      console.log(this.tableData1)
      var datalength=this.tableData1.length;
      if(datalength<=0){
        this.$message.error('请至少选择一种股票');
        return;
      }
      window.location.href="../s_tep5.html";
    },
  }
});
