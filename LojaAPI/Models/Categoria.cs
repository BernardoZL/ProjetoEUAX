namespace LojaAPI.Models
{
    public class Categoria
    {
        public Categoria(int id, string nome){
            this.id = id;
            this.nome = nome;
        }

        public int id { get; set; }
        public string nome { get; set; }
        public IEnumerable<Produto>? produtos { get; set; }
    }
}