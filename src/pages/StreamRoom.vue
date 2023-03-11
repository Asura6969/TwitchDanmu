<template>
  <div class="container">
    
    <iframe
    v-bind:src="'https://player.twitch.tv/?channel='+this.$route.params.username+'&parent=streamernews.example.com&muted=true'"  
    id = "embed"
    allowfullscreen>

</iframe>
    <div id= "danmucon">
      <!--  <div class = "track" id = "t0">

        </div>
        <div class = "track" id = "t1">

        </div>
        <div class = "track" id = "t2">

        </div>
        <div class = "track" id = "t3">
            
        </div>
        <div class = "track" id = "t4">
            
        </div>
        <div class = "track" id = "t5">
            
        </div>
        <div class = "track" id = "t6">
            
        </div>
        <div class = "track" id = "t7">
            
        </div>
        <div class = "track" id = "t8">
            
        </div>
        <div class = "track" id = "t9">
            
        </div>
        <div class = "track" id = "t10">
            
        </div>
        <div class = "track" id = "t11">
            
        </div>
        <div class = "track" id = "t12">
            
        </div>
        <div class = "track" id = "t13">
            
        </div>
        <div class = "track" id = "t14">
            
        </div>
        <div class = "track" id = "t15">
            
        </div>
        <div class = "track" id = "t16">
            
        </div>
        <div class = "track" id = "t17">
            
        </div>
        <div class = "track" id = "t18">
            
        </div>
        <div class = "track" id = "t19">
            
        </div>
        <div class = "track" id = "t20">
            
        </div>
        <div class = "track" id = "t21">
            
        </div>
        <div class = "track" id = "t22">
            
        </div>
        <div class = "track" id = "t23">
            
        </div>
        <div class = "track" id = "t24">
            
        </div>        
        <div class = "track" id = "t25">
            
        </div>
        <div class = "track" id = "t26">
            
        </div>
        <div class = "track" id = "t27">
            
        </div>
        <div class = "track" id = "t28">
            
        </div>
        <div class = "track" id = "t29">
            
          </div>
          <div class = "track" id = "t30">
            
          </div>
          <div class = "track" id = "t31">
            
          </div>
          <div class = "track" id = "t32">
            
          </div>
          <div class = "track" id = "t33">
            
          </div>
          <div class = "track" id = "t34">
            
          </div>
          <div class = "track" id = "t35">
            
          </div>
          <div class = "track" id = "t36">
            
          </div>
          <div class = "track" id = "t37">
            
          </div>
          <div class = "track" id = "t38">
            
          </div>
          <div class = "track" id = "t39">
            
          </div>
          <div class = "track" id = "t40">
            
          </div>-->

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
</div>
</template>

<script>
import tmi from "tmi.js";
import emoteParser from "tmi-emote-parse";
import $ from "jquery"
export default {
  //TO DO
  //FINISH CONTROLLER 
  //ADD TO GITHUB AND README
  //ADD CHATTING BOX TO CHAT(LOGIN, HIGHLIGHTING MESSAGE)
  //DEPLOY

  name: 'App',
  components: {
  },
  async created(){
    var sliders = await document.getElementsByClassName("slider");
    for(var i=0; i<sliders.length; i++) {
      sliders[i].addEventListener('input', function() {
        
        document.getElementById(this.getAttribute('id')+'1').innerText = this.value;
      });
    }
    const channelname = this.$route.params.username;
    const client = new tmi.Client({
      channels: [channelname]
    });
    emoteParser.setTwitchCredentials(
      "91ddz57gwtygmg71k8006gx5l7sj0f",
      "i0rrtowlfx99tztq1wm6vq44chc575"
    );
    emoteParser.loadAssets(channelname);
    var tracksize = Math.floor(window.innerHeight/30);
    $(window).on('resize', function(tracksize){
      tracksize = Math.floor(window.innerHeight/30);
      console.log(tracksize)
    })
    const track = new Array(tracksize).fill(true);
    client.connect();
    client.on("message", (channel, tags, message, self) => {
      
      // "Alca: Hello, World!"
      const Message = emoteParser.replaceEmotes(message, tags, channel, self);
      console.log(Message);
      if(Message.length < 200){
        loadchat(Message, allocate(), message.length);
      }
      
    });
    
    
    var textsize = 20;
    
    var root = document.querySelector(':root');

    root.style.setProperty('--mesheight', (textsize+10)+'px');
    function allocate() {
      for (var i = 0; i < tracksize; i++) {
        if (track[i] == true) {
          track[i] = false;
          return i;
        }
      }
    }

    function randomColor() {
      return (
        "#" + ("00000" + ((Math.random() * 16777216) << 0).toString(16)).substr(-6)
      );
    }

    function loadchat(message, num, length) {
      if(num != undefined){
      var randomId = Math.floor(Math.random() * 10000);
      //"#t" + num
      $("#danmucon").append(
        '<div class = "message" id = "' +
          randomId +
          '" style= "animation: scrollTo linear 20s 1;position:absolute;font-size:' +
          textsize +
          "px;color:" +
          randomColor() +
          ";top:"+(textsize+10)*num+'px">' +
          message +
          "</div>"
      );
      setTimeout(function () {
        track[num] = true;
      }, length * 60);

      setTimeout(function () {
        $("#" + randomId).remove();
      }, 15000);
      }
    }
    

      }
}
</script>

<style>
:root{
  --mesheight: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
img{
  width: auto;
  height: 100%;
}
.message{
    height: var(--mesheight);
    white-space: nowrap;
    display: flex;
    align-items: center
    
}
#danmucon{
    height: auto;
    width: 100%;
    position: absolute;
    top: 0px;
    left:0px;
    z-index: 1000;
    font-weight: bold;
    pointer-events:none
}

#embed{
    width: 100%;
    height: 100vh;
    border: none;
}
body{
    overflow: hidden;
    margin: 0px;
}
.container{
    width: 100%;
    height: 100vh;
    position: relative;
}
@keyframes scrollTo {
    from{
        left:100%;
    }
    to{
        left:-100%;
        
    }
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



