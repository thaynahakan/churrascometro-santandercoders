let meuStorage = localStorage;

let homens = meuStorage.getItem("Homens"),
 adultos = meuStorage.getItem("Adultos"),
 criancas = meuStorage.getItem("Criancas"),
 mulheres = meuStorage.getItem("Mulheres"),
 qnt_convidados = meuStorage.getItem("Convidados");

//Números de convidados
const numero_convidados = document.getElementById('numeros_convidados'),
 carne = document.getElementById('quantidade_carne'),
 pao = document.getElementById('quantidade_pao'),
 refri = document.getElementById('quantidade_refri'),
 agua = document.getElementById('quantidade_agua'),
 cerveja = document.getElementById('quantidade_cerveja'),
 carvao = document.getElementById('quantidade_carvao'),
 sal = document.getElementById('quantidade_sal'),
 gelo = document.getElementById('quantidade_gelo');

const convidados = meuStorage.getItem("Convidados")

function calculo(){
    
    let calc_carne = ((homens * 0.4) + (mulheres * 0.32) + (criancas * 0.20));
    calc_carne = calc_carne.toFixed(1),

     calc_pao = (adultos * 2) + (criancas * 1),

     calc_refri = Math.ceil((qnt_convidados * 2) / 5),
    
     calc_agua = Math.ceil((qnt_convidados * 1) / 5),

     calc_cerveja = Math.ceil(((adultos * 4 * 600) / 1000)),

     calc_carvao = qnt_convidados * 1,
     calc_carvao = calc_carvao.toFixed(1),

     calc_sal = qnt_convidados * 0.04,
     calc_sal = calc_sal.toFixed(1),

     calc_gelo = (qnt_convidados / 10) * 5,
     calc_gelo = calc_gelo.toFixed(1)

    //Colocar o resultado na tela

    carne.textContent = calc_carne + " KG";
    pao.textContent = calc_pao + " Unid.";
    refri.textContent = calc_refri + " Litros";
    agua.textContent = calc_agua + " Litros";
    cerveja.textContent = calc_cerveja + " Latas /600ml";
    carvao.textContent = calc_carvao + " KG";
    sal.textContent = calc_sal + " KG";
    gelo.textContent = calc_gelo + " KG";


}


numero_convidados.innerHTML = convidados;

calculo()




function voltar(){
    //Redirecionamento para tela com os resultados
    window.location.href = "index.html";
}