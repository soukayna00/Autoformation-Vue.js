//creating instance
new Vue ({
   el:  '#app',
   data:{
         message:'Soukayna',
         instructor:'Mohamed ',
         platforme:"<a href='https://www.youtube.com/watch?v=t_MracFTf3U'>my resource</a>",
         image:"https://se-tomo.com/wp/wp-content/uploads/2018/10/Vue.png",
         
         
  },
  //creating method
  methods:{
           saySalam: function(){
           return `Hello my dear fellow developper this is ${this.message}`;
          }
  }
})