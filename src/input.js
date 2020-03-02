
export default class InputHandler {
  constructor(character){
    // debugger

    document.addEventListener('keydown', (event) => {
      switch(event.keyCode) {
        case 37:
          character.moveCharacter('left');
          break;
        case 32:
        case 38:
          character.moveCharacter('up');
          break;
        case 39:
          character.moveCharacter('right');
          break;
      }
    })

    document.addEventListener("keyup", event => {
      switch (event.keyCode) {
        case 37:
          character.moveCharacter('none');
          break;
        case 32:
        case 38:
          character.moveCharacter('fall');
          break;
        case 39:
          character.moveCharacter('none');
          break;
      }
    });

  }
}