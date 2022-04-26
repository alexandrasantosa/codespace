var app = new Vue({
    el: '#vue',
    data: {
      mcount: '',
      menu:false,
      background_value:'',
      background_color:'',
      post_content_input:'',
      post_data:[{time:new Date(),content:"hi"}]

    },

    methods:{
        new_post:function(){
            this.post_data.push({time:new Date(),content:this.post_content_input});
        }
    }
  });
