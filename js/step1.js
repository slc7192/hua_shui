var app = new Vue({
  el: "#app",
  data: {
    value1: '',
    value2: '',
    selec:'',
    contr:'',
  },
  created() {
  },
  methods: {
    godown(){
     console.log(this.selec,this.contr,this.value1,this.value2)
     if(this.selec==''){
      this.$message.error('请选择绩效基准的内容');
      return;
     };
     if(this.contr==''){
      this.$message.error('请确认初始资金的金额');
      return;
     };
     if(this.value1=='' || this.value1==null){
      this.$message.error('请选择开始的日期');
      return;
     };
     if(this.value2=='' || this.value2==null){
      this.$message.error('请选择结束的日期');
      return;
     };
     window.location.href="../s_tep3.html"
    },
    
  }
});
