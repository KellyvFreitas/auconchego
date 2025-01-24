import axios from 'axios';

const fetchEstados = async () => {
  try {
    const response = await axios.get('https://brasilapi.com.br/api/ibge/uf/v1');
    console.log(response.data); // Lista de estados
  } catch (error) {
    console.error('Erro ao buscar estados:', error);
  }
};

fetchEstados();
