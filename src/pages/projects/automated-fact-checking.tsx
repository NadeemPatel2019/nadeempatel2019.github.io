import React from 'react';

const AutomatedFactChecking = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Automated Fact Checking</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Real-time Fact Checking with Voice Interface</h2>
        </div>

        <div className="mt-12 prose prose-lg mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Team Members</h3>
            <p>Team Nifty: Nadeem Patel, Clarissa Qain, David Nelson, Siqi Chen</p>
            <p>Team Prime: Alexis Baudron, Michael Benimovich, Faye Yifei Gong, Matthew Wang</p>
            <p>Faculty & Staff Leads: Kris Hammond, Zach Wiseman</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">What is it?</h3>
            <p>Coming across accurate information while watching the news or a YouTube video may not always be true. Automated Fact Checking utilizes Alexa and Google Fact Check API in order to provide verification while capturing information during real time.</p>
            <p>Before going into this project, "the goal would be to provide factual verification of the news as it is presented that supports further questions about the context (history, alternative points of view, evidence, etc.) of a news story and/or quote. The challenge would be to provide immediate access to the facts in real or semi-real time."</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <p>This tool focuses on fact checking information during live time. It works by listening for a specific amount of time, converting the audio to text, extracting keywords from text, packages this in a custom object (timestamped) and sends it to S3.</p>
            <p>The primary source of fact checking is the Google Fact Check API. If this API fails to return a relevant claim review, the claim gets sent to the summarizer. The summarizer then scrapes the internet for web pages with relevant content, scrapes the pages and returns a two sentence summarizer to provide additional information on the claim.</p>
            
            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Process Architect / Pipeline</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/automatedfactchecking/pipeline.png" alt="pipeline" className="w-full h-auto" />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">User Flow</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/automatedfactchecking/userflow2.png" alt="userflow2" className="w-full h-auto" />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">The Process & User Testing: Changes to the pipeline and adjustments to UX/UI</h3>
            <p>The project was split between two groups, Nifty and Prime. My team, Nifty, and I began with the goal of developing a Chrome extension that fits the planned architecture that Prime would design. We decided that an existing API would work best since it would be a lot faster and much more reliable than what we would develop in 10 weeks. The goal was not to take the speech to text transcription and put it into the fact-checking API. The extension would be used for the fact-checking API. A higher level goal was to have transcriptions timestamps so Prime can use that feature for the fact-checking API. One of Prime's initial goals was to determine the user architect and define the major components. This meant compartmentalizing the functionalities, determining the best frameworks and tools that will build each component, draw out a diagram and research two possible implementation options for every component. They needed to narrow down the implementation components by understanding the needs and constraints of our application, understand the core goals and the most important functionalities of the application. Part of this process also meant deciding the tradeoffs between various implementations.</p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Initial Process Architect / Pipeline</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/automatedfactchecking/int-pipeline.png" alt="initial pipeline" className="w-full h-auto" />
              </div>
            </div>

            <p className="mt-8">Both teams worked together on user interviews, testing and implementing feedback into the user interface. Nifty began by looking into different kinds of content that is generally consumed and tried to understand the mis- and disinformation that can be associated with the content. Part of carrying out this research was figuring out how people experience fact-checking when it comes to different products, formats and contexts. During this phase, we also began developing and testing different fact check formats that could automatically appear on social networks. The end game was to implement all these ideas and initiatives across all aspects of our work. Nifty also looked into previous experiments, applications and studies regarding fact-checking.</p>

            <p className="mt-4">Prime wrote out a guide to begin user interviews, drawing questions around fake news, technical thoughts about such a tool (benefits, drawbacks, impact, functions, thoughts) and interaction (current ways of fact-checking). A scenerio was also made to learn how users interact with Alexa when listening to a podcast or watching television (asking Alexa questions, asking follow-up question based on Alexa's response). Working with Prime, Nifty also began interviewing people with a focus on voice user interface — voice interaction (voice assitance), fact-checking (news consumption habits, sources, value of authenticity) and user flow (expecations of functionality and results).</p>
            
            <div className="mt-2">
              <a href="/images/automatedfactchecking/C1_DG_V1.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">Discussion Guide V1</a>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Initial User Flow</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/automatedfactchecking/userflow1.png" alt="initial user flow" className="w-full h-auto" />
              </div>
            </div>

            <p className="mt-8">Prime started to design the pipeline. The backend of the pipeline was designed to have a lambda-API endpoint, automatic building of the lambda function for easy code updates and lambda trigger on new text file upload to sort the incoming file by timestamp in the S3. Using other storage methods such as dynamoDB for efficient sorting was also being considered for the backend pipeline at this point. Prime also looked to define test function queries and configured the Alexa Skills with the AWS lambda endpoint.</p>

            <p className="mt-4">At this point, Nifty continued to focus on the Chrome extension that uses a speech to text API. The secondary goal was to have a working API that is efficient, so the team settled on Google API after moving away from the Amazon API. Nifty was able to run the API on flask with a Python file and an audio file, the Chrome extension was needed to generate the audio file and call the Python file. Then, the output would be placed into an AWS bucket for processing and fact-checking.</p>

            <p className="mt-4">Voice user interface design was a new task for both teams, so Prime looked into VUI design and worked on creating a proper plan. The team's research also consisted of actually understanding VUI design, including how it is different from "traditional" web design. The research would provide insight into who and where the user is as well as understand the entire communication process between the system and the terminal device from beginning to end. Prime looked into various voice interaction designs, user flow design key points and designing error strategies. This initial plan consisted of having a real-time check popup and notification sound while playing audio. User needs and insights would simply come from finding and interviewing voice assistant users. The team also drew out a plan for usability testing that would provide results to analyze.</p>
            
            <div className="mt-2">
              <a href="/images/automatedfactchecking/AFC_VUI_deck.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">VUI Design Plan</a>
            </div>

            <p className="mt-4">After speaking to various individuals, Prime and Nifty took away several insights and needs finding results. These interviews were taken into consideration when designing the user interface and drawing out a proper architect.</p>
            
            <div className="mt-2 space-x-4">
              <a href="/images/automatedfactchecking/VUI_user_interview1.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">VUI User Interviews (samples)</a>
              <a href="/images/automatedfactchecking/C1_Insights.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">Insights and User Interviews (samples)</a>
              <a href="/images/automatedfactchecking/C2_DG_V2.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">Discussion Guide V2</a>
            </div>

            <p className="mt-8">After setting the initial goals and some planning, the Prime team focused on developing the full pipeline, including the AWS backend to integrate the fact-checking API, trigger on POST to S3 bucket and distribute keys for S3. The assembling also consisted of including common interfaces for data as well as making sure the fact-checking API worked as expected through unit testing and looking at the returns from the API. Prime also looked into Alexa Skills to see how it triggers on lambda and worked to pass a timestamp that represents the time of query.</p>

            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <img src="/images/automatedfactchecking/alexaconsole.png" alt="Alexa Skills console" className="w-full h-auto rounded-lg" />
                <p className="text-sm italic text-gray-600 mt-2">Screenshot of Alexa Skills console</p>
              </div>
              <div>
                <img src="/images/automatedfactchecking/factchecking_API.png" alt="Fact-checking API code" className="w-full h-auto rounded-lg" />
                <p className="text-sm italic text-gray-600 mt-2">Screenshot of fact-checking API code. Includes endpoint with Google Factcheck Explorer, as well as simple NLP to determine best articles in the list using a word-match heuristic</p>
              </div>
            </div>

            <p className="mt-8">Nifty continued to work with the Google Chrome extension to figure out how to use it with the speech to text API and also figure out how to implement timestamps for transcriptions. The team was looking to improve the integration of speech to text API and have the fact-checking API work efficiently in the pipeline.</p>

            <div className="mt-4">
              <img src="/images/automatedfactchecking/s3bucket.png" alt="S3 bucket" className="w-full h-auto rounded-lg" />
              <p className="text-sm italic text-gray-600 mt-2">Screenshot of S3 bucket with timestamped elements inside</p>
            </div>

            <p className="mt-8">An issue Prime came across was dealing with the microphone input and recording. The recording bagan when the user wants by using a key input, but the only way to stop was by using a force CTRL-C. This stopped the whole program, so Prime needed to work on a continuous implementation. The team considered using hotkeys or stopping it once the user gets the first good packet. For the lambda API, the team worked on error handling and API distribution, including figuring out inconsistencies in the calls being made. Prime also looked to format the data by transferring to Python dataclasses for clear template of the interface and be able to encode or decode a packet. When it comes to Alexa Skills, the team wanted to finish the Alexa console with the lambda endpoint so they can make requests to the fact-checking API, parse the result and have Alexa say it.</p>

            <div className="mt-4">
              <img src="/images/automatedfactchecking/json_packet.png" alt="JSON packet" className="w-full h-auto rounded-lg" />
              <p className="text-sm italic text-gray-600 mt-2">Format of the json packet being passed around the pipeline</p>
            </div>

            <p className="mt-8">The Prime team wanted to provide users with a simple summary of related information when fact-checker fails to return a good response by scraping the web for information and returning a summary of one or two sentences. Part of this process was also determining where the cutoff for a good response occurs for the API return (determine what percent results in a fail and leads to a summary). Another factor to consider was determining what sentences should be scraped in the summary, so they considered aspects such as weighting of words in the query, scope of the article being scraped and how it influences sentence weights, selecting the best article from search and more in-depth sentence-relation analysis using properties of sentences (e.g. Does it answer the query, provide more insight or simply uses similar language?). At this point, Prime was also ready to begin running video examples on the API pipeline, so the team focused on finding an example that was successfully answered by the fact-checker, one that failed with a good summary and one that failed with a bad summary.</p>

            <p className="mt-4">During this part of the process, Nifty decided to move away from the Chrome extension and enhance the results feature. In order to improve the results that are returned to the questions asked, Nifty decided on using several fact-checking APIs. Moving away from the Chrome extension allowed the main purpose of the project to be more approachable, and this approach would be more accurate and reasonable based on word extraction. Nifty was working on compiling APIs, but it was unlikely the team would reach the point that the APIs would be part of the pipeline by the end of the quarter. The main focus was to finish immersing the fact-checking API.</p>

            <p className="mt-4">Nifty desgined the Chrome extension using feedback on VUI and UI. The wireframe was based on the idea that the application should not interrupt the work flow too much, does not take up too much screen and is foldable, a small chunk of core information is provided at a time by the voice assitance unless asking follow-up questions and the voice assitance should give short answers with deep information on the UI. Information priority consisted of who did the fact-checking, the result of the fact-checking, the source information used and who produced the information. Also, this priority included follow-up questions about the source information, link to the fact-checking aritcle and source information as well as relative news.</p>
            
            <div className="mt-2">
              <a href="/images/automatedfactchecking/VUI_user_interview2.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">VUI User Interviews 2 (samples)</a>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Low-fi Prototype Adobe XD (VUI + UI Wireframe)</h4>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <img src="/images/automatedfactchecking/wireframe1.png" alt="Wireframe 1" className="w-full h-auto rounded-lg border border-gray-300" />
                </div>
                <div>
                  <img src="/images/automatedfactchecking/wireframe2.png" alt="Wireframe 2" className="w-full h-auto rounded-lg border border-gray-300" />
                </div>
                <div>
                  <img src="/images/automatedfactchecking/wireframe3.png" alt="Wireframe 3" className="w-full h-auto rounded-lg border border-gray-300" />
                </div>
                <div>
                  <img src="/images/automatedfactchecking/wireframe4.png" alt="Wireframe 4" className="w-full h-auto rounded-lg border border-gray-300" />
                </div>
              </div>
            </div>

            <div className="mt-2">
              <a href="/images/automatedfactchecking/VUI_wireframe_testing.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">Wireframe Testing Results (samples)</a>
            </div>

            <p className="mt-8">While Nifty used the wireframe to do testing, Prime drew up the first version of the VUI and UI mockup for its own testing process.</p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Prototype v1.0 (VUI)</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/automatedfactchecking/vui-v1.png" alt="VUI v1.0" className="w-full h-auto" />
              </div>
              
              <h4 className="text-lg font-semibold mb-4 mt-8">Prototype v1.0 (UI)</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/automatedfactchecking/prototype1.png" alt="UI Prototype 1.0" className="w-full h-auto" />
              </div>
            </div>

            <div className="mt-2 space-x-4">
              <a href="/images/automatedfactchecking/C3_User_testing.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">User Testing Questions</a>
              <a href="/images/automatedfactchecking/C4_User_testing_results.pdf" target="_blank" className="text-sm italic text-blue-600 hover:text-blue-800">User Testing Results</a>
            </div>

            <p className="mt-8">Towards the end of the process, the Prime team set out to make necessary changes or improvements to the audio input (microphone recognition), the server side in terms of context sorting files, the fact-checking API and summarizer while also refining Alexa Skills.</p>

            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <img src="/images/automatedfactchecking/recording_code.png" alt="Recording code" className="w-full h-auto rounded-lg" />
              </div>
              <div>
                <img src="/images/automatedfactchecking/recording.png" alt="Recording interface" className="w-full h-auto rounded-lg" />
              </div>
            </div>
            <p className="text-sm italic text-gray-600 mt-2">Code and screenshot of stopping the process that will prevent user from restarting each time they want to ask a question (a problem Prime dealt with earlier in the process)</p>

            <p className="mt-8">Nifty was having issues with the speech to text API and its lack of ability to pick up some words. The fact-checking API was also not as accurate as the team wanted at this point. Nifty decided to use several APIs together, but the word extraction still needed improvement, so the function had to be rewritten. However, the measurable goal was not to have completely accurate APIs — we simply needed something that worked well enough to be a reliable tool. Another reasonable goal Nifty was trying to reach was to determine when to stop and how to stop between sentences, which was difficult. The team had to figure out when the speech to text API will stop before the text file is used by the fact-checking API. Nifty set out to enhance the pipeline that was put together to maximize the number of times with the best results. The aim was to have an end-to-end pipeline that does not break down due to inaccuracies or lack of proper conversion from speech to text. It was unlikely that the compiling APIs would be implemented since that did not need to be part of the pipeline right away. However, we were looking to improve the ways the fact-checking results were derived as well as the speech to text API functions.</p>

            <p className="mt-4">After testing the VUI and UI mockups, Prime iterated the mockups to version 1.2 and updated the user flow based on the testing feedback. The final Chrome extension UI key features included: confirm fact-checking content and highlight referred sentences, show loading status while doing fact-checking, difference between user's voice command input (black border, yellow content) and AFC result content (grey background, blue content), show fact-checking benefits by showing weekly usage.</p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Prototype v1.2</h4>
              <div className="aspect-video">
                <video controls className="w-full rounded-lg">
                  <source src="/images/automatedfactchecking/vui-v2.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">What's next?</h3>
            <p>Future improvements to consider are better speech to text translation and segmentation, having keyword-based searching of text segments in lambda and better heuristics for determining relevance in the fact check API and the summarizer. Developing Chrome front-end that is ready to connect with the back-end is also essential moving forward.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedFactChecking; 