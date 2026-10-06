import React from 'react';
import {View , StyleSheet , Text ,TouchableWithoutFeedback ,Image } from 'react-native';
import Bird from './src/components/Bird';
import Obstacle from './src/components/obstacle';


const [obstaclesNegHeight, setObstaclesNegHeight] = useState(0);
  const [obstaclesNegHeightTwo, setObstaclesNegHeightTwo] = useState(0);
  const [isGameOver, setIsGameOver] = useState(0);
  const [score, setScore] = useState(0);


  const gravity = 3;
  let obstaclesWidth = 60;
  let obstacleHeight = 300;
  let gap = 200;
  let gameTimerId;
  let obstaclesTimerId;

  useEffect(() => {
    if (birdBottom > 0) {
      gameTimerId = setInterval(() => {
        setBirdBottom(birdBottom => birdBottom - gravity);
      }, 30);

      return () => {
        clearInterval(gameTimerId);
      };
    }
  }, [birdBottom]);

  useEffect(() => {
    if (obstaclesLeft > -60) {
      obstaclesTimerId = setInterval(() => {
        setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5);
      }, 30);

      return () => {
        clearInterval(obstaclesTimerId);
      };
    } else {
      setScore(score => score + 1);
      setObstaclesLeft(screenWidth);
      setObstaclesNegHeight(-Math.random() * 100);
    }
  }, [obstaclesLeft]);



useEffect(() => {
  if (obstaclesLeft > -60) {
    obstaclesTimerId = setInterval(() => {
      setObstaclesLeft(obstaclesLeft => obstaclesLeft - 5)
    }, 30)

    return () => {
      clearInterval(obstaclesTimerId)
    }
  } else {
    setScore(score => score + 1)
    setObstaclesLeft(screenWidth)
    setObstaclesNegHeight((-Math.random() * 100))
  }
}, [obstaclesLeft])

useEffect(() => {
  if (obstaclesLeftTwo > -60) {
    obstaclesTimerIdTwo = setInterval(() => {
      setObstaclesLeftTwo(obstaclesLeftTwo => obstaclesLeftTwo - 5)
    }, 30)

    return () => {
      clearInterval(obstaclesTimerIdTwo)
    }
  } else {
    setScore(score => score + 1)
    setObstaclesLeftTwo(screenWidth)
    setObstaclesNegHeightTwo((-Math.random() * 100))
  }
}, [obstaclesLeftTwo])

const jump = () => {
  if (!isGameOver && (birdBottom < screenHeight)) {
    setBirdBottom(birdBottom => birdBottom + 50)
    console.log('jumped')
  }
}



// Check for collisions
useEffect(() => {
  if (isGameOver) return;

  // First obstacle collision
  const hitFirstObstacle =
    birdBottom < obstaclesNegHeight + obstacleHeight + 30 &&
    birdBottom > obstaclesNegHeight + obstacleHeight + gap - 30 &&
    obstaclesLeft < screenWidth / 2 + 30 &&
    obstaclesLeft > screenWidth / 2 - 30;

  // Second obstacle collision
  const hitSecondObstacle =
    birdBottom < obstaclesNegHeightTwo + obstacleHeight + 30 &&
    birdBottom > obstaclesNegHeightTwo + obstacleHeight + gap - 30 &&
    obstaclesLeftTwo < screenWidth / 2 + 30 &&
    obstaclesLeftTwo > screenWidth / 2 - 30;

  // Bird hits the floor
  const hitFloor = birdBottom <= 0;

  if (hitFirstObstacle || hitSecondObstacle || hitFloor) {
    gameOver();
  }
}, [
  birdBottom,
  obstaclesLeft,
  obstaclesLeftTwo,
  obstaclesNegHeight,
  obstaclesNegHeightTwo,
  isGameOver,
]);

// Game over function
const gameOver = () => {
  clearInterval(gameTimerId.current);
  clearInterval(obstaclesTimerId.current);
  clearInterval(obstaclesTimerIdTwo.current);

  setIsGameOver(true);
};

return (
  <TouchableWithoutFeedback onPress={jump}>
    <View style={styles.container}>

      <Image
        source={require('./assets/background.png')}
        style={styles.backgroundImage}
      />

      <Text style={styles.score}>
        Score: {score}
      </Text>

      <Bird
        birdBottom={birdBottom}
        birdLeft={birdLeft}
      />

      <Obstacle
        color={'green'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeight}
        obstacleLeft={obstaclesLeft}
      />

      <Obstacle
        color={'green'}
        obstacleWidth={obstacleWidth}
        obstacleHeight={obstacleHeight}
        randomBottom={obstaclesNegHeightTwo}
        obstacleLeft={obstaclesLeftTwo}
      />

    </View>
  </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundcolor: '',
    alignItems: 'center',
    justifyContent: 'center',
  },
score: {
  fontSize: 32,
  top: 50,
  position: 'absolute',
  zIndex: 1,
  color: 'white'
},
backgroundImage: {
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0}

});
