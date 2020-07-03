using Sandbox.Data;
using System;
using System.ComponentModel.DataAnnotations;

namespace Sandbox.Models
{
	public class BaseballTeam : IEntity
	{
		[Key]
		public int Id { get; set; }

		[Required]
		public string TeamId { get; set; }

		[Required]
		public string TeamCode { get; set; }
	}
}
