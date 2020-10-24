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
                            <h2 class="title text-center">What courses have you completed? </h2>
                            <div class="text-center">Note: Hold down control (ctrl) or the command button to select multiple courses. </div>
                            <br>
                            <select class = "dropdown" v-model = "text" multiple>
                                <option v-for="course in courseList" :key="course" >
                                {{course}}
                                </option>
                            </select>
                            <br><br>{{"You have completed the following courses: " + text}}
                        </div>
                        <div
                            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto"
                        >
                            <div class="md-layout">
                                <div class="md-layout-item md-size-50 md-small-size-100 text-left">
                                    <md-button
                                        href="/quiz/skillset"
                                        class="md-danger"
                                    >
                                    Back
                                    </md-button>
                                </div>
                                <div class="md-layout-item md-size-50 md-small-size-100 text-right">
                                    <md-button
                                        href="/RecommendedPage"
                                        class="md-success"
                                    >
                                    Next
                                    </md-button>
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
    bodyClass: "quiz-course-page",
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
            text: "",
            courseList: [
                "Course 1",
                "Course 2",
                "Course 3",
                "Course 4",
                "Course 5",
                "Course 6"
  	        ]
        }
    }
};
</script>


<style scoped>
.dropdown {
    display: block;
    font-size: 14px;
    font-family: sans-serif;
    color: #444;
    line-height: 1.3;
    padding: .6em 1.4em .5em .8em;
    width: 100%;
    max-width: 100%; /* useful when width is set to anything other than 100% */
    box-sizing: border-box;
    margin: 0;
    border: 1px solid #aaa;
    box-shadow: 0 1px 0 1px rgba(0,0,0,.04);
    border-radius: .5em;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    background-color: #fff;
}
</style>