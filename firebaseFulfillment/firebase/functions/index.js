'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
  function welcome(agent) {
    agent.add(`Welcome to my agent!`);
  }
  
  function what_am_i(agent){
    agent.add(`I am a virtual bot`);
    agent.add(`I am a chatbot and I am on the bleeding edge of technology`);
  }
  
  function programming(agent){
  agent.add(`I was built using Google's dialogflow platform and an Android Java client. You can replicate me utilising any client scripting language ... just contact the developers`);
  }
 
  function goodbye(agent){
  agent.add(`It was great talking to you,Hope we can do this sometime soon.`);
  agent.add(`Farewell, I wish you best of luck on behalf of the developers`);
  agent.add(`Going away so soon? Am I boring?`);  
  }
  function about(agent){
  agent.add(`I was built by group 105 consisting of Sylvester, Kunal, Samieksha , Nikita , Shashank and Kandarp as part of the web services digital assignment`);  
  }
  
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }

  
  let intentMap = new Map();
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
  intentMap.set('what_am_i',what_am_i);
  intentMap.set('goodbye',goodbye);
  intentMap.set('programming_intent',programming);
  intentMap.set('about_developers',about);
  agent.handleRequest(intentMap);
});
