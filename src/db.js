export default {
    ballProps: {
      x: 20,
      y: 200,
      dx: 5,
      dy: 5,
      radius: 20,
      speed: 10
    },
    brickProps: {
      x: 0.5,
      y: 50,
      width: 800/10-1,
      height: 20,
      density: 2,
      colors: ["red", "lightblue"]
    },
    player: {
      name: "Player",
      lives: 5,
      score: 0,
      level: 1
    },
    paddleProps: {
      height: 30,
      width: 200,
      x: 100,
      colors:  ["red", "white"]
    }
  };