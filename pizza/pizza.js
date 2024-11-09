//solo me falta colocar la validacion de que cuando se seleccione la pizza mediana el precio de los ingredientes extras se cambie
//automaticamente a 3$ y cuando se seleccione la grande en precio de ingrendientes extras tambien se cambie a 6$
//cada una es el doble de la pequeña y sucesivamente, el de la pequeña es 1.5$

function Presupuesto() {
    const pi = Math.PI;

    //aqui sacaremos los datos de entrada ya que validamos arriba
    const Tamaño = parseFloat(document.getElementById('Tamaño').value);
    const manoDeObra = parseFloat(document.getElementById('manoDeObra').value);
    const costoExtras = parseFloat(document.getElementById('costoExtras').value);

    const radio = Tamaño / 2;
    console.log('radio:')
    console.log(radio)

    //const area = pi * Math.pow(radio, 2);
    //console.log('area')
    //console.log(area)
    //este no va porque solo quiero el radio para sacar la multiplicacion con el costo de la harina

    const Harina = radio * 0.3; // $0.03 por cm2
    console.log('harina')

    console.log(Harina)

    // Contar ingredientes extras seleccionados (Esta parte recorre los ingredientes extras para ver cual fue seleccionado)
    let ingredientesExtras = 0;
    if (document.getElementById('champinones').checked) ingredientesExtras++;
    if (document.getElementById('jamon').checked) ingredientesExtras++;
    if (document.getElementById('aceitunas').checked) ingredientesExtras++;
    if (document.getElementById('anchoas').checked) ingredientesExtras++;
    if (document.getElementById('salchichon').checked) ingredientesExtras++;
    console.log('ingredientes extras')
    console.log(ingredientesExtras)

    // Calcular el costo de los ingredientes extras según el tamaño de la pizza
    let costoIngredientesExtras = 0;
    if (Tamaño === 10) {
        costoIngredientesExtras = ingredientesExtras * costoExtras;
    } else if (Tamaño === 14) {
        costoIngredientesExtras = ingredientesExtras * (costoExtras * 2);
    } else if (Tamaño === 16) {
        costoIngredientesExtras = ingredientesExtras * (costoExtras * 4);
    }
//la mano de obra la puse en 1.5
    const costoPreparacion = manoDeObra + Harina + costoIngredientesExtras;
    console.log('esta calculando bien')

    const precioFinal = costoPreparacion * 1.5;
    console.log('entro a la multiplicacion')


    document.getElementById('Mostrar').innerText = `El costo total de la pizza es: ${precioFinal.toFixed(2)}$`
}

