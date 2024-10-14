# Plan of Action

- Initialize our NodeJS Project
- Initialize our first view
- create a room id
- Add the ability to view our own video
- Add the ability to allow others to stream their video
- Add styling
- Add the ability to create messages
- Add mute button
- Add Stop video button

# Zoom Clone

- A simple Zoom-like video conferencing application built using Node.js, Express, Socket.io, and PeerJS. This app allows users to create and join unique rooms for real-time video conferencing and chat.

## Features
- Unique Room Creation: Every time the main link is accessed, a dynamic URL with a unique room ID is generated (e.g., https://zoom-clone-kg9r.onrender.com/360713a5-77ec-40c3-9256-36bf146a5d94).
- Room Sharing: Users can share the unique room link to invite others. Anyone with the link can join the room and start video conferencing.
- Real-Time Video & Audio Control: Participants can mute/unmute audio and start/stop video during the conference.
- Text Chat: Real-time messaging within the room for seamless communication.
- Responsive UI: A user-friendly interface optimized for various devices.
  
## How It Works

- Access the Main Link:
Click on the hosted link: Zoom Clone. A unique room will be created, and you will be redirected to a URL with a unique room ID.

Example:
https://zoom-clone-kg9r.onrender.com/360713a5-77ec-40c3-9256-36bf146a5d94

- Share the Room Link:
- 
Copy the dynamically created URL and share it with others. They can use this link to join your video conference room.

- Join the Room:
Anyone who accesses the shared room link can join the video call and chat in real-time.

## In-Room Features:

- Mute/Unmute Audio: Control your microphone during the call.
- Start/Stop Video: Toggle your camera during the conference.
- Chat: Send messages to other participants in real-time.
  
## How to Run the Project Locally

- Prerequisites
1. Node.js installed on your machine
2. PeerJS server for WebRTC
   
## Installation

- Clone the repository:
  
1. git clone https://github.com/your-username/zoom-clone.git
2. cd zoom-clone
   
- Install dependencies:
  
1. npm install
   
- Start the application:
  
1. npm run dev
   
Access the app at http://localhost:3000/.

## Hosting

The app is hosted on Render. You can access the live version here:  [https://zoom-clone-kg9r.onrender.com/]
For quick DEMO , click the hosted link , copy the link and paste in other TAB, You will be connecting with yourself.

### NOTE ====>  AS I AM USING FREE INSTANCE FOR DEPLOYMENT RENDER.COM TAKES ALMOST 50 SEC TO RENDER THE APP DUE TO INACTIVITY, SO BE PATIENT WHILE BROWSING THE LINK .

## Technologies Used

- Node.js
- Express
- Socket.io for real-time communication
- PeerJS for WebRTC video streaming
- EJS for templating
- CSS for styling
