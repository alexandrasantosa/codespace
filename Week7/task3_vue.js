var app = new Vue({
    el: '#vue',
    data: {
      mcount: '',
      menu:false,
      background_value:'',
      background_color:'',
      post_content_input:'',
      post_color_input:'',
      post_repeat_input:1,
      post_data:[{time:new Date(),content:"hi" , color:''}]

    },

    methods:{
        new_post:function(){
            for(let i=0;o<this.post_repeat_input;i++){
            this.post_data.push({time:new Date(),content:this.post_content_input ,color:this.post_color_input});
            }
        }
    }
  });
