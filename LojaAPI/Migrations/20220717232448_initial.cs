using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace LojaAPI.Migrations
{
    public partial class initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Usuario",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(type: "TEXT", nullable: false),
                    senha = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Usuario", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "Produto",
                columns: table => new
                {
                    id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    nome = table.Column<string>(type: "TEXT", nullable: false),
                    preco = table.Column<string>(type: "TEXT", nullable: false),
                    imagem = table.Column<string>(type: "TEXT", nullable: false),
                    idCategoria = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produto", x => x.id);
                    table.ForeignKey(
                        name: "FK_Produto_Categorias_idCategoria",
                        column: x => x.idCategoria,
                        principalTable: "Categorias",
                        principalColumn: "id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "id", "nome" },
                values: new object[] { 1, "Computadores" });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "id", "nome" },
                values: new object[] { 2, "Celulares" });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "id", "nome" },
                values: new object[] { 3, "Eletrodomésticos" });

            migrationBuilder.InsertData(
                table: "Usuario",
                columns: new[] { "id", "nome", "senha" },
                values: new object[] { 1, "Bernardo", "batata" });

            migrationBuilder.InsertData(
                table: "Produto",
                columns: new[] { "id", "idCategoria", "imagem", "nome", "preco" },
                values: new object[] { 1, 1, "", "Dell", "3000" });

            migrationBuilder.InsertData(
                table: "Produto",
                columns: new[] { "id", "idCategoria", "imagem", "nome", "preco" },
                values: new object[] { 2, 1, "", "Acer", "2500" });

            migrationBuilder.InsertData(
                table: "Produto",
                columns: new[] { "id", "idCategoria", "imagem", "nome", "preco" },
                values: new object[] { 3, 2, "", "Motorola", "1500" });

            migrationBuilder.InsertData(
                table: "Produto",
                columns: new[] { "id", "idCategoria", "imagem", "nome", "preco" },
                values: new object[] { 4, 2, "", "Apple", "10000" });

            migrationBuilder.InsertData(
                table: "Produto",
                columns: new[] { "id", "idCategoria", "imagem", "nome", "preco" },
                values: new object[] { 5, 3, "", "AirFryer", "500" });

            migrationBuilder.CreateIndex(
                name: "IX_Produto_idCategoria",
                table: "Produto",
                column: "idCategoria");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Produto");

            migrationBuilder.DropTable(
                name: "Usuario");

            migrationBuilder.DropTable(
                name: "Categorias");
        }
    }
}
