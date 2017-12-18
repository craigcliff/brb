<template>
  <section>
<div class="crossfade">

	  <figure></figure>

	  <figure></figure>

	  <figure></figure>

	  <figure></figure>

	  <figure></figure>

	</div>
      <div class="container">
                    <span class="text" >TEXT 1</span>
                    <span class="text" >TEXT 2</span>
                    <span class="text">TEXT 3</span>
                    <span class="text">TEXT 4</span>
                    <span class="text">TEXT 5</span>
                    </div>
  </section>
</template>


<style scoped>

.container > span {

  z-index: 400;
   position: absolute;
        top: 55%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        opacity: 0;
        animation: textAnimation 30s linear infinite 0s;
}

.text {
 
  font-weight: 900;
  font-size: 50px;
}

.crossfade > figure {
  animation: imageAnimation 30s linear infinite 0s;
  backface-visibility: hidden;
  background-size: cover;
  background-position: center center;
  color: transparent;
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  top: 0px;
  width: 100%;
  z-index: 0;
}

.crossfade > figure:nth-child(1) { background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1.jpg); }

.crossfade > figure:nth-child(2) {
  animation-delay: 6s;
  background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-2.jpg);
}

.crossfade > figure:nth-child(3) {
  animation-delay: 12s;
  background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-3.jpg);
}

.crossfade > figure:nth-child(4) {
  animation-delay: 18s;
  background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1.jpg);
}

.crossfade > figure:nth-child(5) {
  animation-delay: 24s;
  background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-2.jpg);
}





.container > span:nth-child(1) {}

.container > span:nth-child(2) {
  animation-delay: 6s;

}

.container > span:nth-child(3) {
  animation-delay: 12s;

}

.container > span:nth-child(4) {
  animation-delay: 18s;

}

.container > span:nth-child(5) {
  animation-delay: 24s;
  
}






@keyframes 
imageAnimation {  0% {
 animation-timing-function: ease-in;
 opacity: 0;
}
 8% {
 animation-timing-function: ease-out;
 opacity: 1;
}
 17% {
 opacity: 1
}
 25% {
 opacity: 0
}
 100% {
 opacity: 0
}
}

@keyframes 
textAnimation {  0% {
 animation-timing-function: ease-in;
 opacity: 0;
 left:50px;
}
 8% {
 animation-timing-function: ease-out;
 opacity: 1;
}
 17% {
 opacity: 1
}
 25% {
 opacity: 0
}
 100% {
 opacity: 0
}
}






</style>