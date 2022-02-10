export default interface IProdutosDTO {
  id?: number;
  nome: string;
  preco: number;
  quantidade_estoque: number;
  categoria_id?: number;
}
