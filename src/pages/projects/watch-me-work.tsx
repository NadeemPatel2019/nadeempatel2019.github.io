import React from 'react';

const WatchMeWork = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Watch Me Work</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">AI-Powered Writing Assistant</h2>
        </div>

        <div className="mt-12 prose prose-lg mx-auto">
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">Team Members</h3>
            <p>Team Members: Ronit Basu, Joseph Kim, Nadeem Patel, Gabriel Schmittlein</p>
            <p>Faculty & Staff Leads: Kris Hammond, Zach Wiseman</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">What is it?</h3>
            <p>Getting good search results can be easy, but knowing what to search in the first place can be even more difficult. Aside from being bad at putting together effective searches in the context of our work, there is also a lot of friction associated with querying in a new tab. Watch Me Work extracts your document's most important keywords and queires Google, displaying the best results in a sidebar — relevant and actionable links. The main use cases that we considered were writing a research paper, running out of points that you want to make or you hit a writer's block. Another case we considered was if you do not know how to effectively and quickly search for information that is relevent to your paper. It would be targeted towards a student writing a research paper or a journalist writing an article, but we tried to keep use cases broad to maintain scalability.</p>
            <p className="italic">"We've all been stuck in writer's block. Just this past week I was writing a research paper on the day-to-day rebellions of slaves in the 19th century and I simply ran out of things to say. With two pages left to go! Not only had my research run dry, but I couldn't even figure out an effective search to gather more relevant information. I needed a savior; a helping hand to push me in the right direction; a guardian angel to ask the questions I never could. I needed Watch Me Work." — Gabriel</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <div className="relative">
              <img src="/images/watchmework/works2.png" alt="works2" className="float-left w-1/6 mr-4 mb-4" />
              <img src="/images/watchmework/works1.png" alt="works1" className="float-right w-2/5 ml-4 mb-4" />
              <p>Watch me Work begins by taking your document's text and pumping it into a key phrase and entity API. In Gabe's research paper on slave rebellions, it might have pulled phrases like "Slave rebellions" and "Twelve Years a Slave", and entities like "Northup" using this API.</p>
              <p>In order to provide the most relevant information possible, Watch Me Work then prioritizes key phrases and entities from the first paragraph and the paragraph that the user's cursor is currently on, using this prioritization to generate a collection of key phrases and entities. This is useful because it balances the major themes — in Gabe's case slave rebellions, Twelve Years a Slave, and Soloman Northup — with more specific key phrases and entities from the paragraph that is being worked on.</p>
              <p>This collection of phrases and words is then entered into a Google search API, which returns the top relevant links for the search. Finally, these links are displayed within your Google docs sidebar. In writing the research paper, Gabe would have been returned primary source documents of other slaves living in the same time period, or articles describing the life of Soloman Northup, or even a scholarly paper on slave rebellion.</p>
              <p>In our final iteration of Watch Me Work, you even have the capability of narrowing or widening the scope of your search. Narrow scope might include primary documents and specific articles while wide scope would be more likely to include results such as wikipedia entries.</p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Final UI Wireframe</h4>
              <div className="border border-gray-300 rounded-lg overflow-hidden">
                <img src="/images/watchmework/wireframe3.png" alt="Final UI Wireframe" className="w-1/3 h-auto mx-auto" />
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Final Demo Walkthrough</h4>
              <div className="aspect-video">
                <video controls className="w-full rounded-lg">
                  <source src="/images/watchmework/demo2.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">The Process & User Testing: Improving upon UX/UI</h3>
            <p>At first, we struggled to determine the scope of the project — should we narrow in on a single use case or create a multi-purpose MVP? We decided for the latter so that we could maintain the scalability of Watch Me Work.</p>
            <p>We brainstormed various query ideas, including articles, books, videos, policy documents, music and videos, Wikipedia, Tweets and datasets. Through this brainstorm session, we discussed the pros and cons of idea before moving on to a design and searching for an API.</p>
            <p>After considering various AI APIs, we settled on the Google API. The design outline: script to read (Input: Google doc / Output: full text) {'>'}  model to extract keywords (Input: full text / Output: list of important keywords) {'>'}  API to search Google (Input: list of important keywords weighted toward bottom of document / Output: relevant Google search results) {'>'}  script to display Google results (Input: relevant Google search results / Output: relevant Google search results displayed in real time on document).</p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Framework</h4>
              <div className="mx-auto w-1/2">
                <img src="/images/watchmework/framework.jpg" alt="Framework" className="w-full h-auto rounded-lg" />
              </div>
            </div>

            <p className="mt-8">We drew up wireframes and used the mockup towards our design and functionality.</p>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Midterm UI Wireframe</h4>
              <div className="grid grid-cols-2 gap-8">
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <img src="/images/watchmework/wireframe1.png" alt="Wireframe 1" className="w-full h-auto" />
                </div>
                <div className="border border-gray-300 rounded-lg overflow-hidden">
                  <img src="/images/watchmework/wireframe2.png" alt="Wireframe 2" className="w-full h-auto" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold mb-4">Midterm Demo Walkthrough</h4>
              <div className="aspect-video">
                <video controls className="w-full rounded-lg">
                  <source src="/images/watchmework/demo1.mov" type="video/quicktime" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>

            <p className="mt-8">User testing consisted of understanding the needs of the target audience. In this case, we focused on college students that wrote for a variety of courses such as computer science, philosophy and journalism.</p>
            <p>Through a better understanding of what these students searched for, what they were able to find and the sources they used, we were able to improve upon our initial product design. Our first version did not consist much more than a few links based on the extracted keywords.</p>
            <p>We conducted user testing throughout the two-week cycles over a ten-week course. Testing the tool allowed us to fine-tune our search model, creating a system that became excellent at generating searches and helped us to continue evaluating the functionality, aesthetics and unique value of the tool. Compared to the first version, there was a change in the proportion of key phrases to entities that would be extracted. We also began to intentionally extract keywords from different parts of the document. In terms of design, we moved the search button to the top, added a slider to change between general and specific results and used lines between sources to create clear separation.</p>
            
            <p className="mt-4">Some samples of our user testing: 
              <a href="/images/watchmework/feedback.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 ml-1">user feedback</a>,
              <a href="/images/watchmework/usertestingscript.pdf" target="_blank" className="text-blue-600 hover:text-blue-800 ml-1">user testing script</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchMeWork; 