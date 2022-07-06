new Vue ({
  el: "#app2",
  data:{
         counter:0
       },

  methods:{
      increment: function(step){
      this.counter +=step;
    },
     decrement: function(step){
      this.counter -=step;
     }
    } 

  })