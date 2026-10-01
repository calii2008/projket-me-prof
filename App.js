export default function App() {
  screenWidth + 2,
  );

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

}

const styles = StyleSheet.create({});
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

const styles = StyleSheet.create({});
