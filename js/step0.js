var app = new Vue({
  el: "#app",
  data: {
    isline_step:false,
    loading:false
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
    godown(){
      var ko=document.querySelector(".line_step0_change");
      // console.log(ko)
      if(this.isline_step==false){
        setTimeout(()=>{ 
          this.$alert('请选择买入方式', '提示', {
          confirmButtonText: '确定',
        });
        }, 30);
      }else{
        window.location.href='../s_tep9.html';
      }
    },
    godownele(){
      var ko=document.querySelector(".line_step0_change");
      // console.log(ko)
      if(this.isline_step==false){
        setTimeout(()=>{ 
          this.$alert('请选择卖出方式', '提示', {
          confirmButtonText: '确定',
        });
        }, 30);
      }else{
        window.location.href='../s_tep7.html';
      }
    },
    jump:function(){
      var ko=document.querySelector(".line_step0_change");
      // console.log(ko)
      if(this.isline_step==false){
        setTimeout(()=>{ 
          this.$alert('请选择一种策略类型', '提示', {
          confirmButtonText: '确定',
        });
        }, 30);
      }else{
        window.location.href='../s_tep2.html';
      }
    },
  }
});
