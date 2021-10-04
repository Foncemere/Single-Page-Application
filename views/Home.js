import Abstract from "./Abstract.js";

export default class extends Abstract {
  constructor() {
    super();
    this.setTitle("Home page");
  }
  async getHTML() {
    return `
    <div class="home-template">
            <div class="main-container">
              <div class="name">
                <p id="first">KARL</p>
                <p id="last">TAGUIBAO</p>
              </div>
            </div>
            <div class="bottom-portion">hello</div>
          </div>
    `;
  }
}
