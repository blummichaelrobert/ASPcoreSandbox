using Microsoft.EntityFrameworkCore;
using Sandbox.Models;

namespace Sandbox.Data
{
    public class SandboxContext : DbContext
    {
        public SandboxContext (DbContextOptions<SandboxContext> options)
            : base(options)
        {
        }

        public DbSet<BaseballPlayer> BaseballPlayer { get; set; }
    }
}
