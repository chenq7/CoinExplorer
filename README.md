
# Coin Explorer

## Background and Overview

Coin Explorer is a level based platform game where a user controls a slime to collect all the coins in order to move on to the next level. The game will be over upon dying to obstacles (spikes, monsters, etc) and the user is able to restart at their current level. The goal is to beat as many levels as possible with the least amount of deaths.

[Live Link](https://chenq7.github.io/CoinExplorer/)

## Functionality and MVPs

In Coin Explorer, users will be able to:
* Move left, right, and jump
* Collide with platforms and obstacles
* Collect coins
* See death count and coins collected
* Die to monsters and obstacles such as spikes 

## Architecture and Technology

* Javascript
* CanvasHTML

## Features

### Home screen
![](src/images/home_screen.png)

The game starts by rendering the home screen with an onclick listener set for the enter key to start the game and render the first level 

### Sample gameplay with tile colision detection
![](src/gifs/gameplay.gif)

### Game over screen upon hitting spikes
![](src/gifs/game_over.gif)

### Victory screen upon clearing all levels
![](src/gifs/victory.gif)

## Implementation Timeline

* Day 1
  * Organize/update file structures, Research/write game logic
* Day 2
  * Finish up player movement and working on level building/tile collision
* Day 3
  * Finish up level building/collision and coins collision
* Day 4
  * Add spikes and different movable monsters
* Day 5 
  * Style homepage, add homescreen, game over screen, win screen and add music and sound

## Bonus Features

* Be able to kill monsters with slime and add monster drop
* Make a new mode where levels are randomly generated
* fog animation in background, styling each level, etc
