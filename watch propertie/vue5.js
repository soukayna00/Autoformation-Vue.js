new Vue ({
  el: "#app5",
  data:{
         counter:0,
         initiat:0,
         message:''
       },

  methods:{
            increment: function(step){
            this.counter +=step;
           },
            decrement: function(step){
            this.counter -=step;
           } ,
          //  calcul: function(){
          //   console.log('calcul methode');
          //   return this.counter* this.initiat;
          //   },
          },
          // computed améliore la perfermance du site n'apllique pas plusieur methode répeter
          //computed considére fonction calcul comme variable
          computed:{
            calcul: function(){
              console.log('calcul methode');
              return this.counter* this.initiat;
              },
          },
          watch:{
            calcul : function(value){
            if(value>10){
              this.message='winner';
            }
            else{
              this.message='loser';
            }
            }
          }

  

  })