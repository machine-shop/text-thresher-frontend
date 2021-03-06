Question = DS.Model.extend

  topic: DS.belongsTo("topic")

  answers: DS.hasMany("answer",
    embedded: 'always'
  )
  textAnswer: DS.belongsTo("text-answer")
  checkListAnswer: DS.belongsTo("check-list-answer")
  timeAnswer: DS.belongsTo("time-answer")

  text: DS.attr("string")
  top: DS.attr("boolean")
  type: DS.attr("string")
  questionId: DS.attr("string")

  choices: (->
    @get('answers')
  ).property('answers.@each')

  dependencies: (->
    id = this.get('questionId').toString()
    @get('topic.analysisType.questionDependencies').filter( (dependency) ->
      dependency[0].split(".").slice(0, 2).join(".") == id
    )
  ).property('topic.analysisType.questionDependencies')

  ontologicalDependencies: (->
    _this = this
    output = []
    store = @store
    @get('dependencies').forEach (dependency) ->
      unique = true
      output.forEach (outputDependency) ->
        unique = false if dependency[1] == outputDependency[1]
      output.push(dependency) if unique
    output.map (dependency) -> _this.get('topic.questions').findBy('questionId', dependency[1])
  ).property('dependencies')

`export default Question`