using Sandbox.Data;
using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Sandbox.Models
{
	public class BaseballPlayer : IEntity
    {
		[Key]
		public int Id { get; set; }

		[Required]
		public string FirstName { get; set; }

		[Required]
		public string LastName { get; set; }

		[Required]
		public string Position { get; set; }

		[Required]
		public string HeightWeight { get; set; }

		[Required]
		public double BattingAverage { get; set; }

		public int HomeRuns { get; set; }

		public int RunsBattedIn { get; set; }

		public double OnBasePercentage { get; set; }

		public int Hits { get; set; }

		public int Doubles { get; set; }

		public int Triples { get; set; }
	}
}
