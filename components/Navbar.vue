<template>
<div class="navigation">
            
   
                    

            <nav  class="navigation__nav"  >

            <div class="navigation__logo">logo</div>
                <ul  class="navigation__list"  >

                 
                  <li class="navigation__item"><nuxt-link class="navigation__link"  to="/">Home</nuxt-link></li>
                  <li class="navigation__item"><nuxt-link class="navigation__link"  to="/about">About</nuxt-link></li>
                  <li class="navigation__item"><nuxt-link class="navigation__link" to="/projects">Projects</nuxt-link></li>
                  <li class="navigation__item"><nuxt-link class="navigation__link"  to="/contact">Contact</nuxt-link></li>
                   
    
                    </ul>
            </nav>
        </div>

</template>

<script>
export default{
  data () {
    return {
      showNav: false
    }
  }
}
</script>

<style lang="scss">
.navigation{
width: 100%;
height: 50px;

   position: absolute;
   z-index: 3000;

   &__logo{
float: left;
padding-top: 10px;
padding-left: 40px;

   }

&__list{

float: right;

}

&__item{
  
display: inline-block;
padding-right: 80px;
padding-top: 20px;
text-decoration: none;
font-weight: bold;
color: white;


}

&__link{
color: white;

}

  
}
</style>