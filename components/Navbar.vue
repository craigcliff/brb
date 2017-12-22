<template>
    <div class="navigation" v-bind:class="{'on': active}">
    
    
    
        <input type="checkbox" class="navigation__checkbox" id="nav-check" v-model="checked">
    
    
    
    
    
    
    
        <label for="nav-check" class="navigation__button">
    
        
    
                            <span class="navigation__icon">&nbsp;</span>
    
        
    
                        </label>
    
    
    
    
    
    
    
    
    
    
    
        <div class="navigation__logo">
    
    
    
            <img v-if='this.active == false' src="../assets/images/logo-light.png" width="200" height="110" />
    
    
    
            <img v-else src="../assets/images/logo-dark.png" width="200" height="110" />
    
    
    
    
    
    
    
        </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
        <nav class="navigation__nav">
    
    
    
    
    
    
    
    
    
    
    
            <ul class="navigation__list" @click="toggleShow">
    
    
    
    
    
    
    
    
    
    
    
                <li @mouseover="mouseOver " @mouseleave="mouseLeave" class="navigation__item">
    
    
    
                    <nuxt-link v-bind:class="[{'navigation__link': active}, 'navigation__link__default' ]" to="/">MENU</nuxt-link>
    
    
    
    
    
    
    
                    <div @mouseover="mouseOver" @mouseleave="mouseLeave" class="navigation__item-sub">
    
    
    
                        <div class="nav-menu__section-overview">
    
    
    
                            <h3>
    
    
    
                                Our Menu
    
    
    
                            </h3>
    
    
    
    
    
    
    
                            <p>Food, treats and drinks full of big and bold back yard flavor. Take your pick.</p>
    
    
    
                        </div>
    
    
    
    
    
    
    
                        <nav class="nav-menu__sub-nav">
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Whatʼs New
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Smash Burgers
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Chicken, Pork &amp; More
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Salads &amp; Veggie Options
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Fries &amp; Sides
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Shakes &amp; Desserts
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Drinks
    
        
    
                    </a>
    
    
    
                            <a class="nav-link" href="">
    
        
    
                      Kid&#039;s Meals
    
        
    
                    </a>
    
    
    
                        </nav>
    
    
    
    
    
    
    
                        <nav class="nav-menu__sub-nav-external">
    
    
    
    
    
    
    
                            <a class="button-secondary--small" data-text="Nutritional Facts" role="button" target="_blank" href="">
    
        
    
              Nutritional Facts
    
        
    
            </a>
    
    
    
    
    
    
    
    
    
    
    
                            <a class="button-secondary--small" data-text="Allergen Guide" role="button" target="_blank" href="">
    
        
    
              Allergen Guide
    
        
    
            </a>
    
    
    
                        </nav>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
                    </div>
    
    
    
    
    
    
    
    
    
    
    
                </li>
    
    
    
    
    
    
    
                <li class="navigation__item">
    
    
    
                    <nuxt-link v-bind:class="[{'navigation__link': active}, 'navigation__link__default' ]" to="/about">ABOUT</nuxt-link>
    
    
    
                </li>
    
    
    
                <li class="navigation__item">
    
    
    
                    <nuxt-link v-bind:class="[{'navigation__link': active}, 'navigation__link__default' ]" to="/projects">LOCATION</nuxt-link>
    
    
    
                </li>
    
    
    
                <li class="navigation__item">
    
    
    
                    <nuxt-link v-bind:class="[{'navigation__link': active}, 'navigation__link__default' ]" to="/contact">CONTACT</nuxt-link>
    
    
    
                </li>
    
    
    
    
    
    
    
    
    
    
    
            </ul>
    
    
    
        </nav>
    
    
    
    </div>
</template>

<script>
    export default {
    
    
    
        data() {
    
    
    
            return {
    
    
    
                showNav: false,
    
    
    
                checked: false,
    
    
    
                active: false
    
    
    
            }
    
    
    
        },
    
    
    
    
    
    
    
        methods: {
    
    
    
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
    .nav-menu__section-overview {
    
        margin-top: 200px;
    
        margin-left: 150px;
    
        color: #1b1b1b;
    
        float: left;
    
        max-width: 205px;
    
        width: 20%;
    
    }
    
    
    
    .nav-menu__sub-nav {
    
        margin-top: 200px;
    
        -webkit-columns: 15.89em 2;
    
        -moz-columns: 15.89em 2;
    
        columns: 15.89em 2;
    
        float: left;
    
        margin-left: 3.7vw;
    
    }
    
    
    
    .nav-link {
    
        color: #1b1b1b;
    
        display: inherit;
    
        font-weight: 800;
    
        letter-spacing: .034em;
    
        margin-bottom: .45em;
    
    }
    
    
    
    .nav-menu__sub-nav-external {
    
        margin-right: 150px;
    
        margin-top: 200px;
    
        display: block;
    
        float: right;
    
    }
    
    
    
    .on {
    
        background-color: rgba(255, 255, 255, 0.9);
    
    }
    
    
    
    .link-color {
    
        color: white;
    
    }
    
    
    
    .navigation {
    
       
    
        width: 100%;
    
        height: 500px;

         position: absolute;
    
        z-index: 3000;
    
        @include respond(tab-port) {
    
          
    
       height: 100vh;
    
            z-index: 2;
    
        }
    
        @include respond(phone) {
    
height: 100vh;
    
           
            z-index: 2;
    
        }
    
       
    
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
    
        &__nav {
    
            postion: relative;
    
            @include respond(tab-port) {
    
                transition: all 0.5s ease;
    
                opacity: 0;
    
                visibility: hidden;
    
                z-index: 1;
    
            }
    
            @include respond(phone) {
    
                transition: all 0.5s ease;
    
                opacity: 0;
    
                visibility: hidden;
    
                z-index: 1;
    
            }
    
        }
    
        &__logo {
    
            background-image: url(../assets/images/logo-light.png) no-repeat fixed center;
    
            float: left;
    
            padding-top: 10px;
    
            padding-left: 40px;
    
            @include respond(tab-port) {
    float: none;
     position: absolute;
                top:-10px;
                left: -60px;
                

    
            }
    
            @include respond(phone) {
    float: none;
     position: absolute;
                top:-10px;
                left: -60px;
    
            }
    
        }
    
        &__list {
    
            margin-top: 25px;
    
        }
    
        &__item {
    
            float: right;
    
            display: inline-block;
    
            padding-right: 80px;
    
            margin-top: 20px;
    
            text-decoration: none;
    
            font-weight: 900;
    
            font-size: 15px;
    
            color: white;
    
            &:nth-child(-n+2) {
    
                float: left;
    
            }
    
            &:nth-child(1) {
    
                margin-left: 80px;
    
            }
    
            &:hover .navigation__item-sub {
    
                display: block;
    
            }
    
            @include respond(tab-port) {
    
                display: block;
    
                text-align: center;
    
                padding: 0;
    
                
    
                 margin-top: 120px;
    
                padding-bottom: 10px;
    
                float: none;
    
                &:nth-child(-n+2) {
    
                    float: none;
    
                }
    
                &:nth-child(1) {
    
                    margin-left: 0px;
    
                }
    
            }
    
            @include respond(phone) {
    
                display: block;
    
                text-align: center;
    
                padding: 0;

                margin-top: 100px;
    
                
    
                float: none;
    
                &:nth-child(-n+2) {
    
                    float: none;
    
                }
    
                &:nth-child(1) {
    
                    padding-left: 0px;
    
                }
    
            }
    
            &-sub {
    
                display: none;
    
                width: 100%;
    
                height: 300px;
    
                position: absolute;
    
                left: 0;
    
            }
    
        }
    
        &__link {
    
            color: black !important;
    
            text-decoration: none;
    
            &:hover {
    
                color: red !important;
    
            }
    
            &__default {
    
                text-decoration: none;
    
                color: white;
    
                &:hover {
    
                    color: red;
    
                }
    
            }
    
        }
    
        &__checkbox:checked~&__nav {
    
            @include respond(tab-port) {
    
                background-color: rgba(0, 0, 0, 0.9);
    
                visibility: visible;
    
                opacity: 1;
    
                width: 100%;
    
            }
    
            @include respond(phone) {
    
                background-color: rgba(0, 0, 0, 0.9);
    
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
    
            &::before {
    
                top: -.8rem;
    
            }
    
            &::after {
    
                top: .8rem;
    
            }
    
        }
    
        &__button:hover &__icon::before {
    
            top: -1rem;
    
        }
    
        &__button:hover &__icon::after {
    
            top: 1rem;
    
        }
    
        &__checkbox:checked+&__button &__icon {
    
            background-color: transparent;
    
        }
    
        &__checkbox:checked+&__button &__icon::before {
    
            top: 0;
    
            transform: rotate(135deg);
    
        }
    
        &__checkbox:checked+&__button &__icon::after {
    
            top: 0;
    
            transform: rotate(-135deg);
    
        }
    
    }
    
    
    
    //.navigation__item:first-child a:hover + .navigation__item:last-child a  {
    
    //color: blue;
    
    //
    
    //}
</style>