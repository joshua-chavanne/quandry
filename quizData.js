$quandryResult  = {
  data: [{
    user: {
      "userId" : "123",
      "username" : "joshua chavanne",
      "attempt" : "1",  // UUIDs?
    },
    question: {
      type : "simple-multichoice",
      fieldType : "checkbox",
      points : "1",  //should this be optional?
      questionContent: "What is the landspeed velocity of...",
      choices : {
        "A" : "I do not know",
        "B" : "Green",
        "C" : "Bruce",
      },
      answer: {
        "value" : "A",
        "success-text" : "Congratulations!"
      },
    },
    quiz: {
      "quizId"  : "1",  // route: quiz/1
      "currentQuestion" :  "1", // route: quiz/1/1
      "quizUUID" : "effe-0287-beef-dead-0000",  //relevant to USER ATTEMPT
      "nextQuestion" : "2",
      "numberCorrect" : 0,  // update with setter
      "numberIncorrect": 0,
      //optional points for value weighting?
    },
    answersCache: [
    ] //optional part of object also can be excluded from update.

  }],
  errors: [],
  meta: []
}
