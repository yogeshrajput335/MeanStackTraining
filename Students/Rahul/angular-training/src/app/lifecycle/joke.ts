export class Joke {
    public setup: string;
    public punchline: string;
    public hide: boolean;
  
    constructor(setup: string, punchline: string) {
      this.setup = setup;
      this.punchline = punchline;
      this.hide = false;
    }
  
    toggle() {
      this.hide = !this.hide;
    }
  }