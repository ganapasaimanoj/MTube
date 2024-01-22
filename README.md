# Mtube - YouTube Clone Project

## Overview

Mtube is a YouTube clone project developed using React, React Redux, JavaScript, and Tailwind CSS. The project leverages the Google YouTube API to fetch video data and replicate various features of the YouTube platform.

Checkout the live link: [https://praneep-mtube.netlify.app/](https://praneep-mtube.netlify.app/)

## Tech Stack

### React:

A JavaScript library for building user interfaces.

### React Redux:

State management library for React applications.

### JavaScript:

The primary programming language used for the project.

### Tailwind CSS:

A utility-first CSS framework for designing responsive and efficient user interfaces.## Features

## Features

### 1. Collapsible Hamburger Menu

The project includes a collapsible hamburger menu, providing a familiar navigation experience for users.

### 2. Search Feature

- The header contains a search feature with debouncing implemented for query optimization.
- Google YouTube Search API calls are made to fetch search results.
- Search results are stored in a global state variable using Redux, optimizing performance and reducing redundant API calls.

### 3. Video Thumbnails

- Video thumbnails are rendered using video data obtained from YouTube API calls.
- Video data is stored in a global state variable using Redux, ensuring efficient data management and seamless updates.

### 4. Inner Page Routes

- Routes to inner pages are implemented using React Router.
- Each inner page contains a video player, video description, comments, and a chat section.

### 5. Nested Comments

Nested comments are implemented for a more interactive and organized discussion environment.

### 6. Infinite Chat

The inner page features an infinite chat functionality, enhancing user engagement and interaction.

## Acknowledgments

Special thanks to the YouTube API for providing the necessary data for this project.
