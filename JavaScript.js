var prods = [
    {id: 1, name: "Bife com batata", price: 30.0},
    {id: 2, name: "Coxa de frango crocante", price: 25.0},
    {id: 3, name: "Carne de panela", price: 22.0},
    {id: 4, name: "Farofa", price: 10.0},
    {id: 5, name: "Salada", price: 8.0},
    {id: 6, name: "Torresmo", price: 12.0}    
];



function calc(){
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;
    var name = document.getElementById("name").value;
    var formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL',});

    output.innerHTML =  "<p> Caro(a) <strong>" + " " + name + "</strong> </p>" + "<p> Seguem os dados do seu pedido.</p>" + "<p>O seu pedido é:</p>";

    
    for(var input of quantities){
        var id = input.id;

        if(input.value !== '0'){

        total += prods[id-1].price* parseFloat(input.value);
        
        output.innerHTML += `<li>Prato: ${prods[id-1].name} - Preço unitário: ${formatter.format(prods[id-1].price)} - Quantidade: ${input.value} - Total: ${formatter.format(prods[id-1].price*parseFloat(input.value))} </br></li>`;
        }
    }

    output.innerHTML += `<h4>Preço final: ${formatter.format(total)}</h4>`;
}