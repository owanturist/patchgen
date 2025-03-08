export interface Patch {
  price: number
  time: number
  tiles: ReadonlyArray<ReadonlyArray<0 | 1 | 2>>
}

export const ALL_PATCHES = [
  {
    price: 5,
    time: 3,
    tiles: [
      [0, 1, 0],
      [1, 2, 1],
      [1, 1, 1],
      [0, 1, 0],
    ],
  },

  {
    price: 1,
    time: 4,
    tiles: [
      [0, 1, 0],
      [0, 2, 0],
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
  },

  {
    price: 2,
    time: 3,
    tiles: [
      [1, 0, 1],
      [1, 1, 1],
      [1, 0, 1],
    ],
  },

  {
    price: 10,
    time: 5,
    tiles: [
      [1, 2],
      [1, 2],
      [0, 2],
      [0, 1],
    ],
  },

  {
    price: 8,
    time: 6,
    tiles: [
      [0, 2, 1],
      [0, 2, 2],
      [1, 1, 0],
    ],
  },

  {
    price: 7,
    time: 4,
    tiles: [
      [1, 0],
      [2, 1],
      [2, 1],
      [1, 0],
    ],
  },

  {
    price: 7,
    time: 2,
    tiles: [
      [0, 1, 0],
      [0, 2, 0],
      [0, 2, 0],
      [1, 1, 1],
    ],
  },

  {
    price: 3,
    time: 6,
    tiles: [
      [0, 2, 0],
      [1, 2, 1],
      [1, 0, 1],
    ],
  },

  {
    price: 1,
    time: 5,
    tiles: [
      [1, 1],
      [0, 2],
      [0, 1],
      [1, 1],
    ],
  },

  {
    price: 0,
    time: 3,
    tiles: [
      [0, 1, 0],
      [1, 2, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
  },

  {
    price: 4,
    time: 2,
    tiles: [
      [1, 0],
      [1, 1],
      [1, 1],
      [0, 1],
    ],
  },

  {
    price: 2,
    time: 1,
    tiles: [
      [0, 1, 0],
      [0, 1, 1],
      [1, 1, 0],
      [0, 1, 0],
    ],
  },

  {
    price: 1,
    time: 2,
    tiles: [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
  },

  {
    price: 10,
    time: 4,
    tiles: [
      [0, 0, 1],
      [0, 2, 2],
      [1, 2, 0],
    ],
  },

  {
    price: 10,
    time: 3,
    tiles: [
      [0, 1],
      [0, 2],
      [0, 2],
      [1, 1],
    ],
  },

  {
    price: 5,
    time: 5,
    tiles: [
      [0, 1, 0],
      [0, 2, 0],
      [1, 2, 1],
    ],
  },

  {
    price: 5,
    time: 4,
    tiles: [
      [0, 1, 0],
      [1, 2, 1],
      [0, 2, 0],
    ],
  },

  {
    price: 7,
    time: 1,
    tiles: [
      //
      [1],
      [2],
      [1],
      [1],
      [1],
    ],
  },

  {
    price: 3,
    time: 4,
    tiles: [
      [1, 0],
      [2, 0],
      [1, 1],
      [1, 0],
    ],
  },

  {
    price: 2,
    time: 3,
    tiles: [
      [0, 1],
      [0, 2],
      [1, 1],
      [1, 0],
    ],
  },

  {
    price: 2,
    time: 2,
    tiles: [
      [1, 0],
      [1, 1],
      [1, 1],
    ],
  },

  {
    price: 1,
    time: 2,
    tiles: [
      [1, 0, 1],
      [1, 1, 1],
    ],
  },

  {
    price: 7,
    time: 6,
    tiles: [
      [0, 2, 2],
      [1, 2, 0],
    ],
  },

  {
    price: 6,
    time: 5,
    tiles: [
      [2, 1],
      [2, 1],
    ],
  },

  {
    price: 4,
    time: 6,
    tiles: [
      [0, 1],
      [0, 2],
      [1, 2],
    ],
  },

  {
    price: 4,
    time: 2,
    tiles: [
      //
      [1],
      [2],
      [1, 1],
    ],
  },

  {
    price: 3,
    time: 3,
    tiles: [
      //
      [1],
      [2],
      [1],
      [1],
    ],
  },

  {
    price: 3,
    time: 2,
    tiles: [
      [0, 1],
      [2, 1],
      [1, 0],
    ],
  },

  {
    price: 2,
    time: 2,
    tiles: [
      [0, 1],
      [1, 1],
      [0, 1],
    ],
  },

  {
    price: 3,
    time: 1,
    tiles: [
      [0, 1],
      [1, 1],
    ],
  },

  {
    price: 2,
    time: 2,
    tiles: [
      //
      [1],
      [1],
      [1],
    ],
  },

  {
    price: 1,
    time: 3,
    tiles: [
      [0, 1],
      [1, 1],
    ],
  },

  {
    price: 2,
    time: 1,
    tiles: [
      //
      [1],
      [1],
    ],
  },
] satisfies ReadonlyArray<Patch>
