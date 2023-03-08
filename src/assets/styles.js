import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const ScoreMsgContainer = styled.div`
  display: ${({ display }) => display};
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1;
  position: absolute;
`;
export const ScoreMsg = styled.div`
  margin-top: 0.5rem;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: "Times New Roman", Times, serif;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: lightcoral;
  padding: 15px;
  border-radius: 15px;
`;
export const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  padding: 0;
  @media (max-width: 979px) {
    font-size: 3rem;
  }
`;
export const Title2 = styled(Title)`
  font-size: 3rem;
  @media (max-width: 979px) {
    font-size: 2rem;
  }
`;
export const GameContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  border: 2px solid grey;
  border-radius: 15px;
  padding: 15px;
  @media (max-width: 979px) {
    padding: 10px;
    width: 90%;
  }
`;
export const IconSelector = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Icon = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 1rem;
  border-radius: 50%;
  background-color: ${({ color }) => color};
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 150px;
  ::after {
    content: "";
    opacity: ${(props) => (props.id === props.selectedHandSignal ? 1 : 0)};
    width: 105%;
    height: 105%;
    border: 3px solid orange;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s ease;
  }
  @media (max-width: 979px) {
    width: 100px;
    height: 100px;
    background-size: 100px;
  }
`;
export const Players = styled.div`
  display: flex;
  justify-content: center;
`;
export const PlayerContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-top: 1px solid grey;
  margin-top: 50px;
`;
export const PlayerScore = styled.div`
  opacity: ${({ opacity }) => opacity};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 50%;
  border: 2px solid grey;
  border-radius: 15px;
  left: -150%;
  transition: all 1s ease;
  @media (max-width: 979px) {
    display: none;
  }
`;
export const CompScore = styled(PlayerScore)`
  left: 150%;
  @media (max-width: 979px) {
    display: none;
  }
`;
export const Score = styled.div`
  font-size: 2rem;
  font-weight: bold;
`;
export const MobileScore = styled(Score)`
  font-size: 1rem;
  @media (min-width: 979px) {
    display: none;
  }
`;
export const Player = styled.div`
  width: 200px;
  height: 200px;
  margin: 0.5rem;
  background-color: grey;
  border-radius: 50%;
  background-image: url(${({ img }) => img});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 200px;
  transition: all 0.5s ease;
  @media (max-width: 979px) {
    width: 150px;
    height: 150px;
    background-size: 150px;
  }
`;
export const Button = styled.button`
  position: relative;
  margin-top: 10px;
  background-color: transparent;
  font-size: 1rem;
  color: rgb(255, 253, 195);
  padding: 0.5rem 3rem;
  border: 2px solid grey;
  border-radius: 15px;
  transition: all 0.5s ease;
  ::after {
    border-radius: 15px;
    position: absolute;
    content: "";
    width: 0%;
    height: 100%;
    background-color: white;
    left: 0;
    top: 0;
    transition: all 0.5s ease;
    z-index: -1;
  }
  :hover {
    color: black;
    scale: 1.1;
    ::after {
      width: 100%;
    }
  }
`;
export const ErrorMsg = styled.div`
  margin-top: 15px;
  background-color: pink;
  border: 1px solid red;
  border-radius: 15px;
  color: red;
  padding: 10px;
`;
