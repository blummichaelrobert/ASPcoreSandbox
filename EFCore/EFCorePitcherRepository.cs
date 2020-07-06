using Sandbox.Data;
using Sandbox.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.EFCore
{
	public class EFCorePitcherRepository: EFCoreRepository<Pitcher, SandboxContext>
	{
		public EFCorePitcherRepository(SandboxContext context): base(context)
		{

		}
	}
}
