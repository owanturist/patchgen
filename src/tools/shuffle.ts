export function shuffle<T>(
  random: () => number,
  array: ReadonlyArray<T>,
  start = 0,
  end = array.length - 1,
): ReadonlyArray<T> {
  const result = array.slice()

  for (let source = start; source < end; source++) {
    const target = Math.floor(random() * (end - source + 1)) + source
    const tmp = result[source]

    result[source] = result[target]
    result[target] = tmp
  }

  return result
}
