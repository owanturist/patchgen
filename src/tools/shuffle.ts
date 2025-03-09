export function shuffle<T>(array: ReadonlyArray<T>): ReadonlyArray<T> {
  const shuffled = array.slice()

  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const tmp = shuffled[i]

    shuffled[i] = shuffled[j]
    shuffled[j] = tmp
  }

  return shuffled
}
