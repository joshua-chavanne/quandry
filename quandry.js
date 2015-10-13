    var result = $quandryResult;

    var quandry ={
      controller: function(){},
      view: function(){}
    };

    quandry.Quiz = function(result){
        this.data = m.prop(result.data[0]);
        this.user = m.prop(result.data[0].user);
        this.question = m.prop(result.data[0].question);
        this.done = m.prop(false);
    };

    quandry.Collection = Array;

    quandry.Quiz(result);
    quandry.QuizData = m.prop(result.data[0]);
    quandry.User = m.prop(result.data[0].user);

    //these need to refresh often
    quandry.Question = m.prop(result.data[0].question);
    quandry.Answer = m.prop(result.data[0].question.answer);
    quandry.Selected = {};

    // make this more of a handler with
    // arguments object containing - quandry.Selected,
    // quandry.Answer, quandry.Type (or rules)
    quandry.Question.compareAnswer = function(){
      //probably break incorrect selection out... maybe apply rules to that too
      if(quandry.Question().type !== "simple-multichoice" || Object.keys(quandry.Selected).length<1){
        alert('this is not supported');
        return;
      }
      if(quandry.Selected.value === quandry.Answer().value){
        //success stuff
        alert('success')
      }
      else{
        alert('sorry that is incorrect');
      }
    };


    quandry.Success = function(){

    }

    quandry.Incorrect = function(){

    }

    quandry.vm = {
      init : function(){
        quandry.vm.quiz = new quandry.Quiz(result);
        //quandry.vm.answer = m.prop('');

        quandry.vm.select = function(choice){
          //ajax or whatever for comparison
          //
        }
      }
    }

    quandry.vm.init();

    quandry.controller = function(){quandry.vm.init()}

    quantry.yieldQuestions = function(){


    }

    quandry.view = function(){
      return m("html",[
        m("body",[

        ])
      ])
    }
    //console.log(quizData());
