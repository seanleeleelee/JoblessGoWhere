<template>
    <div class="wrapper">
        <parallax class="section header-filter" :style="headerStyle">
        </parallax>
        <div class= "main main-raised">
            <div class=  "section">
                <div class= "container">
                    <div class="md-layout">
                        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-center">
                            <h2 class="title text-center">What stage in life are you at?</h2>
                                <div class="md-layout">
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage" @click="onClickStudent()" :class="{border:lifestage == 'Student'}">
                                            <md-card class="md-card-plain" md-with-hover>
                                                <md-ripple>
                                                    <md-card-media>
                                                        <img
                                                            :src="studentImg"
                                                            alt="Image of student with books"
                                                            class="img-raised rounded"
                                                        />
                                                    </md-card-media>
                                                    <md-card-content>
                                                        <h4 class="card-title">
                                                            Student
                                                        </h4>
                                                        <p class="card-description">
                                                            Still in school but you want to be one step ahead of your peers
                                                        </p>
                                                    </md-card-content>
                                                </md-ripple>
                                            </md-card>
                                        </div>
                                    </div>  

                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage" @click="onClickGrad()" :class="{border:lifestage == 'Graduate'}">
                                        <md-card class="md-card-plain" md-with-hover>
                                            <md-ripple>
                                                <md-card-media>
                                                    <img
                                                        :src="graduateImg2"
                                                        alt="Image of a fresh graduate"
                                                        class="img-raised rounded "
                                                    />
                                                </md-card-media>
                                                <md-card-content>
                                                    <h4 class="card-title">
                                                    Fresh Graduate
                                                    </h4>
                                                    <p class="card-description">
                                                        Just graduated and improving skillsets to find a job
                                                    </p>
                                                </md-card-content>
                                            </md-ripple>
                                        </md-card>
                                        </div>
                                    </div>
                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage" @click="onClickExp1()" :class="{border:lifestage == 'Early Professional'}">
                                            <md-card class="md-card-plain" md-with-hover>
                                                <md-ripple>
                                                    <md-card-media>
                                                        <img
                                                            :src="industryImg3"
                                                            alt="Thumbnail Image"
                                                            class="img-raised rounded img-fluid"
                                                        />
                                                    </md-card-media>
                                                    <md-card-content>
                                                        <h4 class="card-title">
                                                        Early Career
                                                        </h4>
                                                        <p class="card-description">
                                                            Have some work experience but you are looking to switch industries
                                                        </p>
                                                    </md-card-content>
                                                </md-ripple>
                                            </md-card>
                                        </div>
                                    </div>

                                    <div class="md-layout-item md-medium-size-25 md-small-size-100">
                                        <div class="lifestage" @click="onClickExp2()" :class="{border:lifestage == 'Experienced Professional'}">
                                            <md-card class="md-card-plain" md-with-hover>
                                                <md-ripple>
                                                    <md-card-media>
                                                        <img
                                                            :src="midCareerImg4"
                                                            alt="Thumbnail Image"
                                                            class="img-raised rounded img-fluid"
                                                        />
                                                    </md-card-media>
                                                    <md-card-content>
                                                        <h4 class="card-title">
                                                        Mid Career
                                                        </h4>
                                                        <p class="card-description">
                                                            An industry veteran that is keeping abreast of the latest developments
                                                        </p>
                                                    </md-card-content>
                                                </md-ripple>
                                            </md-card>
                                        </div>
                                    </div>
                                </div>
                        </div>

                        <div class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto text-right">
                            <md-button v-if="this.lifestage != null" @click="addLifeStage"
                                href="/quiz/industry"
                                class="md-success"
                            >
                            Next
                            </md-button>      
                        </div>                     
                    </div>
                    <br><br><br>
                        <div
                            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto"
                        >
                            <div id="progress-pagination">
                                <p>Your progress:
                                </p>
                                <div class="md-layout">
                                    <div class="md-layout-item md-size-100 md-xsmall-size-100">
                                        <md-progress-bar v-if="this.lifestage == null"
                                            class="md-success"
                                            :md-value="0"
                                        ></md-progress-bar>
                                        <md-progress-bar v-else
                                            class="md-success"
                                            :md-value="25"
                                        ></md-progress-bar>
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
import database from '../firebase.js'
import { serverBus } from "../main.js"

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
            default: require("@/assets/img/faces/quiz/graduate.jpeg")
        },
        industryImg3: {
            type: String,
            default: require("@/assets/img/faces/quiz/industry.jpg")
        },
        midCareerImg4: {
            type: String,
            default: require("@/assets/img/faces/quiz/midcareer.jpg")
        }
    },
    computed: {
        headerStyle() {
            return {
                backgroundImage: `url(${this.header})`
            };
        },        
    },
    methods : {
        onClickStudent(){
            this.lifestage = "Student";
        },
        onClickGrad(){
            this.lifestage = "Graduate";
        },
        onClickExp1(){
            this.lifestage = "Early Professional";
        },
        onClickExp2(){
            this.lifestage = "Experienced Professional";
        },
        addLifeStage: function() {
            database.collection('users').doc(this.docID).update({
                lifestage : this.lifestage
                });
            console.log("updated");
        }
    },
    created(){
        database.collection('users').add({
            lifestage : this.lifestage,
            industry : null
            }).then(docRef => {
                console.log(docRef.id);
                this.docID = docRef.id;
                serverBus.$emit('createdDoc', docRef.id);
                });
        console.log("created doc");
    },
    data() {
        return { 
            lifestage: null,
            docID: null
        }
    }
};
</script>

<style lang="scss" scoped>

.md-card-actions.text-center {
  display: flex;
//   justify-content: left !important;
}

.md-has-textarea + .md-layout {
  margin-top: 20px;
}

.border {
  border: 2px solid black;
  border-radius: 15px
}
</style>
