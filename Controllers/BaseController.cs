using Microsoft.AspNetCore.Mvc;
using Sandbox.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.Controllers
{
	public abstract class BaseController<TEntity, TRepository> : ControllerBase
		where TEntity : class, IEntity
		where TRepository : IRepository<TEntity>
	{
		private readonly TRepository repository;

		public BaseController(TRepository repository)
		{
			this.repository = repository;
		}

		// GET: api/[controller]
		[HttpGet]
		public async Task<ActionResult<IEnumerable<TEntity>>> Get()
		{
			return await repository.GetAll();
		}

		// GET: api/[controller]/5
		[HttpGet("{id}")]
		public async Task<ActionResult<TEntity>> Get(int id)
		{
			var movie = await repository.Get(id);
			if (movie == null)
			{
				return NotFound();
			}
			return movie;
		}

		// PUT: api/[controller]/5
		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, TEntity entity)
		{
			if (id != entity.Id)
			{
				return BadRequest();
			}
			await repository.Update(entity);
			return NoContent();
		}

		// POST: api/[controller]
		[HttpPost]
		public async Task<ActionResult<TEntity>> Post(TEntity entity)
		{
			await repository.Add(entity);
			return CreatedAtAction("Get", new { id = entity.Id }, entity);
		}

		// DELETE: api/[controller]/5
		[HttpDelete("{id}")]
		public async Task<ActionResult<TEntity>> Delete(int id)
		{
			var movie = await repository.Delete(id);
			if (movie == null)
			{
				return NotFound();
			}
			return movie;
		}

	}
}
