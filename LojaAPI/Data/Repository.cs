using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using LojaAPI.Models;

namespace LojaAPI.Data
{
    public class Repository : IRepository
    {
        private readonly DataContext _context;

        public Repository(DataContext context)
        {
            _context = context;
        }
        public void Add<T>(T entity) where T : class
        {
            _context.Add(entity);
        }
        public void Update<T>(T entity) where T : class
        {
            _context.Update(entity);
        }
        public void Delete<T>(T entity) where T : class
        {
            _context.Remove(entity);
        }
        public async Task<bool> SaveChangesAsync()
        {
            return (await _context.SaveChangesAsync()) > 0;
        }

        public async Task<Produto> GetProdutoAsyncById(int idProduto)
        {
            IQueryable<Produto> query = _context.Produto;

            query = query.AsNoTracking()
                         .OrderBy(produto => produto.id)
                         .Where(produto => produto.id == idProduto);

            return await query.FirstOrDefaultAsync();
        }
        public async Task<Produto[]> GetProdutosAsyncByCategoriaId(int idCategoria)
        {
            IQueryable<Produto> query = _context.Produto;

            query = query.AsNoTracking()
                         .OrderBy(produto => produto.id)
                         .Where(produto => produto.idCategoria == idCategoria);

            return await query.ToArrayAsync();
        }

        
        public async Task<Categoria[]> GetAllCategoriasAsync()
        {
            IQueryable<Categoria> query = _context.Categorias;

            query = query.AsNoTracking()
                         .OrderBy(categoria => categoria.id);

            return await query.ToArrayAsync();
        }

        public async Task<bool> VerificaraAdmin(Usuario usuario)
        {
            IQueryable<Usuario> query = _context.Usuario;

            query = query.AsNoTracking()
                         .OrderBy(user => user.id)
                         .Where(user => user.nome == usuario.nome && user.senha == usuario.senha);

            Usuario[] users = await query.ToArrayAsync();
            return users.Length > 0;
        }

        public async Task<Categoria> GetCategoriaAsyncById(int idCategoria)
        {
            IQueryable<Categoria> query = _context.Categorias;

            query = query.AsNoTracking()
                         .OrderBy(categoria => categoria.id)
                         .Where(categoria => categoria.id == idCategoria);

            return await query.FirstOrDefaultAsync();
        }
        
    }
}