module.exports = function(app) {
  var express = require('express');
  var mockServerRouter = express.Router();
  mockServerRouter.get('/', function(req, res) {
    res.send({"mock-server":[]});
  });
  mockServerRouter.get('/tasks', function(req, res) {
    var task = {
      "id": 1,
      "glossary":{
        "moving a camp to a new location":"",
        "independent":"",
        "blocking action":"type of protester-initiated event where a group of individuals",
        "march/parade":"type of protester-initiated event.",
        "strategic sabotage":"",
        "divestment action":"",
        "strategic violence":"",
        "counterprotester":"",
        "establishing a camp":"",
        "camp":"",
        "disrupting an on-going event of the perceived 1%":"",
        "community response":"",
        "strike":"",
        "rally/demonstration":"",
        "injuries":"",
        "voluntary dissolution of a camp":""
      },
      "text":"25 of 36 DOCUMENTS\nThe Associated Press State & Local Wire\nNovember 14, 2011 Monday 8:14 PM GMT\nMore arrests expected at Occupy Albany\nSECTION: STATE AND REGIONAL\nLENGTH: 122 words\nDATELINE: ALBANY N.Y.\n\n\nMore arrests are expected in the downtown park where some Occupy Albany protesters plan to keep violating the state's 11 p.m. curfew.\nProtesters have camped since Oct. 21 in the city's Academy Park, with several crossing Saturday and Sunday into adjacent state-run Lafayette Park. They were testing Gov. Andrew Cuomo's vow to enforce the curfew there.\nState troopers arrested 26 Saturday and 13 Sunday night, including four who also were arrested a day earlier.\nAll were issued appearance tickets for Albany City Court, though District Attorney P. David Soares says he won't prosecute them for trespassing.\nDemonstrators say they will keep challenging the curfew until the arrests stop and they expect a large group to do that this weekend.\n \nLOAD-DATE: November 15, 2011\nLANGUAGE: ENGLISH\nPUBLICATION-TYPE: Newswire\nCopyright 2011 Associated Press\nAll Rights Reserved",
      "topics":[
        {
          "id":"1",
          "questions":[
            {
              "text":"What did the crowd block?",
              "top":false,
              "answers":[
                {
                  "text":"Street",
                  "id":"1.02.02"
                },
                {
                  "text":"Public transportation",
                  "id":"1.02.03"
                },
                {
                  "text":"Sidewalk",
                  "id":"1.02.01"
                },
                {
                  "text":"Airport",
                  "id":"1.02.04"
                },
                {
                  "text":"Shipping port",
                  "id":"1.02.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"1.02"
            },
            {
              "text":"What type of event did the protesters disrupt?",
              "top":false,
              "answers":[
                {
                  "text":"Politician's speech",
                  "id":"1.03.02"
                },
                {
                  "text":"City council meeting",
                  "id":"1.03.03"
                },
                {
                  "text":"Political campaign",
                  "id":"1.03.01"
                },
                {
                  "text":"Auction",
                  "id":"1.03.04"
                }
              ],
              "dependencies":[
                {
                  "then":"1.04",
                  "if":"1.03"
                }
              ],
              "type":"mc",
              "id":"1.03"
            },
            {
              "text":"What type of event is described in the highlighted text?",
              "top":true,
              "answers":[
                {
                  "text":"Rally/Demonstration",
                  "id":"1.01.02"
                },
                {
                  "text":"Strike",
                  "id":"1.01.03"
                },
                {
                  "text":"March/Parade",
                  "id":"1.01.01"
                },
                {
                  "text":"Moving a camp to a new location",
                  "id":"1.01.06"
                },
                {
                  "text":"Disrupting an on-going event of the perceived 1%",
                  "id":"1.01.07"
                },
                {
                  "text":"Blocking Action",
                  "id":"1.01.04"
                },
                {
                  "text":"Establishing a Camp",
                  "id":"1.01.05"
                },
                {
                  "text":"Divestment Action",
                  "id":"1.01.08"
                },
                {
                  "text":"Voluntary Dissolution of a camp",
                  "id":"1.01.09"
                },
                {
                  "text":"Strategic Sabotage",
                  "id":"1.01.11"
                },
                {
                  "text":"Strategic Violence",
                  "id":"1.01.10"
                }
              ],
              "dependencies":[
                {
                  "then":"1.02",
                  "if":"1.01.04"
                },
                {
                  "then":"1.03",
                  "if":"1.01.07"
                },
                {
                  "then":"1.05",
                  "if":"1.01.10"
                },
                {
                  "then":"1.06",
                  "if":"1.01.11"
                }
              ],
              "type":"dd",
              "id":"1.01"
            },
            {
              "text":"What type of strategic sabotage occurred?",
              "top":false,
              "answers":[
                {
                  "text":"Pre-planned arson",
                  "id":"1.06.02"
                },
                {
                  "text":"Pre-planned vandalism",
                  "id":"1.06.01"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"1.06"
            },
            {
              "text":"What is the position or title of the 1% who is being protested against?",
              "top":false,
              "answers":[
                {
                  "text":"City mayor",
                  "id":"1.04.02"
                },
                {
                  "text":"City council member",
                  "id":"1.04.03"
                },
                {
                  "text":"CEO of some company",
                  "id":"1.04.01"
                },
                {
                  "text":"State legislature",
                  "id":"1.04.04"
                },
                {
                  "text":"U.S. president",
                  "id":"1.04.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"1.04"
            },
            {
              "text":"What type of strategic violence occurred?",
              "top":false,
              "answers":[
                {
                  "text":"Assassination",
                  "id":"1.05.02"
                },
                {
                  "text":"Bombing",
                  "id":"1.05.03"
                },
                {
                  "text":"Kidnapping",
                  "id":"1.05.01"
                },
                {
                  "text":"Assault",
                  "id":"1.05.04"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"1.05"
            }
          ],
          "name":"Event type"
        },
        {
          "id":"3",
          "questions":[
            {
              "text":"Exactly how many arrests occurred during the event? (If the text specifically states, \"no arrests were made,\" then type in the number 0)",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"3.02"
            },
            {
              "text":"Approximately how many arrests occurred?",
              "top":false,
              "answers":[
                {
                  "text":"5-10",
                  "id":"3.03.02"
                },
                {
                  "text":"10-25",
                  "id":"3.03.03"
                },
                {
                  "text":"1-5",
                  "id":"3.03.01"
                },
                {
                  "text":"100+",
                  "id":"3.03.06"
                },
                {
                  "text":"25-50",
                  "id":"3.03.04"
                },
                {
                  "text":"50-100",
                  "id":"3.03.05"
                }
              ],
              "dependencies":[
                {
                  "then":"3.04",
                  "if":"3.03"
                }
              ],
              "type":"mc",
              "id":"3.03"
            },
            {
              "text":"If no specific time is given, please highlight any words giving clues about what time the arrests occurred (e.g. \"hours after police warned protesters to leave the area\")",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"3.13"
            },
            {
              "text":"Which of the following information does the text give about arrests that occurred during the event?",
              "top":true,
              "answers":[
                {
                  "text":"An estimate or approximate number",
                  "id":"3.01.02"
                },
                {
                  "text":"Information not given",
                  "id":"3.01.03"
                },
                {
                  "text":"The exact number",
                  "id":"3.01.01"
                }
              ],
              "dependencies":[
                {
                  "then":"3.02",
                  "if":"3.01.01"
                },
                {
                  "then":"3.03",
                  "if":"3.01.02"
                }
              ],
              "type":"mc",
              "id":"3.01"
            },
            {
              "text":"Exactly when did the arrests occur?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"3.06"
            },
            {
              "text":"If no specific time is given, please highlight any words giving clues about what time the arrests occurred (e.g. \"hours after police warned protesters to leave the area\")",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"3.07"
            },
            {
              "text":"Who was arrested?",
              "top":false,
              "answers":[
                {
                  "text":"Counterprotesters",
                  "id":"3.04.02"
                },
                {
                  "text":"Protesters from other cities",
                  "id":"3.04.03"
                },
                {
                  "text":"Protesters",
                  "id":"3.04.01"
                },
                {
                  "text":"City official",
                  "id":"3.04.06"
                },
                {
                  "text":"Other",
                  "id":"3.04.07"
                },
                {
                  "text":"Independent",
                  "id":"3.04.04"
                },
                {
                  "text":"News reporters",
                  "id":"3.04.05"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"3.04"
            },
            {
              "text":"Which of the following information does the text give about when the arrests occurred?",
              "top":true,
              "answers":[
                {
                  "text":"An approximate time",
                  "id":"3.05.02"
                },
                {
                  "text":"Information not given",
                  "id":"3.05.03"
                },
                {
                  "text":"The exact time",
                  "id":"3.05.01"
                }
              ],
              "dependencies":[
                {
                  "then":"3.06",
                  "if":"3.05.01"
                },
                {
                  "then":"3.07",
                  "if":"3.05.02"
                }
              ],
              "type":"mc",
              "id":"3.05"
            },
            {
              "text":"If no specific time is given, please highlight any words giving clues about what time the injuries occurred (e.g. \"hours after police warned protesters to leave the area\")",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"3.19"
            },
            {
              "text":"Exactly when were the police injured?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"3.18"
            },
            {
              "text":"Which of the following information does the text give about the number of protesters injured during the event?",
              "top":true,
              "answers":[
                {
                  "text":"An estimate or approximate number",
                  "id":"3.08.02"
                },
                {
                  "text":"Information not given",
                  "id":"3.08.03"
                },
                {
                  "text":"The exact number",
                  "id":"3.08.01"
                }
              ],
              "dependencies":[
                {
                  "then":"3.09",
                  "if":"3.08.01"
                },
                {
                  "then":"3.10",
                  "if":"3.08.02"
                }
              ],
              "type":"mc",
              "id":"3.08"
            },
            {
              "text":"Exactly how many protesters were injured during the event? (If the text specifically states, \"no injuries occurred,\" then type in the number 0)",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"3.09"
            },
            {
              "text":"Approximately how many police were injured during the event?",
              "top":false,
              "answers":[
                {
                  "text":"5-10",
                  "id":"3.16.02"
                },
                {
                  "text":"10-25",
                  "id":"3.16.03"
                },
                {
                  "text":"1-5",
                  "id":"3.16.01"
                },
                {
                  "text":"25-50",
                  "id":"3.16.04"
                },
                {
                  "text":"50+",
                  "id":"3.16.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"3.16"
            },
            {
              "text":"Exactly when were the protesters injured?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"3.12"
            },
            {
              "text":"Which of the following information does the text give about when the police were injured?",
              "top":true,
              "answers":[
                {
                  "text":"An approximate time",
                  "id":"3.17.02"
                },
                {
                  "text":"Information not given",
                  "id":"3.17.03"
                },
                {
                  "text":"The exact time",
                  "id":"3.17.01"
                }
              ],
              "dependencies":[
                {
                  "then":"3.18",
                  "if":"3.17.01"
                },
                {
                  "then":"3.19",
                  "if":"3.17.02"
                }
              ],
              "type":"mc",
              "id":"3.17"
            },
            {
              "text":"Which of the following information does the text give about the number of police injured during the event?",
              "top":true,
              "answers":[
                {
                  "text":"An estimate or approximate number",
                  "id":"3.14.02"
                },
                {
                  "text":"Information not given",
                  "id":"3.14.03"
                },
                {
                  "text":"The exact number",
                  "id":"3.14.01"
                }
              ],
              "dependencies":[
                {
                  "then":"3.15",
                  "if":"3.14.01"
                },
                {
                  "then":"3.16",
                  "if":"3.14.02"
                }
              ],
              "type":"mc",
              "id":"3.14"
            },
            {
              "text":"Which of the following information does the text give about when the protesters were injured?",
              "top":true,
              "answers":[
                {
                  "text":"An approximate time",
                  "id":"3.11.02"
                },
                {
                  "text":"Information not given",
                  "id":"3.11.03"
                },
                {
                  "text":"The exact time",
                  "id":"3.11.01"
                }
              ],
              "dependencies":[
                {
                  "then":"3.12",
                  "if":"3.11.01"
                },
                {
                  "then":"3.13",
                  "if":"3.11.02"
                }
              ],
              "type":"mc",
              "id":"3.11"
            },
            {
              "text":"Exactly how many police were injured during the event? (If the text specifically states, \"no injuries occurred,\" then type in the number 0)",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"3.15"
            },
            {
              "text":"Approximately how many protesters were injured during the event?",
              "top":false,
              "answers":[
                {
                  "text":"5-10",
                  "id":"3.10.02"
                },
                {
                  "text":"10-25",
                  "id":"3.10.03"
                },
                {
                  "text":"1-5",
                  "id":"3.10.01"
                },
                {
                  "text":"25-50",
                  "id":"3.10.04"
                },
                {
                  "text":"50+",
                  "id":"3.10.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"3.10"
            }
          ],
          "name":"Arrests/injuries"
        },
        {
          "id":"2",
          "questions":[
            {
              "text":"Exactly where did the event take place?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"2.02"
            },
            {
              "text":"Please highlight the text that gives clues about the approximate location of this event.",
              "top":true,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"2.03"
            },
            {
              "text":"Which of the following information does the text give about the event's location?",
              "top":true,
              "answers":[
                {
                  "text":"An approximate location, or clues about where the event took place (e.g. \"the small group of protesters marched down Market Street)",
                  "id":"2.01.02"
                },
                {
                  "text":"Information not given",
                  "id":"2.01.03"
                },
                {
                  "text":"The exact location or address",
                  "id":"2.01.01"
                }
              ],
              "dependencies":[
                {
                  "then":"2.02",
                  "if":"2.01.01"
                },
                {
                  "then":"2.06",
                  "if":"2.01.02"
                }
              ],
              "type":"mc",
              "id":"2.01"
            },
            {
              "text":"Approximately how many protesters were in attendance?",
              "top":false,
              "answers":[
                {
                  "text":"\"Several,\" a \"group\", 6-11",
                  "id":"2.06.02"
                },
                {
                  "text":"\"A dozen (or so)\" 12-19",
                  "id":"2.06.03"
                },
                {
                  "text":"\"Well over ten thousand\" 1201-17000",
                  "id":"2.06.13"
                },
                {
                  "text":"A \"few,\" \"handful,\" \"small group,\" 2-5",
                  "id":"2.06.01"
                },
                {
                  "text":"A \"large crowd\" \" a hundred or so\" 76-150",
                  "id":"2.06.06"
                },
                {
                  "text":"A \"mass,\" \"hundreds\" 150-500",
                  "id":"2.06.07"
                },
                {
                  "text":"\"A small crowd \" A couple dozen\" 20-34",
                  "id":"2.06.04"
                },
                {
                  "text":"\"A crowd\" 35-75",
                  "id":"2.06.05"
                },
                {
                  "text":"\"Several hundred\" 501-850",
                  "id":"2.06.08"
                },
                {
                  "text":"\"About a thousand\" 851-1300",
                  "id":"2.06.09"
                },
                {
                  "text":"\"Around ten thousand\" 8501-12000",
                  "id":"2.06.12"
                },
                {
                  "text":"Tens of thousands 17001-30,000",
                  "id":"2.06.14"
                },
                {
                  "text":"\"Several thousand\" 4501-8500",
                  "id":"2.06.11"
                },
                {
                  "text":"More than 30,000",
                  "id":"2.06.15"
                },
                {
                  "text":"\"Thousands,\" A few thousand\" 1300-4500",
                  "id":"2.06.10"
                }
              ],
              "dependencies":[
                {
                  "then":"2.07",
                  "if":"2.06"
                }
              ],
              "type":"dd",
              "id":"2.06"
            },
            {
              "text":"estimated the number of protesters in attendance?",
              "top":false,
              "answers":[
                {
                  "text":"Police",
                  "id":"2.07.02"
                },
                {
                  "text":"City official",
                  "id":"2.07.03"
                },
                {
                  "text":"Media",
                  "id":"2.07.01"
                },
                {
                  "text":"Information not given",
                  "id":"2.07.06"
                },
                {
                  "text":"Other",
                  "id":"2.07.07"
                },
                {
                  "text":"Protester",
                  "id":"2.07.04"
                },
                {
                  "text":"Citizen or other person not affiliated with the camp, media, police, or city",
                  "id":"2.07.05"
                }
              ],
              "dependencies":[

              ],
              "type":"Who",
              "id":"2.07"
            },
            {
              "text":"Which of the following information does the text give about the number of protesters at the event?",
              "top":true,
              "answers":[
                {
                  "text":"An estimate or approximate number",
                  "id":"2.04.02"
                },
                {
                  "text":"Information not given",
                  "id":"2.04.03"
                },
                {
                  "text":"The exact number",
                  "id":"2.04.01"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"2.04"
            },
            {
              "text":"Exactly how many protesters were in attendance?",
              "top":true,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"2.05"
            },
            {
              "text":"Which of the following information does the text give about the number of police at the event?",
              "top":true,
              "answers":[
                {
                  "text":"An estimate or approximate number",
                  "id":"2.08.02"
                },
                {
                  "text":"Information not given",
                  "id":"2.08.03"
                },
                {
                  "text":"The exact number",
                  "id":"2.08.01"
                }
              ],
              "dependencies":[
                {
                  "then":"2.09",
                  "if":"2.08.01"
                },
                {
                  "then":"2.10",
                  "if":"2.08.02"
                }
              ],
              "type":"mc",
              "id":"2.08"
            },
            {
              "text":"Exactly how many police were in attendance?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tb",
              "id":"2.09"
            },
            {
              "text":"Which of the following age groups were present at the event?",
              "top":true,
              "answers":[
                {
                  "text":"Under 18",
                  "id":"2.14.02"
                },
                {
                  "text":"18-25",
                  "id":"2.14.03"
                },
                {
                  "text":"A wide variety of ages",
                  "id":"2.14.01"
                },
                {
                  "text":"45-64",
                  "id":"2.14.06"
                },
                {
                  "text":"65+",
                  "id":"2.14.07"
                },
                {
                  "text":"26-34",
                  "id":"2.14.04"
                },
                {
                  "text":"35-44",
                  "id":"2.14.05"
                },
                {
                  "text":"Information not given",
                  "id":"2.14.08"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"2.14"
            },
            {
              "text":"When exactly did the event end?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"2.20"
            },
            {
              "text":"Approximately when did the event end?",
              "top":false,
              "answers":[
                {
                  "text":"Late morning (9am-12pm)",
                  "id":"2.21.02"
                },
                {
                  "text":"Afternoon (12pm-5pm)",
                  "id":"2.21.03"
                },
                {
                  "text":"Early morning (4am-9am)",
                  "id":"2.21.01"
                },
                {
                  "text":"Late night (11pm-4am)",
                  "id":"2.21.06"
                },
                {
                  "text":"Evening (5pm-8pm)",
                  "id":"2.21.04"
                },
                {
                  "text":"Night (8pm-11pm)",
                  "id":"2.21.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"2.21"
            },
            {
              "text":"Who estimated the number of police in attendance?",
              "top":false,
              "answers":[
                {
                  "text":"Police",
                  "id":"2.11.02"
                },
                {
                  "text":"City official",
                  "id":"2.11.03"
                },
                {
                  "text":"Media",
                  "id":"2.11.01"
                },
                {
                  "text":"Information not given",
                  "id":"2.11.06"
                },
                {
                  "text":"Other",
                  "id":"2.11.07"
                },
                {
                  "text":"Protester",
                  "id":"2.11.04"
                },
                {
                  "text":"Citizen or other person not affiliated with the camp, media, police, or city",
                  "id":"2.11.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"2.11"
            },
            {
              "text":"Approximately how many police were in attendance?",
              "top":false,
              "answers":[
                {
                  "text":"\"Several,\" a \"group\", 6-11",
                  "id":"2.10.02"
                },
                {
                  "text":"\"A dozen (or so)\" 12-19",
                  "id":"2.10.03"
                },
                {
                  "text":"\"Well over ten thousand\" 1201-17000",
                  "id":"2.10.13"
                },
                {
                  "text":"A \"few,\" \"handful,\" \"small group,\" 2-5",
                  "id":"2.10.01"
                },
                {
                  "text":"A \"large crowd\" \"a hundred or so\" 76-150",
                  "id":"2.10.06"
                },
                {
                  "text":"A \"mass,\" \"hundreds\" 150-500",
                  "id":"2.10.07"
                },
                {
                  "text":"\"A small crowd\" A couple dozen\" 20-34",
                  "id":"2.10.04"
                },
                {
                  "text":"\"A crowd\" 35-75",
                  "id":"2.10.05"
                },
                {
                  "text":"\"Several hundred\" 501-850",
                  "id":"2.10.08"
                },
                {
                  "text":"\"About a thousand\" 851-1300",
                  "id":"2.10.09"
                },
                {
                  "text":"\"Around ten thousand\" 8501-12000",
                  "id":"2.10.12"
                },
                {
                  "text":"Tens of thousands 17001-30,000",
                  "id":"2.10.14"
                },
                {
                  "text":"\"Several thousand\" 4501-8500",
                  "id":"2.10.11"
                },
                {
                  "text":"More than 30,000",
                  "id":"2.10.15"
                },
                {
                  "text":"\"Thousands,\" A few thousand\" 1300-4500",
                  "id":"2.10.10"
                }
              ],
              "dependencies":[
                {
                  "then":"2.11",
                  "if":"2.10"
                }
              ],
              "type":"dd",
              "id":"2.10"
            },
            {
              "text":"Which of the following economic class groups were present at the event?",
              "top":true,
              "answers":[
                {
                  "text":"Working/Lower (less than $25,000)",
                  "id":"2.13.02"
                },
                {
                  "text":"Lower-Middle ($25,000-$49,999)",
                  "id":"2.13.03"
                },
                {
                  "text":"A wide variety of classes",
                  "id":"2.13.01"
                },
                {
                  "text":"Upper ($100,000+)",
                  "id":"2.13.06"
                },
                {
                  "text":"The 1% ($250,000+)",
                  "id":"2.13.07"
                },
                {
                  "text":"Middle ($50,000-$74,999)",
                  "id":"2.13.04"
                },
                {
                  "text":"Upper-Middle ($75,000-$100,000)",
                  "id":"2.13.05"
                },
                {
                  "text":"Information not given",
                  "id":"2.13.08"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"2.13"
            },
            {
              "text":"Which of the following groups and identities were present at the event?",
              "top":true,
              "answers":[
                {
                  "text":"Homeless people",
                  "id":"2.12.02"
                },
                {
                  "text":"Union members",
                  "id":"2.12.03"
                },
                {
                  "text":"Children",
                  "id":"2.12.13"
                },
                {
                  "text":"Anarchists",
                  "id":"2.12.01"
                },
                {
                  "text":"Occupy the Hood protesters",
                  "id":"2.12.06"
                },
                {
                  "text":"Other groups allied with Occupy",
                  "id":"2.12.07"
                },
                {
                  "text":"Reinforcement campers from other cities",
                  "id":"2.12.04"
                },
                {
                  "text":"Religious leaders or communities",
                  "id":"2.12.05"
                },
                {
                  "text":"African-American people",
                  "id":"2.12.08"
                },
                {
                  "text":"Hispanic/Latino/Chicano people",
                  "id":"2.12.09"
                },
                {
                  "text":"Information not given",
                  "id":"2.12.16"
                },
                {
                  "text":"People under the age of 30",
                  "id":"2.12.12"
                },
                {
                  "text":"Women",
                  "id":"2.12.14"
                },
                {
                  "text":"Native American people",
                  "id":"2.12.11"
                },
                {
                  "text":"Celebrities",
                  "id":"2.12.15"
                },
                {
                  "text":"Asian-American/Pacific Islander people",
                  "id":"2.12.10"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"2.12"
            },
            {
              "text":"Which of the following educational attainment groups were present at the event?",
              "top":true,
              "answers":[
                {
                  "text":"Less than high school diploma",
                  "id":"2.15.02"
                },
                {
                  "text":"High school diploma/GED",
                  "id":"2.15.03"
                },
                {
                  "text":"People with a wide variety of educational attainment levels",
                  "id":"2.15.01"
                },
                {
                  "text":"Master's degree",
                  "id":"2.15.06"
                },
                {
                  "text":"PhD",
                  "id":"2.15.07"
                },
                {
                  "text":"Some college (2 years or fewer)",
                  "id":"2.15.04"
                },
                {
                  "text":"College degree (B.A., B.S., trade school, technical school)",
                  "id":"2.15.05"
                },
                {
                  "text":"Information not given",
                  "id":"2.15.08"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"2.15"
            },
            {
              "text":"Approximately how long did the event last?",
              "top":false,
              "answers":[
                {
                  "text":"***will add attributes***",
                  "id":"2.22.01"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"2.22"
            },
            {
              "text":"Which of the following information does the text give about when the event occurred?",
              "top":true,
              "answers":[
                {
                  "text":"An approximate start time",
                  "id":"2.17.02"
                },
                {
                  "text":"The exact end time",
                  "id":"2.17.03"
                },
                {
                  "text":"The exact start time",
                  "id":"2.17.01"
                },
                {
                  "text":"Information not given",
                  "id":"2.17.06"
                },
                {
                  "text":"An approximate end time",
                  "id":"2.17.04"
                },
                {
                  "text":"The duration (the length of time the event lasted after it began)",
                  "id":"2.17.05"
                }
              ],
              "dependencies":[
                {
                  "then":"2.18",
                  "if":"2.17.01"
                },
                {
                  "then":"2.19",
                  "if":"2.17.02"
                },
                {
                  "then":"2.20",
                  "if":"2.17.03"
                },
                {
                  "then":"2.21",
                  "if":"2.17.04"
                },
                {
                  "then":"2.22",
                  "if":"2.17.05"
                }
              ],
              "type":"mc",
              "id":"2.17"
            },
            {
              "text":"Which of the following job titles/occupations are held by people who attended the event?",
              "top":true,
              "answers":[
                {
                  "text":"Unemployed",
                  "id":"2.16.02"
                },
                {
                  "text":"Teacher, professor",
                  "id":"2.16.03"
                },
                {
                  "text":"People with a wide variety of job titles/occupations",
                  "id":"2.16.01"
                },
                {
                  "text":"Caretaker",
                  "id":"2.16.06"
                },
                {
                  "text":"Farmer",
                  "id":"2.16.07"
                },
                {
                  "text":"Business worker",
                  "id":"2.16.04"
                },
                {
                  "text":"Factory worker",
                  "id":"2.16.05"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"2.16"
            },
            {
              "text":"Approximately when did the event begin?",
              "top":false,
              "answers":[
                {
                  "text":"Late morning (9am-12pm)",
                  "id":"2.19.02"
                },
                {
                  "text":"Afternoon (12pm-5pm)",
                  "id":"2.19.03"
                },
                {
                  "text":"Early morning (4am-9am)",
                  "id":"2.19.01"
                },
                {
                  "text":"Late night (11pm-4am)",
                  "id":"2.19.06"
                },
                {
                  "text":"Evening (5pm-8pm)",
                  "id":"2.19.04"
                },
                {
                  "text":"Night (8pm-11pm)",
                  "id":"2.19.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"2.19"
            },
            {
              "text":"When exactly did the event begin?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"2.18"
            }
          ],
          "name":"Event setting and composition (location, attendance, time/duration)"
        },
        {
          "id":"5",
          "questions":[
            {
              "text":"What was the party's level of support?",
              "top":false,
              "answers":[
                {
                  "text":"Somewhat unsupportive, slightly negative",
                  "id":"5.02.02"
                },
                {
                  "text":"Neutral",
                  "id":"5.02.03"
                },
                {
                  "text":"Strongly unsupportive, very negative, oppositional",
                  "id":"5.02.01"
                },
                {
                  "text":"Somewhat supportive, slightly positive",
                  "id":"5.02.04"
                },
                {
                  "text":"Strongly supportive, very positive, enthusiastic",
                  "id":"5.02.05"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"5.02"
            },
            {
              "text":"Which of the following parties responded to the event?",
              "top":true,
              "answers":[
                {
                  "text":"Passerby/onlooker, individual not affiliated with the event (ex. citizens, local business owners)",
                  "id":"5.01.02"
                },
                {
                  "text":"Community group that is not Occupy (ex. church, interest group, local organization)",
                  "id":"5.01.03"
                },
                {
                  "text":"Individual affiliated with the event",
                  "id":"5.01.01"
                },
                {
                  "text":"Other",
                  "id":"5.01.06"
                },
                {
                  "text":"Information not given",
                  "id":"5.01.07"
                },
                {
                  "text":"City government official",
                  "id":"5.01.04"
                },
                {
                  "text":"Celebrity or politician",
                  "id":"5.01.05"
                }
              ],
              "dependencies":[
                {
                  "then":"5.02",
                  "if":"5.01.01"
                },
                {
                  "then":"5.02",
                  "if":"5.01.02"
                },
                {
                  "then":"5.02",
                  "if":"5.01.03"
                },
                {
                  "then":"5.02",
                  "if":"5.01.04"
                },
                {
                  "then":"5.02",
                  "if":"5.01.05"
                },
                {
                  "then":"5.02",
                  "if":"5.01.06"
                }
              ],
              "type":"cl",
              "id":"5.01"
            }
          ],
          "name":"Community response"
        },
        {
          "id":"4",
          "questions":[
            {
              "text":"When does the event permit start?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"4.02"
            },
            {
              "text":"When does the event permit expire?",
              "top":false,
              "answers":[

              ],
              "dependencies":[

              ],
              "type":"tm",
              "id":"4.03"
            },
            {
              "text":"Was the event permitted?",
              "top":true,
              "answers":[
                {
                  "text":"No",
                  "id":"4.01.02"
                },
                {
                  "text":"Information not given",
                  "id":"4.01.03"
                },
                {
                  "text":"Yes",
                  "id":"4.01.01"
                }
              ],
              "dependencies":[
                {
                  "then":"4.02",
                  "if":"4.01.01"
                },
                {
                  "then":"4.03",
                  "if":"4.01.01"
                },
                {
                  "then":"4.04",
                  "if":"4.01.01"
                }
              ],
              "type":"mc",
              "id":"4.01"
            },
            {
              "text":"Was a permit necessary in order to hold the event, even though protesters did not acquire a permit?",
              "top":true,
              "answers":[
                {
                  "text":"No",
                  "id":"4.06.02"
                },
                {
                  "text":"Information not given",
                  "id":"4.06.03"
                },
                {
                  "text":"Yes",
                  "id":"4.06.01"
                }
              ],
              "dependencies":[
                {
                  "then":"4.07",
                  "if":"4.06.01"
                }
              ],
              "type":"mc",
              "id":"4.06"
            },
            {
              "text":"Is the city government and/or police informally allowing the event, despite it not having a permit?",
              "top":false,
              "answers":[
                {
                  "text":"No",
                  "id":"4.07.02"
                },
                {
                  "text":"Information not given",
                  "id":"4.07.03"
                },
                {
                  "text":"Yes",
                  "id":"4.07.01"
                }
              ],
              "dependencies":[

              ],
              "type":"mc",
              "id":"4.07"
            },
            {
              "text":"Does the event permit come with conditions or requirements that the protesters must follow?",
              "top":false,
              "answers":[
                {
                  "text":"No",
                  "id":"4.04.02"
                },
                {
                  "text":"Information not given",
                  "id":"4.04.03"
                },
                {
                  "text":"Yes",
                  "id":"4.04.01"
                }
              ],
              "dependencies":[
                {
                  "then":"4.05",
                  "if":"4.04.01"
                }
              ],
              "type":"mc",
              "id":"4.04"
            },
            {
              "text":"Which are conditions or requirements of the event permit? Select all that apply:",
              "top":false,
              "answers":[
                {
                  "text":"Must not close the street",
                  "id":"4.05.02"
                },
                {
                  "text":"Must not block the sidewalk",
                  "id":"4.05.03"
                },
                {
                  "text":"Tents and other semi-permanent structures cannot be present",
                  "id":"4.05.01"
                },
                {
                  "text":"Must not place signage or banners",
                  "id":"4.05.06"
                },
                {
                  "text":"The crowd must not exceed a certain number of people",
                  "id":"4.05.07"
                },
                {
                  "text":"Must not block or restrict public property",
                  "id":"4.05.04"
                },
                {
                  "text":"Must not sell merchandise, food, or beverage",
                  "id":"4.05.05"
                },
                {
                  "text":"Other",
                  "id":"4.05.08"
                }
              ],
              "dependencies":[

              ],
              "type":"cl",
              "id":"4.05"
            }
          ],
          "name":"Permit"
        }
      ],
      "tua":{
        "offsets":[
          {
            "start":435,
            "stop":445
          },
          {
            "start":593,
            "stop":613
          }
        ],
        "type":"Protester",
        "id":"3",
        "instructions":"The highlighted text describes an event occurring during the Occupy movement. We need your help to categorize what kind of event this was. Compare the information in the highlighted text to the definitions in the table below."
      }
    }
    res.send([task]);
  })
  app.use('/', mockServerRouter);
};
