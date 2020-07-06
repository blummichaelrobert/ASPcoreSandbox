using Sandbox.Data;
using System.ComponentModel.DataAnnotations;

namespace Sandbox.Models
{
	public class Pitcher : IEntity
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public string PlayerId { get; set; }

		[Required]
		public string TeamId { get; set; }

		public string FirstName { get; set; }

		public string LastName { get; set; }

		public string HeightWeight { get; set; }

		public string EarnedRunAverage { get; set; }

		public string StrikeOuts { get; set; }

		public string InningsPitched { get; set; }

		public string Hits { get; set; }

		public string Walks { get; set; }

		public string WHIP { get; set; }
	}
}
