function idade() {

	const data = new Date().getYear() + 1900
	const sexo = document.getElementsByName('s')
	const anoNascimento = document.getElementById('n').value
	const resIdade = document.getElementById('idade')
	const res = document.getElementById('res')
	const idade = data - anoNascimento
	let img = document.getElementById('imagen')

	res.innerHTML = ''
	resIdade.innerHTML = ''

	if (anoNascimento.length == 0) {
		res.innerHTML = '<p style="color:red">*Adicione sua data de nascimento</p>'
		resIdade.innerHTML = ''
		img.src = 'user.png'
	}

	else if (anoNascimento > data) {
		alert('Insira um ano valido')
		res.innerHTML = 'invalido'
		img.src = 'user.png'
	}
	
	else if(idade >= 60){

 		if(sexo[0].checked){
			img.src = 'idoso.jpg'
			res.innerHTML = 'idoso'
			resIdade.innerHTML = `${idade} anos`
		}

 		if(sexo[1].checked){
			img.src = 'idosa.jpg'
			res.innerHTML = 'idosa'
			resIdade.innerHTML = `${idade} anos`
		}
	}

	else if (idade < 60 && idade > 18) {

 		if(sexo[0].checked){
			img.src = 'homen.jpg'
			res.innerHTML = 'adulto'
			resIdade.innerHTML = `${idade} anos`
		}

 		if(sexo[1].checked){
			img.src = 'mulher.jpg'
			res.innerHTML = 'adulta'
			resIdade.innerHTML = `${idade} anos`
		}	

	 }

	else if (idade > 14){

 		if(sexo[0].checked){
			img.src = 'am.png'
			res.innerHTML = 'adolescente'
			resIdade.innerHTML = `${idade} anos`
		}

 		if(sexo[1].checked){
			img.src = 'af.jpg'
			res.innerHTML = 'adolescente'
			resIdade.innerHTML = `${idade} anos`
		}
	}

	else if (idade < 14){

 		if(sexo[0].checked){
			img.src = 'menino.jpg'
			res.innerHTML = 'criança'
			resIdade.innerHTML = `${idade} anos`
		}

 		if(sexo[1].checked){
			img.src = 'menina.jpg'
			res.innerHTML = 'criança'
			resIdade.innerHTML = `${idade} anos`
		}	
	 }

}
