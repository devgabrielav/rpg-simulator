import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  private player1: Fighter;
  private player2: Fighter;
  constructor(player1: Fighter, player2: Fighter) {
    super(player1);
    this.player1 = player1;
    this.player2 = player2;
  }

  fight(): number {
    do {
      this.player1.attack(this.player2);
      this.player2.attack(this.player1);
    } while (this.player1.lifePoints !== -1 && this.player2.lifePoints !== -1);
    const number = super.fight();
    
    return number;
  }
}

export default PVP;