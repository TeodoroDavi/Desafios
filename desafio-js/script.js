
    function adicionarTarefa() {

        
        let inputTarefa = document.getElementById("inputTarefa")
        let Tarefa = inputTarefa.value
        let Lista = document.getElementById("listaTarefa")
        let novaTarefa = document.createElement("li")

        if(Tarefa == ""){  
            let mensagem = "Digite uma tarefa!!";
            document.getElementById("mensagem").textContent = mensagem;
       console.log("valor não encontrado");
         
          }else{
            novaTarefa.textContent = Tarefa
            Lista.appendChild(novaTarefa)  
    
            let mensagem = "Tarefa adicionada com sucesso!";
                  document.getElementById("mensagem").textContent = mensagem;
          console.log("Tarefa Criada")
          }
      inputTarefa.value = ""
    }
  