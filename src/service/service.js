import image1 from 'assets/logo.webp'
import gato1 from 'assets/gato 1.webp'
import gato2 from 'assets/gato2.jpg'
import gato3 from 'assets/gato 3.jpg'
import doguinho from 'assets/doguinho.jpg'

export const getAnimais = () => {
  return [
    { nome: 'Gato 1', porte: 'Pequeno', sexo: 'Macho', foto: gato1 },
    { nome: 'Gato 2', porte: 'Pequeno', sexo: 'Fêmea', foto: gato2 },
    { nome: 'Gato 3', porte: 'Médio', sexo: 'Macho', foto: gato3 },
    { nome: 'Gato 1', porte: 'Pequeno', sexo: 'Macho', foto: gato1 },
    { nome: 'Gato 2', porte: 'Pequeno', sexo: 'Fêmea', foto: gato2 },

    { nome: 'Cachorro 1', porte: 'Grande', sexo: 'Fêmea', foto: image1 },
    { nome: 'Doguinho', porte: 'Grande', sexo: 'Macho', foto: doguinho },
    { nome: 'Cachorro 1', porte: 'Grande', sexo: 'Fêmea', foto: image1 },
    { nome: 'Cachorro 1', porte: 'Grande', sexo: 'Fêmea', foto: image1 },
    { nome: 'Doguinho', porte: 'Grande', sexo: 'Macho', foto: doguinho },


  ]
}
