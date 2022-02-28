let DataEvento = 10122022;
let DataAtual = 02022022;
    if (DataAtual < DataEvento) {
        console.log("A data do evento foi registrada com sucesso, para prosseguirmos com o cadastro informe sua idade.")
    } else {
        console.log("A data do evento é inválida ou está indisponível.")
    }

let Idade = 23;
    if (Idade >= 18) {
        console.log("Idade válida, informe o nome dos participantes.")
        
    } else {
        ("Cadastro não pode ser realizado, usuário menor de idade!")   
    }
let listaParticipantes = ("Caroline,Douglas,Murilo,Tanielli,Eduardo,Natália,Helen");
  if (listaParticipantes.length < 100) {
      console.log("Seu evento foi registrado com sucesso para o dia 10/12/2022!")    
  } else {
      console.log("Não foi possível completar o registro, número de participantes está acima do permitido! ")
      
  }