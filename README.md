 checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('Ganaste! Jugar de nuevo?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('Perdiste! Jugar de nuevo?')) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
