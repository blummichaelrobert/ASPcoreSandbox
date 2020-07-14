using Microsoft.EntityFrameworkCore;
using Sandbox.Data;
using Sandbox.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.EFCore
{
	public class EFCoreBaseballPlayerRepository : DbContext
	{
		private readonly SandboxContext context;

		public EFCoreBaseballPlayerRepository(SandboxContext context)
		{
			this.context = context;
		}

		public async Task<List<BaseballPlayer>> GetPlayerByPositon(string position)
		{
			var query = context.BaseballPlayers.Where(player => player.Position == position);

			return await query.ToListAsync();
		}

	}
}
