<template>
    <div class="hello">
      <form @submit.prevent="opentwitch">
        <input v-model = "channelname" placeholder="enter a channel" class = "channel">
        <button type= "submit">&#x21A9;</button>
      </form>
        
    </div>
    <div class = "settings">
      <table class = "settingcontainer">
        <tr class = "row1">
        <th class = "title">Speed</th>
        <th><input type="range" min="50" max="150" value="50" class="slider" id="speed"></th>
        <th id = "speed1">50</th>
        </tr>
      <tr class = "row1">
        <th class = "title">Transparency</th>
        <th><input type="range" min="1" max="100" value="100" class="slider" id="trans"></th>
        <th id = "trans1">100</th>
      </tr>
      <tr class = "row1">
        <th class = "title">Font Size</th>
      <th><input type="range" min="50" max="150" value="100" class="slider" id="size"></th>
        <th id = "size1">100</th>

      </tr>
      <tr class = "row1">
        <th class = "title">Position</th>
      </tr>
      <tr class = "row1">
        <th><button class = "danmubutton">FullScreen</button></th>
        <th><button class = "danmubutton">HalfScreen</button></th>
        <th><button class = "danmubutton">OneForthScreen</button></th>
      </tr>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    components: {
  },
  async created(){
    var sliders = await document.getElementsByClassName("slider");
for(var i=0; i<sliders.length; i++) {
  sliders[i].addEventListener('input', function() {
    
    document.getElementById(this.getAttribute('id')+'1').innerText = this.value;
  });
}




  },
    methods:{
      
      
      opentwitch: function(){
        this.$router.push(this.channelname);
      }
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  .channel{
    width: 249px;
    height: 50px;
    font-size: 30px;
  }
  button{
    width: 100px;
    height: 56px;
  }
  form{
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .settings{
    position: absolute;
    right: 400px;
    bottom: 10px;
    margin: 0;
    width: 24px;
    height: 24px;
    background: black;
  }
  .settingcontainer{
    width: 340px;
    display: none;
    background: pink;
    height: 186px;
    border-radius: 10px;
    position: absolute;
    bottom: 24px;
    right: 0px;
    flex-direction: column;
  }
  .settings:hover .settingcontainer{
    display: flex;
  }
  .slider{
    display: inline-block;
    
  }
  .row1{
    
    display: flex;
  }
  .title{
    width: 120px;    
  }
  .danmubutton{
    width:110px;
    
  }
  </style>
  