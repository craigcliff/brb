<template>

<header class="header">
 <div class = "header__bg1"> </div>
  <div class = "header__bg2"> </div>
        <div class = "header__bg3"> </div>

<div class="header__text-box">
                <h1 class="heading-primary" style="background-image: linear-gradient(
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
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1-mob.jpg);


    }"
                >
                
                    <span class="heading-primary--sub container"v-show="show">TEXT TEXT TEXT</span>
        
                       <div class="container" v-show="show">
                    <span class="heading-primary--main" >TEXT</span>
                    <span class="heading-primary--main" >TEXT</span>
                    <span class="heading-primary--sub">TEXT TEXT TEXT</span>
                    </div>
                       


            </h1>
            </div>

 </header>
</template>


<style lang="scss">




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
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        opacity:0;
    }

        
}





</style>

<script>
export default{
      data () {
    return {
      show: false
    }
  },
 
 mounted: function(){
   
  this.show = true;



	var fade_speed = 0.5; /* in seconds (you can edit this) */
	var pause_length = 2; /* time each image is shown, in seconds (you can edit this) */

    var bgdiv2 = document.getElementsByClassName("header__bg2");

    var bgdiv3 = document.getElementsByClassName("header__bg3");
    var headertext = document.getElementsByClassName("header__text-box");
    console.log(bgdiv2);
	var tl = new TimelineMax({repeat:-1});
	var tlint = '+=' + pause_length;
    var tlint2 = '+=' + pause_length - 2;
    tl.to(headertext, fade_speed, {opacity:1,scale:1.2}, tlint);
     tl.to(headertext, fade_speed, {opacity:0,scale:1 }, tlint);
	tl.to(bgdiv2, fade_speed, {opacity:1}, tlint); /* fade the 2nd background in */
 tl.to(headertext, fade_speed, {opacity:1,scale:1.2,ease:Power3.easeIn}, tlint);
     tl.to(headertext, fade_speed, {opacity:0,scale:1,ease:Power3.easeOut}, tlint);
	 tl.to(bgdiv3, fade_speed, {opacity:1}, tlint);
      tl.to(headertext, 5, {opacity:1,scale:1.2,ease:Bounce.easeIn}, tlint);
     tl.to(headertext, 5, {opacity:0,scale:1.2,ease:Bounce.easeOut}, tlint);
    tl.to(bgdiv2, fade_speed, {opacity:0}, tlint); /* and then fade it back out again */
   
    tl.to(bgdiv3, fade_speed, {opacity:0}, tlint);


 }
  }
</script>