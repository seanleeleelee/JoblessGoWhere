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
                            <h2 class="title text-center">Your Recommended Courses</h2>
                            <p> These are courses recommended for you through your quiz results<p>
                            <div class="DataAnalytics">
                                <div class="md-layout">
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="DataAnalytics">
                                            <md-card class="md-card-plain">
                                                <div class="md-layout-item md-size-100 mx-auto">
                                                <img
                                                    :src="studentImg"
                                                    alt="Thumbnail Image"
                                                    class="img-raised rounded"
                                                />
                                                </div>
                                                <h4 class="card-title">
                                                Data Analytics
                                                </h4>
                                                <md-card-content>
                                                    <p class="card-description">
                                                    Coursea | Intermediate
                                                </p>
                                                <p class="card-description">
                                                    Completed by 68% of people in the same industry as you
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
                                            Google Analytics
                                            </h4>
                                            <md-card-content>
                                            <p class="card-description">
                                                    edX | Beginner
                                                </p>
                                                <p class="card-description">
                                                    Completed by 65% of people in the same industry as you
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
                                                :src="industryImg3"
                                                alt="Thumbnail Image"
                                                class="img-raised rounded img-fluid"
                                            />
                                            </div>
                                            <h4 class="card-title">
                                            SEO for Beginners
                                            </h4>
                                            <md-card-content>
                                            <p class="card-description">
                                                    SkillsFuture | Beginner
                                                </p>
                                                <p class="card-description">
                                                    Completed by 57% of people in the same industry as you
                                                </p>
                                            </md-card-content>
                                        </md-card>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <md-button
                                href="/"
                                class="md-success md-lg"
                            >
                                <i class="fas fa-play"></i> 
                                Save to profile
                            </md-button>
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
            default: require("@/assets/img/GoogleAnalytics.png")
        },
        graduateImg2: {
            type: String,
            default: require("@/assets/img/GoogleAnalytics.png")
        },
        industryImg3: {
            type: String,
            default: require("@/assets/img/GoogleAnalytics.png")
        },
        midCareerImg4: {
            type: String,
            default: require("@/assets/img/GoogleAnalytics.png")
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
