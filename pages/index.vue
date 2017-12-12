<template>
<header class="header">


 </header>
</template>


<style lang="scss">


.header {
    height: 100Vh;
    
       
    background-image: linear-gradient(
        to right bottom,
        rgba(222, 221, 221, 0.3),
        rgba(216,43, 43, 0.2)),
        url(../assets/images/bg-1.jpg);
    background-size: cover;
    background-position: top;
    position: relative;

    @media only screen and (min-resolution: 192dpi) and (min-width: 37.5em),
            only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 37.5em),
            only screen and (min-width: 125em) {
        background-image: linear-gradient(
            to right bottom,
            rgba(0, 255, 0, 0.8),
        rgba(0, 0, 255, 0.8));
}

}

</style>
