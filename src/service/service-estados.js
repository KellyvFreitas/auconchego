import axios from 'axios';

const fetchEstados = async () => {
  try {
    const response = await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/distritos');
    console.log(response.data); // Lista de estados
  } catch (error) {
    console.error('Erro ao buscar estados:', error);
  }
};

fetchEstados();
