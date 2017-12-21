<template>

<div class = "main-index">
<header class="header">
 <div class = "header__bg1" > </div>
  
  <div class = "text-box">
<h1 class ="heading-primary">
<span class = "heading-primary-main">TASTE THE MYTH</span>

</h1>

<a href="#" class="btn btn-white">View Our Burgers </a>
</div>

 </header>



        </div>
</template>


<style lang="scss">
   .header{
       height: 75vh;

       background-image: 
       linear-gradient(
            
        rgba(0, 0, 0, 0.4),
        rgba(255,255, 255, 0.1)),
        url(../assets/images/bg-1.jpg);
        filter:contrast(150%);
    background-size: cover;
    background-position: top;
    position: relative;

    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
      rgba(0, 0, 0, 0.3),
        rgba(255,255, 255, 0.2)),
        url(../assets/images/bg-1.jpg);
    }
   
        
}

.text-box{
position: absolute;
top: 45%;
left:80%;
   transform: translate(-50%, -50%);



}

.heading-primary{
color: #fff;
text-transform: uppercase;
margin-bottom: 20px;



&-main{
display: block;
font-size: 60px;
font-weight: 900;
line-height: 1.2;


}

&-sub{



}


}

.btn:link,
.btn:visited {
text-transform: uppercase;
text-decoration: none;

padding:15px 40px;
display: inline-block;
border-radius: 100px;

}

.btn:hover {
    transform: translateY(-3px);

}
.btn:active {
    transform: translateY(-1px);

}

.btn-white {
background-color: #fff;
color: #777;



}
</style>

<script>

</script>