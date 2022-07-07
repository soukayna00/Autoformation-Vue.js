new Vue ({
  el: "#app7",
  data:{
         counter:0,
         initiat:0,
         message:'',
         result:false,
         toggle:false,
         courses:[
          {id:1,title:'google'},
          {id:1,title:'google2'},
          {id:1,title:'google4'}
         ],
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
              classObject : function(){
                return {'bg-success':this.result,'bg-warning':!this.result}
              }
          },
          watch:{
            calcul : function(value){
            if(value>10){
              this.result=true;
              this.message='winner';
            }
            else{
              this.result=false;
              this.message='loser';
            }
            }
          }

  

  })