import { http } from './Config'

export default {

    listar: () => {
        return http.get('produtos')
    },

    salvar: (produto) => {
        return http.post('produto', produto)
    }

}