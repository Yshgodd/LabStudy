
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import OpenAI from 'openai';
const { Configuration, OpenAIApi } = OpenAI;

const configuration = new Configuration({
    organization: "org-pE5yaM5sAS7aNTOQTSR8xDrw",// pls check your organization and put in here
    apiKey: "YOUR_API_KEY_HERE",
});
const openai = new OpenAIApi(configuration);



//create a simple express api that calls the function above
const app = express();
app.use(bodyParser.json());
app.use(cors());


const port = 3001

// app.post('/', async (req,res) => {
//   const { message , currentModel } = req.body;
//   const response = await openai.createCompletion({
//     model: `${currentModel}`,
//     prompt: `${message}`,
//     max_tokens: 100,
//     temperature: 0,
//   });

//   res.json({
//     // data: response.data
//     message: response.data.choices[0].text,
//   })
// });



app.post('/', async(req,res) => {
  // const response = await openai.listModels();
  // console.log(response.data.data)
  // res.json({
  //   models: response.data
  // })
  const {input} = req.body;
  const response = await openai.createChatCompletion({
   model: "gpt-3.5-turbo",//     model: `${currentModel}`,
   messages: [{"role": "system", "content": "You are a helpful assistant."}, {role: "user", content: `${input}`}], //     prompt: `${message}`,
   max_tokens:100,//     max_tokens: 100,
   temperature: 0,//     temperature: 0,
     });
     console.log(response.data.choices[0])
    //  res.json({
    //   message: "hello World"
    //  })
    if(response.data.choices[0].message){
      res.json({
        message: response.data.choices[0].message
      })
    }
});

app.listen(port, () =>{
  console.log(`Example app listening at http://localhost:${port}`)
});


