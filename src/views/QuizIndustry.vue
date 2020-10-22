<template>
    <div class="wrapper">
        <parallax class="section header-filter" :style="headerStyle">
        </parallax>
        <div class= "main main-raised">
            <div class=  "section">
                <div class= "container">
                    <div class="md-layout">
                        <div 
                        class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center"
                        >
                            <h2 class="title text-center">What Industry are you interested in? </h2>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    bodyClass: "quiz-industry-page",
    props :{
        header: {
            type: String,
            default: require("@/assets/img/city-profile.jpg")
        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`
            };
        }
    },
    data() {
        return { 
        }
    }
};
</script>

<style lang="scss" scoped>

</style>
