using Microsoft.AspNetCore.Mvc;
using LojaAPI.Data;
using LojaAPI.Models;

namespace LojaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProdutoController : ControllerBase
{
    private readonly IRepository _repo;
    public ProdutoController(IRepository repo){
        _repo = repo;
    }

    [HttpGet("categoria/{idCategoria}")]
    public async Task<IActionResult> GetPorCategoria(int idCategoria)
    {
        try
        {
            var result = await _repo.GetProdutosAsyncByCategoriaId(idCategoria);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpGet("{idProduto}")]
    public async Task<IActionResult> Get(int idProduto)
    {
        try
        {
            var result = await _repo.GetProdutoAsyncById(idProduto);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Produto produto)
    {
        try
        {
            _repo.Add(produto);
            if(await _repo.SaveChangesAsync()){
                return Ok(produto);
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

        return BadRequest();
    }

    [HttpPut("{idProduto}")]
    public async Task<IActionResult> Put(int idProduto, Produto produto)
    {
        try
        {
            var prod = await _repo.GetProdutoAsyncById(idProduto);
            if(prod == null) return NotFound();

            _repo.Update(produto);
            if(await _repo.SaveChangesAsync()){
                return Ok(produto);
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

        return BadRequest();
    }

    [HttpDelete("{idProduto}")]
    public async Task<IActionResult> Delete(int idProduto)
    {
        try
        {
            var prod = await _repo.GetProdutoAsyncById(idProduto);
            if(prod == null) return NotFound();

            _repo.Delete(prod);
            if(await _repo.SaveChangesAsync()){
                return Ok("Excluido");
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

        return BadRequest();
    }
}
