namespace LojaAPI.Models
{
    public class Produto
    {
        public Produto(int id, string nome, string preco, string imagem, int idCategoria){
            this.id = id;
            this.nome = nome;
            this.preco = preco;
            this.imagem = imagem;
            this.idCategoria = idCategoria;
        }

        public int id { get; set; }
        public string nome { get; set; }
        public string preco { get; set; }
        public string imagem { get; set; }
        public int idCategoria {get; set; }
        public Categoria? categoria { get; set; }
    }
}