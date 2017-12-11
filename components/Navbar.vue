<template>
<div class="navigation">
            
   
                      

            <nav  class="navigation__nav"  >
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

   max-width: 1000px;
  margin: 0 auto;
  width: 100%;

  &__nav {
    
       
         position: fixed;
    width: 100%;
        z-index: 1500;
    
    
        transition: all .8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    &__list{
 display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
 -webkit-flex-flow: row ;
  -moz-flex-flow: row ;
  -ms-flex-flow: row ;
  flex-flow: row;
  -webkit-justify-content: center;
  -moz-justify-content: center;
  justify-content: center;
  align-content: flex-end; 
}

    
    &__item{

      -webkit-box-flex: 0 1 50%;
  -moz-box-flex: 0 1 50%;
  -webkit-flex: 0 1 50%;
  -ms-flex: 0 1 50%;
  flex: 0 1 50%;

padding-left: 15px;
    }
}


</style>