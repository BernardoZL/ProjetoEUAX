namespace LojaAPI.Models
{
    public class Usuario
    {
        public Usuario(int id, string nome, string senha){
            this.id = id;
            this.nome = nome;
            this.senha = senha;
        }

        public int id { get; set; }
        public string nome { get; set; }
        public string senha { get; set; }
    }
}