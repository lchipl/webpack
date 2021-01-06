import "./styles.css";

export class Post {
  constructor(title) {
    this.title = title;
    this.name = "nic11";
    this.date = new Date();
  }

  toString() {
    return JSON.stringify({
      title: this.title,
      name: this.name,
      year: this.name,
      date: this.date.toJSON(),
    });
  }
}
