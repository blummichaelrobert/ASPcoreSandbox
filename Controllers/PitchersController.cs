using Microsoft.AspNetCore.Mvc;
using Sandbox.EFCore;
using Sandbox.Models;

namespace Sandbox.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class PitchersController : BaseController<Pitcher, EFCorePitcherRepository>
	{
		public PitchersController(EFCorePitcherRepository repository) : base(repository)
		{

		}
	}
}
