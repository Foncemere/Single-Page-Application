import Abstract from "./Abstract.js";

export default class extends Abstract {
  constructor() {
    //super() calls parent class
    super();
    this.setTitle("My Projects");
  }
  async getHTML() {
    return `
          <div class="project-template">
            <div class="main-container">
              <div class="project-title">
                <p id="first">MY SELECTION</p>
                <p id="last">OF PROJECTS</p>
              </div>
            </div>
            <div class="bottom-portion">
              <div class="projects-container">
                <div class="image-title">
                  <div class="image-container one">
                      <a href="https://foncemere.github.io/ClockWebsite/"><span class="go">Go to site <img src="./assets/arrow.svg"></span></a>
                      <a href="https://github.com/Foncemere/ClockWebsite"><span class="go-github"><img class="github-image" src="./assets/GitHub.png"></span></a>
                  </div>
                  <p><strong> CLOCK WEBSITE </strong></p>
                  <p> using plain JS </p>
                  </div>
                <div class="image-title">
                  <div class="image-container two">
                  <a href="https://github.com/Foncemere/MessagingProject"><span class="go-github"><img class="github-image" src="./assets/GitHub.png"></span></a>
                  </div>
                  <p> <strong> MESSAGING APPLICATION </strong> </p>
                  <p> using Socket.io </p>
                </div>
                <div class="image-title">
                  <div class="image-container three">
                      <a href="https://github.com/Foncemere/toDoReact/"><span class="go">Go to site <img src="./assets/arrow.svg"></span></a>
                      <a href="https://github.com/Foncemere/toDoReact"><span class="go-github"><img class="github-image" src="./assets/GitHub.png"></span></a>
                  </div>
                  <p> <strong> TO-DO APPLICATION </strong> </p>
                  <p> using React library </p>
                </div>
              </div>
            </div>
          </div>
        `;
  }
}
