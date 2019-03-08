let quiz = {
  title: 'Vue.js Quiz',
  questions: [
    {
      text: "What is 1 + 2:",
      responses: [
        {text: '4'},
        {text: '6'},
        {text: '8'}, 
        {text: '3', correct: true}, 
      ]
    }, {
      text: "What is 2 + 3:",
      responses: [
        {text: '2'},
        {text: '3'},
        {text: '7'}, 
        {text: '5', correct: true}, 
      ]
    }, {
      text: "What is 4 + 5:",
      responses: [
        {text: '2'},
        {text: '3'},
        {text: '5'}, 
        {text: '9', correct: true}, 
      ]
    }, {
      text: "What is 3 + 10:",
      responses: [
        {text: '10'},
        {text: '11'},
        {text: '14'}, 
        {text: '13', correct: true}, 
      ]
    }, {
      text: "What is 8 + 6:",
      responses: [
        {text: '15'},
        {text: '13'},
        {text: '12'}, 
        {text: '14', correct: true}, 
      ]
    }, {
      text: "What is 8 + 7:",
      responses: [
        {text: '4'},
        {text: '10'},
        {text: '14'}, 
        {text: '15', correct: true}, 
      ]
    }, {
      text: "What is 9 + 16:",
      responses: [
        {text: '22'},
        {text: '30'},
        {text: '24'}, 
        {text: '25', correct: true}, 
      ]
    }, {
      text: "What is 81 + 6:",
      responses: [
        {text: '24'},
        {text: '100'},
        {text: '76'}, 
        {text: '87', correct: true}, 
      ]
    }, {
      text: "What is 8 + 61:",
      responses: [
        {text: '67'},
        {text: '63'},
        {text: '65'}, 
        {text: '69', correct: true}, 
      ]
    }, {
      text: "What is 18 + 16:",
      responses: [
        {text: '41'},
        {text: '28'},
        {text: '32'}, 
        {text: '34', correct: true}, 
      ]
    }, {
      text: "What is 20 + 6:",
      responses: [
        {text: '25'},
        {text: '21'},
        {text: '23'}, 
        {text: '26', correct: true}, 
      ]
    }, {
      text: "What is 8 + 60:",
      responses: [
        {text: '33'},
        {text: '21'},
        {text: '47'}, 
        {text: '68', correct: true}, 
      ]
    }, {
      text: "What is 44 + 6:",
      responses: [
        {text: '71'},
        {text: '53'},
        {text: '51'}, 
        {text: '50', correct: true}, 
      ]
    }, {
      text: "What is 93 + 6:",
      responses: [
        {text: '104'},
        {text: '46'},
        {text: '103'}, 
        {text: '99', correct: true}, 
      ]
    }, {
      text: "What is 8 + 62:",
      responses: [
        {text: '33'},
        {text: '47'},
        {text: '41'}, 
        {text: '70', correct: true}, 
      ]
    }, {
      text: "What is 812 + 6:",
      responses: [
        {text: '876'},
        {text: '765'},
        {text: '456'}, 
        {text: '818', correct: true}, 
      ]
    }, {
      text: "What is 118 + 6:",
      responses: [
        {text: '543'},
        {text: '156'},
        {text: '132'}, 
        {text: '124', correct: true}, 
      ]
    }, {
      text: "What is 84 + 6:",
      responses: [
        {text: '88'},
        {text: '87'},
        {text: '54'}, 
        {text: '90', correct: true}, 
      ]
    }, {
      text: "What is 8 + 63:",
      responses: [
        {text: '92'},
        {text: '80'},
        {text: '70'}, 
        {text: '71', correct: true}, 
      ]
    }, {
      text: "What is 39 + 6:",
      responses: [
        {text: '77'},
        {text: '56'},
        {text: '43'}, 
        {text: '45', correct: true}, 
      ]
    }, {
      text: "What is 23 + 6:",
      responses: [
        {text: '30'},
        {text: '31'},
        {text: '54'}, 
        {text: '29', correct: true}, 
      ]
    }, 
  ]
};
      
 let quizjs = new Vue({
  el: '#app',
  data: {
    quiz: quiz,
    questionIndex: 0,

    userResponses: Array(quiz.questions.length).fill(false)
  },

  methods: {

    next: function() {
      this.questionIndex++;
    },
 
    prev: function() {
      this.questionIndex--;
    },
 
    score: function() {
      return this.userResponses.filter(function(val) { return val }).length;
    }
  }
});