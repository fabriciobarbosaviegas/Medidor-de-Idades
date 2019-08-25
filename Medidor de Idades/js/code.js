function idade() {
	var atual = new Date()
	var turno = atual.getYear()
	var ano = turno + 1900
	var sexo = document.getElementsByName('s')
	var img = document.getElementById('imagen')
	var n = document.getElementById('n').value
	var res = document.getElementById('idade')
	var r = document.getElementById('res')
	var idade = ano - n
	res.innerHTML = ''
	r.innerHTML = ''
	if (n.length == 0) {
		res.innerHTML = '<p style="color:red">*Adicione sua data de nascimento</p>'
		r.innerHTML = ''
		img.src = 'user.png'
	}
	else if (n > ano) {
		alert('Insira um ano valido')
		res.innerHTML = `invalido`
		img.src = 'user.png'
	}
	
	else if(idade >= 60){
 		if(sexo[0].checked){
			img.src = 'idoso.jpg'
			r.innerHTML = `idoso`
			res.innerHTML = `${idade} anos`

	}
 		if(sexo[1].checked){
			img.src = 'idosa.jpg'
			res.innerHTML = `idosa`
			res.innerHTML = `${idade} anos`
	}
	 }
	else if (idade < 60 && idade > 18) {
 		if(sexo[0].checked){
			img.src = 'homen.jpg'
			r.innerHTML = `adulto`
			res.innerHTML = `${idade} anos`
	}
 		if(sexo[1].checked){
			img.src = 'mulher.jpg'
			res.innerHTML = `adulta`
			res.innerHTML = `${idade} anos`
	}			
	 }
	else if (idade > 14){
 		if(sexo[0].checked){
			img.src = 'am.png'
			r.innerHTML = `adolescente`
			res.innerHTML = `${idade} anos`
	}
 		if(sexo[1].checked){
			img.src = 'af.jpg'
			res.innerHTML = `adolescente`
			res.innerHTML = `${idade} anos`
	}
	}
	else if (idade < 14){
 		if(sexo[0].checked){
			img.src = 'menino.jpg'
			r.innerHTML = `criança`
			res.innerHTML = `${idade} anos`
	}
 		if(sexo[1].checked){
			img.src = 'menina.jpg'
			res.innerHTML = `criança`
			res.innerHTML = `${idade} anos`
	}	
	 }
	
}
