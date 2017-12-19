<template>
<div class="navigation" v-bind:class="{on: active}">
             <input type="checkbox" class="navigation__checkbox" id="nav-check" v-model="checked">

            <label for="nav-check" class="navigation__button"   >
                <span class="navigation__icon">&nbsp;</span>
            </label>
   
                    
<div class="navigation__logo">logo</div>
            <nav  class="navigation__nav"  >

            
                <ul  class="navigation__list" @click="toggleShow"  >

                 
                  <li @mouseover="mouseOver " @mouseleave="mouseLeave" class="navigation__item"><nuxt-link class="navigation__link"  to="/">Home</nuxt-link>
                  
                   <div @mouseover="mouseOver" @mouseleave="mouseLeave" class = "navigation__item-sub">
					   <h1> Hello there</h1>
				      </div>
                  
                  
                  </li>

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
      showNav: false,
      checked: false,
        active: false
    }
  },

  methods:{
    toggleShow() {
      this.checked = !this.checked;
    },
 mouseOver: function() {
      this.active = true;
      console.log("flag " + this.active);
    },

     mouseLeave: function() {
                this.active = false;
            }

    
  }
}
</script>

<style lang="scss">

.on {background-color: rgba(255, 255, 255, 0.9);}

.navigation{
    postion: relative;
    
    width: 100%;
height: 120px;


   @include respond(tab-port) {
      background-color: rgba(222, 221, 221, 0.3);
         height: 50px;
         z-index: 2;
        }
        @include respond(phone) {
          background-color: rgba(222, 221, 221, 0.3);
          height: 50px;
           z-index: 2;
        }




   position: absolute;
   z-index: 3000;

       &__checkbox {
        display: none;
    }
    &__button {
      
        height: 5rem;
        width: 5rem;
        position: fixed;
        
        border-radius: 10%;
        z-index: 2000;
        box-shadow: 0 1rem 3rem rgba(black, .1);
        text-align: center;
        cursor: pointer;
        top: 5%;
        left: 95%;
        transform: translate(-50%, -50%);
        display: none;
       
        @include respond(tab-port) {
          display: block;
         top: 5%;
        left: 95%;
            transform: translate(-50%, -50%);
        }
        @include respond(phone) {
           display: block;
          top: 5%;
        left: 95%;
            transform: translate(-50%, -50%);
        }
    }

  &__nav{

  postion: relative;

 @include respond(tab-port) {
   transition: all 0.5s ease;
       opacity: 0;
  visibility: hidden;
         
         z-index:1;
         
        }
        @include respond(phone) {
              transition: all 0.5s ease;
         opacity: 0;
  visibility: hidden;
            z-index:1;
        }

  }

   &__logo{
float: left;
padding-top: 10px;
padding-left: 40px;

 @include respond(tab-port) {
          float: none;
        
        }
        @include respond(phone) {
          float: none;
        }


   }

&__list{

float: right;

 @include respond(tab-port) {
          float: none;
          
         
          
        
        }
        @include respond(phone) {
          float: none;
        }


}

&__item{


    &:hover .navigation__item-sub{
        display: block;


    }
  
display: inline-block;
padding-right: 80px;
margin-top: 20px;
text-decoration: none;
font-weight: bold;
color: white;



  @include respond(tab-port) {
          display: block;
          text-align: center;
       padding: 0;
      padding-top: 30px;
         margin-top:25px;
         padding-bottom: 10px;
         
        
         
       
        }
        @include respond(phone) {
           display: block;
          text-align: center;
      padding: 0;
      padding-top: 30px;
      
         
        }

        &-sub{

display: none;
	width: 100%;
	height: 300px;
	position: absolute;
	left: 0;

           

        }

}

&__link{
color: white;

}

  &__checkbox:checked ~ &__nav {
         @include respond(tab-port) {
        background-color: rgba(0, 0, 0, 0.3);
         visibility: visible;
  opacity: 1;
        
         width: 100%;
        
         
         
      
        }
        @include respond(phone) {
        background-color: rgba(0, 0, 0, 0.3);
            visibility: visible;
  opacity: 1;
           width: 100%;
         
        }

  }
    

 &__icon {
        position: relative;
        margin-top: 2.5rem;
        &,
        &::before,
        &::after {
            width: 2.5rem;
            height: 2px;
            background-color: $color-grey-dark-3;
            display: inline-block;
        }
        &::before,
        &::after {
            content: "";
            position: absolute;
            left: 0;
            transition: all .2s;
        }
        &::before { top: -.8rem; }
        &::after { top: .8rem; }
    }
    &__button:hover &__icon::before {
        top: -1rem;
    }
    &__button:hover &__icon::after {
        top: 1rem;
    }
    &__checkbox:checked + &__button &__icon {
        background-color: transparent;
    }
    &__checkbox:checked + &__button &__icon::before {
        top: 0;
        transform: rotate(135deg);
        
    }
    &__checkbox:checked + &__button &__icon::after {
        top: 0;
        transform: rotate(-135deg);
        
       
    }
    
  
}
</style>