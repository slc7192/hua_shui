var app = new Vue({
  el: "#app",
  data: {
    value: '',
    input1: '',
    value3:'',
    valu1:'',
    valu2:'',
    valu3:'',
    valu4:'',
    inpt1:'',
    inpt2:'',
    inpt3:'',
    inpt4:'',
  },
  created() {
    
  },
  methods: {
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
    changeSwitch(row){
      // console.log(row);
    },
    godown(){
      if(this.valu1=='' || this.valu2=='' || this.valu3=='' || this.valu4==''){
        this.$message.error("请确认日均值的范围");
          return;
      }else if(this.inpt1=='' || this.inpt2=='' || this.inpt3=='' || this.inpt4==''){
        this.$message.error("请确认值的内容");
        return;
      }
       window.location.href="../s_tep6.html";
    },
    godown9(){
      if(this.valu1=='' || this.valu2=='' || this.valu3=='' || this.valu4==''){
        this.$message.error("请确认日均值的范围");
          return;
      }else if(this.inpt1=='' || this.inpt2=='' || this.inpt3=='' || this.inpt4==''){
        this.$message.error("请确认值的内容");
        return;
      }
       window.location.href="../s_tep10.html";
    }
  }
});
