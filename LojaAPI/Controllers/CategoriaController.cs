using Microsoft.AspNetCore.Mvc;
using LojaAPI.Data;
using LojaAPI.Models;

namespace LojaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CategoriaController : ControllerBase
{
    private readonly IRepository _repo;
    public CategoriaController(IRepository repo){
        _repo = repo;
    }

    [HttpGet]
    public async Task<IActionResult> Get()
    {
        try
        {
            var result = await _repo.GetAllCategoriasAsync();
            return Ok(result);
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> Post(Categoria categoria)
    {
        try
        {
            _repo.Add(categoria);
            if(await _repo.SaveChangesAsync()){
                return Ok(categoria);
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

        return BadRequest();
    }

    [HttpPut("{idCategoria}")]
    public async Task<IActionResult> Put(int idCategoria, Categoria categoria)
    {
        try
        {
            var cat = await _repo.GetCategoriaAsyncById(idCategoria);
            if(cat == null) return NotFound();

            _repo.Update(categoria);
            if(await _repo.SaveChangesAsync()){
                return Ok(categoria);
            }
        }
        catch (Exception ex)
        {
            return BadRequest(ex.Message);
        }

        return BadRequest();
    }

    [HttpDelete("{idCategoria}")]
    public async Task<IActionResult> Delete(int idCategoria)
    {
        try
        {
            var cat = await _repo.GetCategoriaAsyncById(idCategoria);
            if(cat == null) return NotFound();

            _repo.Delete(cat);
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
