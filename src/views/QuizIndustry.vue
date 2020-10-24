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
                            <h2 class="title text-center">Which industry are you interested in? </h2>
                            <div class="text-center">Note: Please only pick one. </div>
                            <br>
                            <select class = "dropdown" v-model = "text">
                                <option v-for="item in industryList" :key="item" >
                                {{item}}
                                </option>
                            </select>
                            <br><br>{{"Your choice of Industry: " + text}}
                        </div>
                        <div
                            class="md-layout-item md-size-66 md-xsmall-size-100 mx-auto"
                        >
                            <div class="md-layout">
                                <div class="md-layout-item md-size-50 md-small-size-100 text-left">
                                    <md-button
                                        href="/quiz/lifestage"
                                        class="md-danger"
                                    >
                                    Back
                                    </md-button>
                                </div>
                                <div class="md-layout-item md-size-50 md-small-size-100 text-right">
                                    <md-button v-if="this.text != ''"
                                        href="/quiz/skillset"
                                        class="md-success"
                                    >
                                        Next
                                    </md-button>
                                </div>
                            </div>
                            <br><br><br>
                            <div id="progress-pagination">
                                <p>Your progress:
                                </p>
                                <div class="md-layout">
                                    <div class="md-layout-item md-size-100 md-xsmall-size-100">
                                        <md-progress-bar v-if="this.text == ''"
                                            class="md-success"
                                            :md-value="25"
                                        ></md-progress-bar>
                                        <md-progress-bar v-else
                                            class="md-success"
                                            :md-value="50"
                                        ></md-progress-bar>
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
            text: "",
            industryList: [
			    'Manufacturing Energy & Chemicals',
			    'Precision Engineering',
			    'Marine & Offshore',
			    'Aerospace',
                'Electronics',
                'Built Environment Construction (incl. Archi & Engineering services)',
                'Real Estate',
                'Cleaning',
                'Security',
                'Trade & Connectivity Logistics',
                'Air Transport',
                'Sea Transport',
                'Land Transport (incl. Public Transport)',
                'Wholesale Trade',
                'Essential Domestic Services',
                'Healthcare',
                'Education (Early Childhood and Private Education)',
                'Professional Services',
                'ICT and Media',
                'Financial Services',
                'Lifestyle Food Services',
                'Retail',
                'Hotels',
                'Food Manufacturing SPRING'
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