using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using LojaAPI.Models;

namespace LojaAPI.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base (options) { }        
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Produto> Produto { get; set; }
        public DbSet<Usuario> Usuario { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<Categoria>()
                .HasMany(c => c.produtos)
                .WithOne(e => e.categoria)
                .HasForeignKey(s => s.idCategoria)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Categoria>()
                .HasData(new List<Categoria>(){
                    new Categoria(1, "Computadores"),
                    new Categoria(2, "Celulares"),
                    new Categoria(3, "Eletrodomésticos"),
                });
            
            builder.Entity<Produto>()
                .HasData(new List<Produto>{
                    new Produto(1, "Dell", "3000", "", 1),
                    new Produto(2, "Acer", "2500", "", 1),
                    new Produto(3, "Motorola", "1500", "", 2),
                    new Produto(4, "Apple", "10000", "", 2),
                    new Produto(5, "AirFryer", "500", "", 3)
                });
            
            builder.Entity<Usuario>()
                .HasData(new List<Usuario>(){
                    new Usuario(1, "Bernardo", "batata")
                });

            
        }
    }
}