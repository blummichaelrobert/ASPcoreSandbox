using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Sandbox.EFCore;
using Sandbox.Models;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Sandbox.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class BaseballTeamsController : BaseController<BaseballTeam, EFCoreBaseballTeamRepository>
	{
		public BaseballTeamsController(EFCoreBaseballTeamRepository repository): base(repository)
		{

		}
	}
}
