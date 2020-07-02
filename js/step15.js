var app = new Vue({
  el: "#app",
  data: {
    radio: '1'
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
      // console.log(this.checkList.length);
      if(this.checkList.length==0){
        this.$message.error("请至少选择一项数据类型");
        return
      }
      window.location.href="./s_tep4.html"
    },
    docu(){
      if(this.checkListli.length==0){
        this.$message.error("请至少选择一项数据类型");
        return
      }
      window.location.href="./s_tep7.html"
    },
    godownten(){
      if(this.checkListen.length==0){
        this.$message.error("请至少选择一项技术指标因子");
        return
      }
      window.location.href="./s_tep10.html"
    }
  }
});

