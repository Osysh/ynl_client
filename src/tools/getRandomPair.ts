export default function getRandomPair(min: number, max: number) {
  return [
    Math.floor(Math.random() * (max - min + 1) + min), 
    Math.floor(Math.random() * (max - min + 1) + min)
  ]
}
