import React from 'react';

const WatchMeWork = () => {
  return (
    <div className="min-h-screen bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Watch Me Work</h1>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Search driven by your own writing</h2>
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
            <p>"We've all been stuck in writer's block. Just this past week I was writing a research paper on the day-to-day rebellions of slaves in the 19th century and I simply ran out of things to say. With two pages left to go! Not only had my research run dry, but I couldn't even figure out an effective search to gather more relevant information. I needed a savior; a helping hand to push me in the right direction; a guardian angel to ask the questions I never could. I needed Watch Me Work." — Gabriel</p>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-4">How It Works</h3>
            <p>Watch me Work begins by taking your document's text and pumping it into a key phrase and entity API. In Gabe's research paper on slave rebellions, it might have pulled phrases like "Slave rebellions" and "Twelve Years a Slave", and entities like "Northup" using this API.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchMeWork; 