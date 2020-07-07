using Microsoft.AspNetCore.Mvc;
using Sandbox.Data;
using Sandbox.EFCore;
using Sandbox.Models;
using System.Threading.Tasks;

namespace Sandbox.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PitchersController : ControllerBase
	{
		private readonly EFCorePitcherRepository repository;

		public PitchersController(EFCorePitcherRepository repository)
		{
			this.repository = repository;
		}

		// GET: api/[controller]/5
		[HttpGet("{id}")]
		public async Task<ActionResult<Pitcher>> Get(int id)
		{
			var pitcher = await repository.Get(id);
			if (pitcher == null)
			{
				return NotFound();
			}
			return pitcher;
		}
	}
}
