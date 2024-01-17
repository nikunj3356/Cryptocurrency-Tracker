# Cryptocurrency Tracker

## Introduction
This web scraping tool is a robust solution designed to extract cryptocurrency data from the CoinMarketCap website. Leveraging a combination of technologies, including the Cheerio library for web scraping, Node.js and Express for the backend APIs, and React for the frontend Chrome extension, I have created a seamless and efficient data exploration experience for cryptocurrency enthusiasts.

## 1. Web Scraping with Cheerio:
Cheerio is a fast, flexible, and lean implementation of core jQuery designed for server-side scraping of web pages. Its simplicity and ease of use make it an ideal choice for extracting data from the CoinMarketCap website. Cheerio parses the HTML content of the target webpage, allowing us to navigate and manipulate the DOM structure effortlessly. By using selectors inspired by jQuery, we can pinpoint and extract specific elements containing the desired cryptocurrency data.

## 2. Node.js and Express Backend:
Node.js, known for its non-blocking, event-driven architecture, serves as the backbone of our backend. Paired with the Express framework, it provides a lightweight and efficient server to handle incoming requests from the frontend. The backend serves as an intermediary between the frontend and the CoinMarketCap website, processing requests, and returning the scraped data in a structured format.

Express simplifies the creation of robust APIs, allowing us to define routes for various endpoints. These endpoints enable communication between the frontend and backend, ensuring seamless data flow.

## 3. React and Tailwind CSS Frontend for Chrome Extension:
React, a powerful JavaScript library for building user interfaces, is employed to create the frontend of our Chrome extension. React's component-based architecture facilitates the development of modular and reusable UI elements, enhancing the extension's maintainability and scalability. Tailwind CSS, with its utility-first approach, provided a scalable and maintainable way to style the extension.

The Chrome extension, built with React, served as the interactive interface for users to explore the weekly changes in Market Cap. React's state management and virtual DOM optimized performance, allowing for responsive data visualization and seamless navigation.

## 4. Why this Tech Stack:

**Scalability:** Node.js excels at handling a large number of concurrent connections, making it suitable for scraping data from multiple sources simultaneously.

**Flexibility:** Cheerio's flexibility enables us to adapt to changes in the CoinMarketCap website's structure easily.

**Efficiency:** React's virtual DOM and component-based structure enhance the extension's responsiveness and optimize resource usage.

**Community Support:** The vibrant communities around Cheerio, Node.js, Express, and React with Tailwind CSS ensure a wealth of resources, plugins, and updates for ongoing support and improvement.

## Conclusion:
This web scraping tool, built on the Cheerio library, Node.js, Express, and React with Tailwind CSS, provides a powerful and user-friendly solution for exploring cryptocurrency data from CoinMarketCap. The chosen technologies contribute to the tool's efficiency, scalability, and adaptability, offering users a seamless experience in the ever-evolving world of cryptocurrency.

## Steps to run the Chrome extension
1. Clone this repository
2. Open the terminal and `cd` into the project directory
3. `cd` into the `frontend` directory
4. Run `npm install` in the terminal to install the dependencies
5. Run `npm run build` in the terminal to build the Chrome extension
6. Open `chrome://extensions/` URL in `Google Chrome` browser and switch on `Developer mode`
7. Click on `Load unpacked` button and specify the path as the `build` directory present inside the `frontend` directory
8. The Chrome extension will be loaded into the browser and can be used now!
