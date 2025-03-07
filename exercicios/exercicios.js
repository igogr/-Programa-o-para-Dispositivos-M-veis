
//Objetos

let pessoa = {
    nome: "Igor ",
    idade: 23,
    altura: 180,
    peso: 85
}


pessoa.email = "igor001@.com"
console.log(pessoa)


delete pessoa.email;
console.log(pessoa)



//Exercício 9: Desestruturação de Objetos
function saudacao(nome){
    console.log("titulo:  O Senhor dos Aneis  " 
        , "Autor J.R Tolkien" ,"Ano: 1954" + nome)
    
}
saudacao ("!")


//