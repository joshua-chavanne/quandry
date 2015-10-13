<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>quandry</title>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <!--[if lt IE 9]>
      <script src="https://cdn.jsdelivr.net/html5shiv/3.7.2/html5shiv.min.js"></script>
      <script src="https://cdn.jsdelivr.net/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body>
    <script src="https://cdn.jsdelivr.net/jquery/2.1.3/jquery.min.js"></script>
    <script src="bower_components/mithril/mithril.js"></script>
    <script src="https://cdn.jsdelivr.net/bootstrap/3.3.5/js/bootstrap.min.js"></script>
    <div class="">
      <div class="question-area">
        <div class="question-area__meta">
          <div class="question-area__meta-user">
          joshua chavanne
          </div>
          <div class="question-area__meta-question">

          </div>
        </div>
        <div class="question-area__content">
          <div class="question-area__question-content">
            What is the landspeed velocity of a ...
          </div>
        </div>
        <div class="question-area__form">
          <div id="question-area__form_element" class="question-area__form-selections">
            <label>
              A <input type="checkbox" id="questionNumberIndex0" value="A" />
               : "I do not know"
            </label>
            <br />
            <label>
              B
              <input type="checkbox" id="questionNumberIndex1" value="B"/>
               : "Green"
            </label>
            <br />
            <label>
              C
              <input type="checkbox" id="questionNumberIndex2" value="C"/>
               : "Bruce"
            </input>
          </div>
          <div class="question-area__form-submission">
            <button id="questionSubmit">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </body>
  <script src="quizData.js"></script>
  <script src="quandry.js"></script>
  <script>
  jQuery(document).ready(function($) {

    jQuery(document).on('click', '#questionSubmit', function(event) {
      $selection = jQuery(':checked')[0].value;
      quandry.Selected.value = $selection;

      quandry.Question.compareAnswer();
      event.preventDefault();
      /* Act on the event */
    });
  });
  </script>
</html>
