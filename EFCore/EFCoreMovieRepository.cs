using MyMDB.Models;
using Sandbox.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Sandbox.EFCore
{
	public class EFCoreMovieRepository: EFCoreRepository<Movie, MoviesContext>
	{
		public EFCoreMovieRepository(MoviesContext context) : base(context)
		{

		}
		// We can add new methods specific to the movie repository here in the future
	}
}
