using Sandbox.Data;
using Sandbox.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.EFCore
{
	public class EFCoreBaseballTeamRepository: EFCoreRepository<BaseballTeam, SandboxContext>
	{
		public EFCoreBaseballTeamRepository(SandboxContext context) : base(context)
		{

		}
	}
}
