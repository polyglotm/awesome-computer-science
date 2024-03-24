# Dynamic Programming

## Introduction

what is dynamic programming?
`recursion with memoization`

## what is the key?

- define sub problem
- memoize sub problem (do not calculate the same sub problem twice)
- sometimes you need n^2 times even it's dynamic programming

## approach

### top down

- it's like brute force, but with memoization

### bottom up

- start from the smallest sub problem

----------------

# Basic

## Lecture - 1 [fibonacci](./basic/fibonacci.ts)

explain

- brute force
- top down
- bottom up
- bottom up with space optimization (O(1))

## lecture - 2 [0 / 1 knapsack](./basic/0-1-knapsack.ts)

- dp with 2D matrix

## Lecture - 3 [Jump Game](./basic/leetcode-55-jump-game.ts)
- dp with 1D matrix

# Advanced

## lecture - 3 Unbounded knapsack

- [coin change - top-down recursive without memoization](./basic/coin-change/leetcode-322-coin-change-2.ts)
- [coin change - top-down recursive with memoization](./basic/coin-change/leetcode-322-coin-change-3.ts)
- [coin change - bottom-up DP](./basic/coin-change/leetcode-322-coin-change.ts)

unique path
all path

