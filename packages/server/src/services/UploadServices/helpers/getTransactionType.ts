const getProductType = (type: number) => {
  switch (type) {
    case 1:
      return {
        description: 'Venda produtor',
        nature: 'Entrada',
        signal: '+'
      }
    case 2:
      return {
        description: 'Venda afiliado',
        nature: 'Entrada',
        signal: '+'
      }
    case 3:
      return {
        description: 'Comissão paga',
        nature: 'Saída',
        signal: '-'
      }
    case 4:
      return {
        description: 'Comissão recebida',
        nature: 'Entrada',
        signal: '+'
      }
    default:
      break
  }
}

export default getProductType
