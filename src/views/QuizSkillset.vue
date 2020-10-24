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
                            <h2 class="title text-center">What skillsets do you have? </h2>
                            <div class="text-center">Note: Hold down control (ctrl) or the command button to select multiple skills. </div>
                            <br>
                            <select class = "dropdown" v-model = "text" multiple>
                                <option v-for="skill in skillsList" :key="skill" >
                                {{skill}}
                                </option>
                            </select>
                            <br><br>{{"Your chosen skillset(s): " + text}}
                        </div>
                        <div
                            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto"
                        >
                            <div class="md-layout">
                                <div class="md-layout-item md-size-50 md-small-size-100 text-left">
                                    <md-button
                                        href="/quiz/industry"
                                        class="md-danger"
                                    >
                                    Back
                                    </md-button>
                                </div>
                                <div class="md-layout-item md-size-50 md-small-size-100 text-right">
                                    <md-button v-if="this.text != ''"
                                        href="/quiz/course"
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
    bodyClass: "quiz-skillset-page",
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
            skillsList: [
                "Web Development",
                "Microsoft Office Skills",
                "Java",
                "Cloud Management",
                "Product & Service Promotion",
                "Data Entry"
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