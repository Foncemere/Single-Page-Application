import Abstract from "./Abstract.js";

export default class extends Abstract {
  constructor() {
    //super() calls parent class
    super();
    this.setTitle("About me lol");
  }
  async getHTML() {
    return `
      
      `;
  }
}
