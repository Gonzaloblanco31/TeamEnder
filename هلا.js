var dejarDeVer =document.getElementById('patrocinadores')
dejarDeVer.addEventListener('click', Cambios)

function Cambios()
{
  //alert('tu boton esta funcionando')


dejarDeVer.innerText = 'Dejar de ver'
  
  if(dejarDeVer.classList.contains('desactivado'))
  {
    dejarDeVer.classList.remove('desactivado')
    dejarDeVer.classList.add('activado')
    dejarDeVer.innerText = 'Patrocinadores'
  }
else if(dejarDeVer.classList.contains('activado'))
{
  dejarDeVer.classList.remove('activado')
  dejarDeVer.classList.add('desactivado')
  dejarDeVer.innerText = 'Dejar de ver'
  }
}
