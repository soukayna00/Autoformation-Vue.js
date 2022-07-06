//creating instance
new Vue ({
   el:  '#app',
   data:{
         message:'Soukayna',
         instructor:'Mohamed '
  },
  //creating method
  methods:{
           saySalam: function(){
           return `Hello my dear fellow developper this is ${this.message}`;
          }
  }
})