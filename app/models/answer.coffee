Answer = DS.Model.extend

  question: DS.belongsTo("question")
  
  text: DS.attr("string")
  answerId: DS.attr("string")

  dependencies: (topic, question) ->
    _this = this
    dependencies = []
    questionDependencies = question.get("dependencies")
    if questionDependencies
      questionDependencies.forEach (dependency)->
        if dependency[0] == _this.get('answerId')
          newQuestion = topic.get('questions.currentState').filterBy('questionId', dependency[1])[0]
          dependencies.push(newQuestion)
    dependencies

`export default Answer`