import React from 'react';

const PortfolioPage = () => {

    const projects = [
        { id: 1, title: "Tumblr Blog", description: "I created this blog as a hobby while studying Religious Studies at the University of California, Santa Barbara", url: "badri2.tumblr.com" },
        { id: 2, title: "AI Trader", description: "A full-stack web app I am working on using the PERN Stack", url: "ai-trader.in" },
        // Add more projects here
      ];

    return (
        <div className="portfolio-page">
            <h1>My Portfolio</h1>
            <p>Here is a collection of my work.</p>
            <div className="project-grid">
                <div className="project-card">
                    <iframe class="iFrame" src="http://badri2.tumblr.com"/>
                    <h3>Tumblr Blog</h3>
                    <p>I created this blog as a hobby while studying Religious Studies at the University of California, Santa Barbara</p>
                </div>
            </div>
        </div>
    );
};

export default PortfolioPage;
