console.clear();

let videoName = "Darkmoon";

const video = {
  videoName: "Titanic",
  videoLength: "02:48:52",
  videoCategory: "Romantic",
  clap: function () {
    return this.videoName; // the importance of using the 'this' keyword is, if your dont write it will return Darkmoon.
  },
  actors: {
    firstActor: "Ryan",
    secondaryActor: "Leia",
    getActors: function () {
      return `${this.firstActor} and ${this.secondaryActor}`;
    },
  },
};

console.log(video.actors.getActors());
