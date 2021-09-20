function idade() {
  var nascimento = document.querySelector('#nascimento')
  var msg = document.querySelector('#idadeText')
  var date = new Date()
  var ano = date.getFullYear()
  var idade = ano - nascimento.value
  var fsex = document.getElementsByName('radsex')

  if (nascimento.value.length == 0) {
    alert('Digite algum númerio')
  } else if (nascimento.value > 2021) {
    alert('digite uma numero abaixo do ano que estamos')
  } else if (nascimento.value < 0) {
    msg.innerHTML = `Serio que vc vai colocar um número negativo pra testar`
  } else {
    var sex = ''
    var idadeImg = document.createElement('img')
    idadeImg.setAttribute('id', 'foto')
    idadeImg.style.width = '250px'
    idadeImg.style.height = '250px'

    if (fsex[0].checked) {
      sex = 'HOMEM'

      if (idade <= 12) {
        idadeImg.setAttribute('src', 'imagens/criancaMan.png')
      } else if (idade <= 18) {
        idadeImg.setAttribute('src', 'imagens/adolescenteMan.png')
      } else if (idade < 40) {
        idadeImg.setAttribute('src', 'imagens/adultoMan.jpg')
      } else {
        idadeImg.setAttribute('src', 'imagens/idosoMan.png')
      }
    } else if (fsex[1].checked) {
      sex = 'MULHER'

      if (idade <= 12) {
        idadeImg.setAttribute('src', 'imagens/criancaFem.png')
      } else if (idade < 18) {
        idadeImg.setAttribute('src', 'imagens/adolescenteFem.png')
      } else if (idade < 40) {
        idadeImg.setAttribute('src', 'imagens/adultoFem.jpg')
      } else {
        idadeImg.setAttribute('src', 'imagens/idosoFem.png')
        idadeImg.style.width = '250px'
        idadeImg.style.height = '250px'
      }
    }

    msg.innerHTML = `Esta é a sua idade ${idade} e seu genero é ${sex}`
    msg.appendChild(idadeImg)
  }
}
