const winner = require('./winnerFunction');

test('determines winner', () => {
    expect(winner(0)).toBe("You and the computer both chose rock. It's a tie!" || "You chose rock and the compputer chose paper. You lost." || "You chose rock and the computer chose scissors. You won!");

});