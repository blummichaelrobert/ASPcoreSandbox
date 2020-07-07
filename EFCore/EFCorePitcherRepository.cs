using Microsoft.EntityFrameworkCore;
using Sandbox.Data;
using Sandbox.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.EFCore
{
	public class EFCorePitcherRepository<TEntity, TContext> : IRepository<TEntity>
		where TEntity : class, IEntity
		where TContext : DbContext
	{
		private readonly SandboxContext context;

		public EFCorePitcherRepository(SandboxContext context)
		{
			this.context = context;
		}

		public Task<TEntity> Add(TEntity entity)
		{
			throw new NotImplementedException();
		}

		public Task<TEntity> Delete(int id)
		{
			throw new NotImplementedException();
		}

		public async Task<TEntity> Get(int id)
		{
			var query = context.Pitchers.Where(pitcher => pitcher.LastName == "Britton").FirstOrDefault<Pitcher>();
					   //.where(s => s.StudentName == "Bill")
					   //.FirstOrDefault<Student>();

			return await context.Set<TEntity>().FindAsync(id);
		}

		public Task<List<TEntity>> GetAll()
		{
			throw new NotImplementedException();
		}

		public Task<TEntity> Update(TEntity entity)
		{
			throw new NotImplementedException();
		}
	}
}
