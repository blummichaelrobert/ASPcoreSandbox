using Sandbox.Data;
using Sandbox.Models;

namespace Sandbox.EFCore
{
	public class EFCoreBaseballPlayerRepository: EFCoreRepository<BaseballPlayer, SandboxContext>
	{
		public EFCoreBaseballPlayerRepository(SandboxContext context) : base(context)
		{

		}
		// We can add new methods specific to the movie repository here in the future
	}
}
