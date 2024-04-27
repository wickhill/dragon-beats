<div id="top"></div>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/wickhill/dragon-beats">
    <img src="dragon-beats-icon.png" alt="Icon" width="80" height="80">
  </a>

<h3 align="center">Dragon Beats</h3>

  <p align="center">
    Dragon Beats: Stream, organize, and share the ultimate study and coding playlists.
    <br />
    <a href="https://github.com/wickhill/dragon-beats"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/wickhill/dragon-beats">View Demo</a>
    ·
    <a href="https://github.com/wickhill/dragon-beats/issues">Report Bug</a>
    ·
    <a href="https://github.com/wickhill/dragon-beats/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#project-team">Project Team</a></li>
        <li><a href="#quick-links">Quick Links</a></li>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap to Dragon Beats: ERD, Route Table, Trello, and More!</a></li>
        <ul>
        <li><a href="#project-origins">Project Origins</a></li>
        <li><a href="#user-stories">User Stories</a></li>
        <li><a href="#spotify-api">Spotify's API</a></li>
        <li><a href="#hurdles">Hurdles</a></li>
        </ul>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

<div align="center">
  <a href="https://github.com/wickhill/dragon-beats">
    <img src="https://i.imgur.com/fiYBLdP.jpg" alt="Dragon Beats Logo" width="800" height="800">
  </a>
</div>

<br>

<h1 align="center">"Tune in. Code out. Study smarter."</h1>

### Project Team:
- [Karina Nova](https://github.com/kbmelody8)
- [David Lesesne](https://github.com/dlesesne23)
- [Wick Hill](https://github.com/wickhill)

### Quick Links:
- [Dragon Beats Project Page](https://github.com/wickhill/dragon-beats)
- [Spotify for Developers Documentation](https://developer.spotify.com/documentation/web-api)
- [Code Commerce's Tailwind Guide](https://www.youtube.com/watch?v=_PoYJqG04Zc)
- [NPM](https://www.npmjs.com)

<p align="right">(<a href="#top">back to top</a>)</p>


### Built With

* [![React][React.js]][React-url]
* [![Tailwind CSS][Tailwind.js]][Tailwind-url]
* [![Spotify][Spotify.js]][Spotify-url]
* [![NPM][NPM.js]][NPM-url]
* [![jQuery][jQuery.js]][jQuery-url]
* [![ChatGPT][ChatGPT.js]][ChatGPT-url]
* [![DallE][DallE.js]][DallE-url]

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get started with Dragon Beats, just follow these steps:

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free Spotify API Key at [https://developer.spotify.com/documentation/web-api](https://developer.spotify.com/documentation/web-api)

2. Clone the repo
   ```sh
   git clone https://github.com/wickhill/dragon-beats.git
   ```

3. Install NPM packages
   ```sh
   npm install
   npm i dotenv
   npm i axios
   npm i mongoose
   ```

4. Enter your Spotify Developer Client ID and Client secret into an `.env` file you create in your frontend root directory. You can find these Client parameters by going to:
* []() Spotify Developer's Dashboard --->
* []() Select your app --->
* []() Settings --->
* []() Client ID + click on 'View client secret'

Then, this is what the code in your frontend `.env` should look like:

   ```js
   VITE_APP_CLIENT_ID='ENTER YOUR CLIENT_ID';
   VITE_APP_CLIENT_SECRET='ENTER YOUR CLIENT_SECRET';
   ```

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

**Find Your Focus with Dragon Beats.**

Dragon Beats harmonizes your study and coding sessions with curated playlists that sharpen focus without distraction. It's where music transforms from mere background noise to a productivity-boosting soundscape.

(Later, have code examples and demos in this space. And perhaps a few links to addtl resources.)

_For more examples, please refer to the [Documentation](https://developer.spotify.com/documentation/web-api)_

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ROADMAP to Dragon Beats -->
## Roadmap

- See our [Lucid Board](https://lucid.app/lucidchart/628ed53c-eba0-448e-b1db-7fe2a378ffec/edit?invitationId=inv_84059993-f9b4-4242-9ba8-44dfba3f4f0b&page=0_0#) for our ERD and Routes Table.

- See our [Lucid Board](https://lucid.app/lucidspark/659fecc1-5684-4de2-b60c-24e020f7b54e/edit?existing=1&docId=659fecc1-5684-4de2-b60c-24e020f7b54e&shared=true&page=0_0&invitationId=inv_dcd3f292-1910-46a0-8fc1-c5d88f6999a7#) for a comprehensive list of our Wireframe and Proposed Features.

- See our [Trello Board](https://trello.com/b/wglvCwe2/dragonbeats) for MVP and stretch goals.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- PROJECT ORIGINS -->

## Project Origins

DragonBeats originated from our motivation to create a useful application for students who are seeking music to enhance extended study sessions. Built using Spotify's API, DragonBeats integrates our knowledge of third-party APIs, authorization flows, and user accessibility. DragonBeats features genres like Classical, Jazz, and Nature Sounds, with curated playlists designed to support focused study environments.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- A WORD ON AUTHENTICATION -->

## User Stories

**Account Management**: As a user, I want to be able to create an account and update my profile, so that I can personalize my experience and manage my information securely.

**Genre Browsing**: As a student, I want to easily browse through main study-centric genres like ambient, chill, classical, and jazz, so that I can find music that helps me concentrate and enhances my study sessions.

**Music Discovery**: As a user, I want to access detailed information about Spotify artists, songs, and albums, so that I can discover new music and deepen my understanding of what I’m listening to.

**Sub-genre Exploration**: As a user, I want to explore sub-genres of my favorite study-centric music categories, so that I can diversify my musical selections and enhance my focus during study.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- SPOTIFY API -->

## Spotify API

Spotify's API uses OAuth 2.0 for authentication. Developers implement the API by obtaining an access token, and then use the token to make authorized requests to various endpoints for data retrieval, data modification (saved tracks, playlists), or even playback.

Spotify's API implements an additional security measure to protect user data and limit unauthorized access: access tokens are valid for only one hour. This is common industry practice, reducing the potential for the misuse of tokens.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- HURDLES -->

## Hurdles

**From Authorization Code Flow to Client Credentials Flow.**

Spotify's API offers comprehensive documentation that supports a variety of integrations, from accessing saved songs to managing playlists. Implementing its full capabilities, such as user-specific data access, typically requires authentication steps including user login via the robust "Authorization Code Flow". This flow, while offering extensive access to user resources and requiring token refresh mechanisms, was initially considered for our project.

However, given its complexity and our project's timeframe, we opted for the more accessible "Client Credentials Flow". This approach, which only requires a secret key and is executed server-side, provides access to a more limited set of features but is significantly easier to implement, fitting our need for simplicity and quick integration.

The design of our app is flexible enough that, with our growing understanding, we feel confident in our ability to implement the full "Authorization Code Flow" and its extensive features in future iterations.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTRIBUTING -->
<!-- ## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create! Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#top">back to top</a>)</p> -->



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

* []() Karina Nova: [kbmelody8](https://github.com/kbmelody8)
* []() David Lesesne: [dlesesne23](https://github.com/dlesesne23)
* []() Wick Hill: [@wickstarter](https://twitter.com/wickstarter)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []() General Assembly Class #1204
* []() Digital Dragons Code Crew
* []() Caffeine

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/wickhill/dragon-beats.svg?style=for-the-badge
[contributors-url]: https://github.com/wickhill/dragon-beats/graphs/contributors

[forks-shield]: https://img.shields.io/github/forks/wickhill/dragon-beats.svg?style=for-the-badge
[forks-url]: https://github.com/wickhill/dragon-beats/network/members

[stars-shield]: https://img.shields.io/github/stars/wickhill/dragon-beats.svg?style=for-the-badge
[stars-url]: https://github.com/wickhill/dragon-beats/stargazers

[issues-shield]: https://img.shields.io/github/issues/wickhill/dragon-beats.svg?style=for-the-badge
[issues-url]: https://github.com/wickhill/dragon-beats/issues

[license-shield]: https://img.shields.io/github/license/wickhill/dragon-beats.svg?style=for-the-badge
[license-url]: https://github.com/wickhill/dragon-beats/blob/main/LICENSE

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB "React Badge"
[React-url]: https://reactjs.org/

[Tailwind.js]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white "Tailwind CSS Badge"
[Tailwind-url]: https://tailwindcss.com/

[Spotify.js]: https://img.shields.io/badge/Spotify-1DB954?style=for-the-badge&logo=spotify&logoColor=white "Spotify Badge"
[Spotify-url]: https://developer.spotify.com/documentation/web-api/

[jQuery.js]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white "jQuery Badge"
[jQuery-url]: https://jquery.com/

[NPM.js]: https://img.shields.io/badge/npm-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white "NPM Badge"
[NPM-url]: https://www.npmjs.com/

[ChatGPT.js]: https://img.shields.io/badge/ChatGPT-000000?style=for-the-badge&logo=openai&logoColor=white "ChatGPT Badge"
[ChatGPT-url]: https://www.openai.com/chatgpt

[DallE.js]: https://img.shields.io/badge/DallE-000000?style=for-the-badge&logo=openai&logoColor=white "DallE Badge"
[DallE-url]: https://www.openai.com/dall-e-2
