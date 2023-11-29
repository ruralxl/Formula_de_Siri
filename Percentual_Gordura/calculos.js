function calculoMasc(){
    //idade 
    let tntIdade = document.getElementById('txtIdade')
    let Idade = Number(tntIdade.value)

    // Triceps
    let tntTri1 = document.getElementById('txtTri1')
    let Tri1 = Number(tntTri1.value)
    let tntTri2 = document.getElementById('txtTri2')
    let Tri2 = Number(tntTri2.value)
    let tntTri3 = document.getElementById('txtTri3')
    let Tri3 = Number(tntTri3.value)
    let TriF = (Tri1+Tri2+Tri3)/3

    // Supra Iliaca 
    let tntSupra1 = document.getElementById('txtSupra1')
    let Supra1 = Number(tntSupra1.value)
    let tntSupra2 = document.getElementById('txtSupra2')
    let Supra2 = Number(tntSupra2.value)
    let tntSupra3 = document.getElementById('txtSupra3')
    let Supra3 = Number(tntSupra3.value)
    let SupraF = (Supra1+Supra2+Supra3)/3

    // Abdomen 
    let tntAbd1 = document.getElementById('txtAbd1')
    let Abd1 = Number(tntAbd1.value)
    let tntAbd2 = document.getElementById('txtAbd2')
    let Abd2 = Number(tntAbd2.value)
    let tntAbd3 = document.getElementById('txtAbd3')
    let Abd3 = Number(tntAbd3.value)
    let AbdF = (Abd1+Abd2+Abd3)/3

    // Verificar se os valores são números
    if (isNaN(TriF) || isNaN(SupraF) || isNaN(AbdF)) {
        alert("Por favor, insira números válidos.")
        return
    }

    // Densidade corporal e percentual de gordura  
    let somaD = (TriF + SupraF + AbdF)
    let DB2 = somaD * somaD
    let Dobras1 = 0.0008267 * somaD
    let Dobras2 = 0.0000016 * DB2
    let idad = Idade * 0.0001392
    let densidade =   1.1093800 - Dobras1 + Dobras2  - idad
    let gordura = (495 / densidade) -450

    // Arredondar o resultado
    gordura = gordura.toFixed(2)
    
    document.getElementById("resMasculo").innerHTML += `<h2>${gordura}%</h2>`;
   
}


function calculoFem(){
    //idade 
    let tntIdade = document.getElementById('txtIdade')
    let Idade = Number(tntIdade.value)

    // Triceps
    let tntTri1 = document.getElementById('txtTri1')
    let Tri1 = Number(tntTri1.value)
    let tntTri2 = document.getElementById('txtTri2')
    let Tri2 = Number(tntTri2.value)
    let tntTri3 = document.getElementById('txtTri3')
    let Tri3 = Number(tntTri3.value)
    let TriF = (Tri1+Tri2+Tri3)/3

    // Supra Iliaca 
    let tntSupra1 = document.getElementById('txtSupra1')
    let Supra1 = Number(tntSupra1.value)
    let tntSupra2 = document.getElementById('txtSupra2')
    let Supra2 = Number(tntSupra2.value)
    let tntSupra3 = document.getElementById('txtSupra3')
    let Supra3 = Number(tntSupra3.value)
    let SupraF = (Supra1+Supra2+Supra3)/3

    // Abdomen 
    let tntAbd1 = document.getElementById('txtAbd1')
    let Abd1 = Number(tntAbd1.value)
    let tntAbd2 = document.getElementById('txtAbd2')
    let Abd2 = Number(tntAbd2.value)
    let tntAbd3 = document.getElementById('txtAbd3')
    let Abd3 = Number(tntAbd3.value)
    let AbdF = (Abd1+Abd2+Abd3)/3

    // Verificar se os valores são números
    if (isNaN(TriF) || isNaN(SupraF) || isNaN(AbdF)) {
        alert("Por favor, insira números válidos.")
        return
    }

    // Densidade corporal e percentual de gordura  
    let somaD = (TriF + SupraF + AbdF)
    let DB2 = somaD * somaD
    let Dobras1 = 0.0009929 * somaD
    let Dobras2 = 0.0000023 * DB2
    let idad = Idade * 0.0001392
    let densidade =   1.0994921 - Dobras1 + Dobras2  - idad
    let gordura = (495 / densidade) -450

    // Arredondar o resultado
    gordura = gordura.toFixed(2)
    
    document.getElementById("resFeminino").innerHTML += `<h2>${gordura}%</h2>`;
   
}

