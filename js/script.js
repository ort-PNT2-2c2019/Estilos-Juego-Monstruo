new Vue( //una nueva instancia de vue
{
  //Argumento el
  el:"#app",
  data: {
    startGame: false,
    tu: {
      vida: 100
    },
    monstruo: {
      vida: 100
    }

  },
  methods: {
    n: function(){
      return "Hola"
    },
    iniciarJuego: function(){
      this.startGame = true,
      this.tu.vida = 100,
      this.monstruo.vida = 100
    },
    rendirse: function(){
      this.startGame = false,
      this.tu.vida = 0,
      this.monstruo.vida = 0
    },
    atacar: function(){
      this.monstruo.vida -= Math.floor(Math.random() * 10),
      this.tu.vida -= Math.floor(Math.random() * 10),

      this.checkWin()
    },
    ataqueEspecial: function(){
      this.tu.vida -= Math.floor((Math.random() * 10) +1),
      this.monstruo.vida -= Math.floor((Math.random() * 10) +3),
      this.checkWin()
    },
    curar: function(){
      if (this.tu.vida < 100) {
        this.tu.vida += Math.floor((Math.random() * 10 ))
        if(this.tu.vida > 100){this.tu.vida = 100}
      }
    },
    verificarMuerte: function(vida){
      if(vida <= 0){
         vida = 0
      }
      return vida
    },
    checkWin: function(){
      if(this.verificarMuerte(this.monstruo.vida) == 0){
        if(confirm("Ganaste por ser un pija gorda, queres jugar de nuevo?")){
          this.iniciarJuego()
        }else{
          this.rendirse()
        }
      }else if(this.verificarMuerte(this.tu.vida) == 0){
        if(confirm("Perdiste por pelotudo, queres jugar de nuevo?")){
          this.iniciarJuego()
        }else{
          this.rendirse()
        }
      }
    }
    
  }
});