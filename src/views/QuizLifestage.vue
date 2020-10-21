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
                            <h2 class="title text-center">What stage in life are you at?</h2>
                            <div class="lifestages">
                                <div class="md-layout">
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage">
                                            <md-card class="md-card-plain">
                                                <div class="md-layout-item md-size-100 mx-auto">
                                                <img
                                                    :src="studentImg"
                                                    alt="Thumbnail Image"
                                                    class="img-raised rounded"
                                                />
                                                </div>
                                                <h4 class="card-title">
                                                Student
                                                </h4>
                                                <md-card-content>
                                                <p class="card-description">
                                                    Still in school but you want to be one step ahead of your peers
                                                </p>
                                                </md-card-content>
                                            </md-card>
                                        </div>
                                    </div>
                                    
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage">
                                        <md-card class="md-card-plain">
                                            <div class="md-layout-item md-size-100 mx-auto">
                                            <img
                                                :src="graduateImg2"
                                                alt="Thumbnail Image"
                                                class="img-raised rounded "
                                            />
                                            </div>
                                            <h4 class="card-title">
                                            Fresh Graduate
                                            </h4>
                                            <md-card-content>
                                            <p class="card-description">
                                                Just graduated and improving skillsets to find a job
                                            </p>
                                            </md-card-content>
                                        </md-card>
                                        </div>
                                    </div>
                                    
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage">
                                        <md-card class="md-card-plain">
                                            <div class="md-layout-item md-size-50 mx-auto">
                                            <img
                                                :src="industryImg3"
                                                alt="Thumbnail Image"
                                                class="img-raised rounded img-fluid"
                                            />
                                            </div>
                                            <h4 class="card-title">
                                            Keen in new industry
                                            </h4>
                                            <md-card-content>
                                            <p class="card-description">
                                                Have some work experience but you are looking to switch industries
                                            </p>
                                            </md-card-content>
                                        </md-card>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage">
                                        <md-card class="md-card-plain">
                                            <div class="md-layout-item md-size-50 mx-auto">
                                            <img
                                                :src="midCareerImg4"
                                                alt="Thumbnail Image"
                                                class="img-raised rounded img-fluid"
                                            />
                                            </div>
                                            <h4 class="card-title">
                                            Mid Career
                                            </h4>
                                            <md-card-content>
                                            <p class="card-description">
                                                An industry veteran that is keeping abreast of the latest developments
                                            </p>
                                            </md-card-content>
                                        </md-card>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    bodyClass: "quiz-lifestage-page",
    props :{
        header: {
            type: String,
            default: require("@/assets/img/city-profile.jpg")
        },
        studentImg: {
            type: String,
            default: require("@/assets/img/faces/quiz/student.jpg")
        },
        graduateImg2: {
            type: String,
            default: require("@/assets/img/faces/christian.jpg")
        },
        industryImg3: {
            type: String,
            default: require("@/assets/img/faces/kendall.jpg")
        },
        midCareerImg4: {
            type: String,
            default: require("@/assets/img/faces/kendall.jpg")
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
            lifestage: null, 
        }
    }
};
</script>

<style lang="scss" scoped>

.md-card-actions.text-center {
  display: flex;
  justify-content: left !important;
}

.md-has-textarea + .md-layout {
  margin-top: 20px;
}
</style>
