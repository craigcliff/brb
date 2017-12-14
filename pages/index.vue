<template>

<header class="header">
 <div class = "header__bg1"> </div>
  <div class = "header__bg2"> </div>
        <div class = "header__bg3"> </div>

<div class="header__text-box">
                <h1 class="heading-primary">
                <transition name="fadeOne">
                    <span class="heading-primary--sub container"v-show="show">TEXT TEXT TEXT</span>
                   </transition>
                   <transition name="fadeTwo">
                       <div class="container" v-show="show">
                    <span class="heading-primary--main" >TEXT</span>
                    <span class="heading-primary--main" >TEXT</span>
                    <span class="heading-primary--sub">TEXT TEXT TEXT</span>
                    </div>
                         </transition>


            </h1>
            </div>

 </header>
</template>


<style lang="scss">

#demo {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}
#demo span {
  font-size: 10vw;
  font-weight: 400;
}
.color-1 {
  color: #ff6347;
}
.color-2 {
  color: #bada55;
}
.color-3 {
  color: #ff1493;
}
.color-4 {
  color: #09a;
}


.fadeOne-enter-active, .fadeOne-leave-active {
  transition: all .5s ease-out;
}
.fadeOne-enter, .fadeOne-leave-to {
  clip-path: polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%);
  transform: translate(0%, 100%);
}

.fadeTwo-enter-active, .fadeTwo-leave-active {
  transition: all .5s ease-out;
}
.fadeTwo-enter, .fadeTwo-leave-to {
  clip-path: polygon(0% 100%, 100% 100%, 0% 100%, 0% 100%);
  transform: translate(0%, -100%);
}


   .header{


   &__bg1{

 background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1.jpg);
    background-size: cover;
    background-position: top;
    position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
    	z-index:-6;

    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2));


    }
   }

    &__bg2 {height: 100Vh;

 background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-2.jpg);
    background-size: cover;
    background-position: top;
    position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
    opacity: 0;
	z-index:-3;

    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1.jpg);


    }





   }

&__bg3{

 background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-3.jpg);
    background-size: cover;
    background-position: top;
    position:fixed;
	top:0;
	left:0;
	width:100%;
	height:100%;
    opacity: 0;
    	z-index:-2;

    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1.jpg);


    }
   }


     &__text-box {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
    }

        
}





</style>

<script>
export default{
      data () {
    return {
      show: false,
      text: ['H', 'E', 'L', 'L', 'O'],
      text2: 'Hello'
    }
  },
 
 mounted: function(){
   
  this.show = true;



	var fade_speed = 3.5; /* in seconds (you can edit this) */
	var pause_length = 5; /* time each image is shown, in seconds (you can edit this) */

    var bgdiv2 = document.getElementsByClassName("header__bg2");

    var bgdiv3 = document.getElementsByClassName("header__bg3");
    console.log(bgdiv2);
	var tl = new TimelineMax({repeat:-1});
	var tlint = '+=' + pause_length;
	tl.to(bgdiv2, fade_speed, {opacity:1}, tlint); /* fade the 2nd background in */
	 tl.to(bgdiv3, fade_speed, {opacity:1}, tlint);
    tl.to(bgdiv2, fade_speed, {opacity:0}, tlint); /* and then fade it back out again */
   
    tl.to(bgdiv3, fade_speed, {opacity:0}, tlint);
  TweenMax.staggerFrom(
  this.text2, 
  0.25, 
  { opacity:0, y: 200, ease: Back.easeOut },
  0.08
);

 }
  }
</script>