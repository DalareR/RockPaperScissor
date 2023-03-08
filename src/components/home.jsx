import React, { useState } from "react";
import hand from "../assets/images/Paper.jpg";
import scissor from "../assets/images/Scissor.jpg";
import rock from "../assets/images/Rock.jpg";
import Confetti from "react-confetti";
import {
  Container,
  ScoreMsgContainer,
  ScoreMsg,
  Title,
  Title2,
  GameContainer,
  IconContainer,
  Icon,
  Players,
  PlayerContainer,
  PlayerScore,
  CompScore,
  Score,
  Player,
  Button,
  ErrorMsg,
  IconSelector,
  MobileScore,
} from "../assets/styles.js";

export default function Home() {
  const [selectedHandSignal, setSelectedHandSignal] = useState("");
  const [selectedImg, setSelectedImg] = useState("");
  const [randomImg, setRandomImg] = useState("");
  const [playerScore, setPlayerScore] = useState(0);
  const [compScore, setCompScore] = useState(0);
  const [error, setError] = useState("");
  const [scoreMsg, setScoreMsg] = useState("");
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  function randomHandSignGen() {
    if (!selectedHandSignal) {
      setError("Select the hand first");
    } else {
      const randomNumber = Math.round(Math.random() * (2 - 0) + 0).toString();

      if (randomNumber === "0") setRandomImg(hand);
      if (randomNumber === "1") setRandomImg(scissor);
      if (randomNumber === "2") setRandomImg(rock);

      if (randomNumber === "0" && selectedHandSignal === "2") {
        setCompScore((prev) => prev + 1);
        setScoreMsg("Computer Won!");
      } else if (selectedHandSignal === "0" && randomNumber === "2") {
        setPlayerScore((prev) => prev + 1);
        setScoreMsg("You Won!");
      } else {
        if (randomNumber > selectedHandSignal) {
          setCompScore((prev) => prev + 1);
          setScoreMsg("Computer Won!");
        }
        if (selectedHandSignal > randomNumber) {
          setPlayerScore((prev) => prev + 1);
          setScoreMsg("You Won!");
        }
      }
      setTimeout(() => {
        setScoreMsg("");
        // setRandomImg("");
      }, 3000);
      setError("");
    }
  }

  function handleSelectImg(id) {
    if (id === "0") setSelectedImg(hand);
    if (id === "1") setSelectedImg(scissor);
    if (id === "2") setSelectedImg(rock);
  }

  function handleIconClick(id) {
    setSelectedHandSignal(id);
    setRandomImg("");
    handleSelectImg(id);
  }

  return (
    <Container>
      <Title>Rock, Paper, Scissor</Title>
      <ScoreMsgContainer display={scoreMsg ? "block" : "none"}>
        <Confetti
          width={scoreMsg === "Computer Won!" ? 0 : windowDimension.width}
          height={scoreMsg === "Computer Won!" ? 0 : windowDimension.height}
        />
        <ScoreMsg>{scoreMsg}</ScoreMsg>
      </ScoreMsgContainer>
      <GameContainer>
        <IconSelector>
          <Title2>Select your hand</Title2>
          <IconContainer>
            <Icon
              id="0"
              color="red"
              img={hand}
              selectedHandSignal={selectedHandSignal}
              onClick={(e) => handleIconClick(e.target.id)}
            />
            <Icon
              id="1"
              color="green"
              img={scissor}
              selectedHandSignal={selectedHandSignal}
              onClick={(e) => handleIconClick(e.target.id)}
            />
            <Icon
              id="2"
              color="blue"
              img={rock}
              selectedHandSignal={selectedHandSignal}
              onClick={(e) => handleIconClick(e.target.id)}
            />
          </IconContainer>
        </IconSelector>
        <Players>
          <PlayerContainer>
            <PlayerScore opacity={playerScore || compScore ? 1 : 0}>
              <Score>Score: {playerScore}</Score>
            </PlayerScore>
            <Title2>Player</Title2>
            <MobileScore>Score: {playerScore}</MobileScore>
            <Player img={selectedImg} />
          </PlayerContainer>
          <PlayerContainer>
            <CompScore opacity={playerScore || compScore ? 1 : 0}>
              <Score>Score: {compScore}</Score>
            </CompScore>
            <Title2>Computer</Title2>
            <MobileScore>Score: {compScore}</MobileScore>
            <Player img={randomImg} />
          </PlayerContainer>
        </Players>
        <Button onClick={randomHandSignGen}>Play</Button>
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </GameContainer>
    </Container>
  );
}
