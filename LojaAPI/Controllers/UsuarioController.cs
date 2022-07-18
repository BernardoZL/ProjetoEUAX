using Microsoft.AspNetCore.Mvc;
using LojaAPI.Data;
using LojaAPI.Models;

namespace LojaAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly IRepository _repo;
    public UsuarioController(IRepository repo){
        _repo = repo;
    }

    [HttpPost]
    public async Task<bool> Post(Usuario usuario)
    {
        try
        {
            bool result = await _repo.VerificaraAdmin(usuario);
            return result;
        }
        catch (Exception ex)
        {
            return false;
        }
    }
}
