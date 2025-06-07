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
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomatedFactChecking; 