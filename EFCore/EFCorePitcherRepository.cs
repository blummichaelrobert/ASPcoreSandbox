using Microsoft.EntityFrameworkCore;
using Sandbox.Data;
using Sandbox.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.EFCore
{
	public class EFCorePitcherRepository : DbContext
	{
		private readonly SandboxContext context;

		public EFCorePitcherRepository(SandboxContext context)
		{
			this.context = context;
		}

		public Task<Pitcher> Add(Pitcher entity)
		{
			throw new NotImplementedException();
		}

		public Task<Pitcher> Delete(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<Pitcher> Get(int id)
		{
			var query = context.Pitchers.Where(pitcher => pitcher.LastName == "Britton").FirstOrDefault<Pitcher>();
					   //.where(s => s.StudentName == "Bill")
					   //.FirstOrDefault<Student>();

			return await context.Set<Pitcher>().FindAsync(id);
		}

		public Task<List<Pitcher>> GetAll()
		{
			throw new NotImplementedException();
		}

		public Task<Pitcher> Update(Pitcher entity)
		{
			throw new NotImplementedException();
		}
	}
}
