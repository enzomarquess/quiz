function quiztaligado() {
   
    const BOSTA1 = document.querySelector('input[name="BOSTA1"]:checked');
    const BOSTA2 = document.querySelector('input[name="BOSTA2"]:checked');
    const BOSTA3 = document.querySelector('input[name="BOSTA3"]:checked');

    if (!BOSTA1 || !BOSTA2 || !BOSTA3) {
        document.getElementById("result").innerText = "Por favor, responda todas as perguntas.";
        return;
    }

   
    const score = parseInt(BOSTA1.value) + parseInt(BOSTA2.value) + parseInt(BOSTA3.value);

    
    let result;
    if (score <= 3) {
        result = "Você é como Cristiano Ronaldo: rápido, ofensivo e sempre em busca do gol!";
    } else if (score <= 6) {
        result = "Você é como Lionel Messi: criativo, estratégico e com excelente controle de bola!";
    } else {
        result = "Você é como Sergio Ramos: forte na defesa e com espírito de liderança!";
    }

    
    document.getElementById("result").innerText = result;
}
