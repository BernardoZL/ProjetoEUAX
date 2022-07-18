using System.Threading.Tasks;
using LojaAPI.Models;

namespace LojaAPI.Data
{
    public interface IRepository
    {
        //Genérico
        void Add<T>(T entity) where T : class;
        void Update<T>(T entity) where T : class;
        void Delete<T>(T entity) where T : class;
        Task<bool> SaveChangesAsync();

        //Produtos        
        Task<Produto[]> GetProdutosAsyncByCategoriaId(int idCategoria);
        Task<Produto> GetProdutoAsyncById(int idProduto);
        
        //Categorias
        Task<Categoria[]> GetAllCategoriasAsync();
        Task<Categoria> GetCategoriaAsyncById(int idCategoria);

        //Usuario
        Task<bool> VerificaraAdmin(Usuario usuario);
    }
}