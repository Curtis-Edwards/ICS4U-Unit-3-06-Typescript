/**
* Sample text.
*
* @author  Curtis Edwards
* @version 1.0
* @since   2024-05-09
*/

import { createPrompt } from 'bun-promptx'

const MIN = 0
const MAX = 100
const ARRAY_SIZE = 100

function mergeSort(array: number[]): number[] {
  const mid = array.length / 2

  if (array.length < 2) {
    return array
  }

  const left = array.splice(0, mid)
  return merge(mergeSort(left), mergeSort(array))
}

function merge(left: number[], right: number[]): number[] {
  let array = []
  while (left.length && right.length) {
    if (left[0] < right [0]) {
      array.push(left.shift())
    } else {
      array.push(right.shift())
    }
  }
  return [...array, ...left, ...right]
}


let numberArray: number[] = []

for (let i = 0; i < ARRAY_SIZE; i++) {
  numberArray[i] = Math.floor(Math.random() * (MAX + 1))
}

console.log(`Before:\n${numberArray}`)
console.log(`After:\n${mergeSort(numberArray)}`)

console.log(`\nDone.`)
