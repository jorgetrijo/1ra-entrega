const interesMensual = 0.08

function calcularCuotaMensual(monto, meses, interes){
    console.log ("Cuotas:")
     let cuotaMensual = (monto*interes) +(monto/meses)
    for (let i = 1; i <=meses; i++){
        console.log("Cuota " + i + " ARS " + cuotaMensual)
        console.log("Total abonado ARS " + i * cuotaMensual ) 
    }
}

function simularPrestamo(){
    let garantia = prompt("Trabajás bajo relación de dependencia o sos monotributista?")
    if (garantia == "si" || garantia == "sí"){
        let sueldo = parseInt(prompt("Cuánto ganás por mes?"))
        console.log("El límite de préstamo que podemos darte acorde a tus ingresos es de $" + sueldo*5)
        let monto = parseInt(prompt("Cuánto querés pedir prestado?"))
        if (monto > sueldo*5){
            console.log("Lo siento. No podemos prestarte el monto solicitado. Vuelve a intentar")
        }
        if (monto <= sueldo*5){
            let totalCuotas = parseInt(prompt("En cuántas cuotas querés pagarlo?"))
            calcularCuotaMensual(monto, totalCuotas, interesMensual)
        }
        
    }
    else if (garantia == "no"){
        console.log("El límite de préstamo que podemos darte es de $10000")
        let monto = parseInt(prompt("Cuánto querés pedir prestado?"))
        if (monto > 10000){
            console.log("Lo siento. No podemos prestarte el monto solicitado. Vuelve a intentar")
        }
        if (monto <= 10000){
            let totalCuotas = parseInt(prompt("En cuántas cuotas querés pagarlo?"))
            calcularCuotaMensual(monto, totalCuotas, interesMensual)
        }
    }
    else {
        alert("Lo siento. Vuelve a empezar")
    }
    
    
}