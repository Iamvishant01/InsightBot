import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
// Gemini
import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_Key);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });


const WelcomePage = () =>{
    const location = useLocation();
    const { name } = location.state || {};
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");

    async function getAns() {
        setAnswer("Loading...........");
        const prompt = question;
        const result = await model.generateContent(prompt);
        setAnswer(result.response.text());
    }

    return(
        <>
        <div className='WelcomeBox'>
           {name ? (
           <p>Hello, {name} ! <br />How can i assist you today ?</p>
            ) : (
           <p>No name provided.</p>
            )}
                    <div className="bot-inputs">
          <input type="text" value={question} onChange={(e)=>setQuestion(e.target.value)} placeholder='   Message InsightBot' id="msgbox" /> &nbsp;
          <button type="button" class="btn btn-success btn-send" onClick={getAns}>Send ➤</button>
        </div>
         </div>
        <div className="responses">
          {name +": "+ question}
          <br />
          <br />
          {"InsightBot:  "+answer}
        </div>
        </>
    );
};
export default WelcomePage;