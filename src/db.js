export default {
    ballProps: {
      x: 20,
      y: 200,
      dx: 5,
      dy: 5,
      radius: 15,
      speed: 10
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
    },
    brickProps: {
      x: 0.5,
      y: 70,
      height: 30,
      density: 2,
      color: "white"
    }
  };