# Codeshare

<br />
<p align="center">

  <p align="center">
    <br />
    <a href="https://github.com/Harshil4442/Codeshare/issues">Report Bug</a>
    ·
    <a href="https://github.com/Harshil4442/Codeshare/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary >
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#features">Features</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

- CodeShare is an innovative platform designed to foster collaborative coding experiences. Whether you're working on a project with teammates, teaching programming concepts, or simply exploring code together, CodeShare provides a real-time, shared coding environment where users can seamlessly collaborate and communicate.<br/><br/>


### Features

- **Real-time Collaboration:** Emphasize the real-time aspect of your platform, where multiple users can simultaneously edit and view the code.<br/>
- **Code Saving and Persistence:** The code in the every room is saved when all of the users leave the room.<br/>
- **Room Creation and Joining:** Users can join the room by giving their username and roomID. If entered roomID is currently existing then user will be assign that room but if that roomID is not exist a new room with that roomID will be created for that user. <br />
- **Code Editor Features:** We have used CodeMirror Code Editor. In this Code Editor there is well defined structure for the well structured code. There is also syntax highlighting features. Different syntax highlighting for the different language. <br/>
- **Database Integration:** We have created database in which we store username, roomID, Current code and Currently selected language in a perticular room.<br/>



### Built With

* [Socket.io](https://socket.io/)
* [MongoDB](https://www.mongodb.com/)
* [NodeJS](https://nodejs.org/en/)
* [ExpressJS](https://expressjs.com/)
* [ReactJS](https://reactjs.org/)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Installation


Fork, then download or clone the repo.
```bash
git clone https://github.com/Harshil4442/Codeshare.git
```

For the **back-end**, install the dependencies once via the terminal.
```bash
cd reactjs/server
npm install
```

Create .env file in Backend folder and set the below code.
```bash
FRONTEND_URL = 
MONGODB_URL =
PORT =
DATA_MODEL =
```

If you want to run the **back-end**, go to *backtend* folder via the terminal.
```bash
npm run start
```

For the **front-end**, install the dependencies once via the terminal.
```bash
cd reactjs
npm install
```

If you want to run the **front-end**, go to *frontend* folder via the terminal.
```bash
npm run dev
```

Now you are ready to run the server and frontend.

<br />

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- CONTACT -->
## Contact

Harshil Savaliya - [@Harshil Savaliya](https://www.linkedin.com/in/harshil-savaliya-3a7460223/) - harshilyogeshbhai886@gmail.com

Project Link: [https://github.com/Harshil4442/Codeshare](https://github.com/Harshil4442/Codeshare)

