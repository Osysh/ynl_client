import getRandomPair from "./getRandomPair";

export default function initGame(gameLength: number): Array<Array<number>> {
  const gameList: Array<Array<number>> = [];

  for (let i = 0; i < gameLength; i++) {
    const game = getRandomPair(2,9);
    
    gameList.push(game);
  }

  return gameList;
}
