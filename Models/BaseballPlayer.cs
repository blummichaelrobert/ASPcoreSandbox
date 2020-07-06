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
		public string PlayerId { get; set; }
		[Required]
		public string TeamId { get; set; }
		public string FirstName { get; set; }

		public string LastName { get; set; }

		public string Position { get; set; }

		public string HeightWeight { get; set; }

		public string AtBats { get; set; }

		public string BattingAverage { get; set; }

		public string HomeRuns { get; set; }

		public string RunsBattedIn { get; set; }

		public string OnBasePercentage { get; set; }

		public string Hits { get; set; }

		public string Doubles { get; set; }

		public string Triples { get; set; }
	}
}
