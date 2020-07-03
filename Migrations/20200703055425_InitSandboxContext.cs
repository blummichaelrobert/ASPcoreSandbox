using Microsoft.EntityFrameworkCore.Migrations;

namespace Sandbox.Migrations
{
    public partial class InitSandboxContext : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "BaseballPlayer",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(nullable: false),
                    LastName = table.Column<string>(nullable: false),
                    Position = table.Column<string>(nullable: false),
                    HeightWeight = table.Column<string>(nullable: false),
                    BattingAverage = table.Column<double>(nullable: false),
                    HomeRuns = table.Column<int>(nullable: false),
                    RunsBattedIn = table.Column<int>(nullable: false),
                    OnBasePercentage = table.Column<double>(nullable: false),
                    Hits = table.Column<int>(nullable: false),
                    Doubles = table.Column<int>(nullable: false),
                    Triples = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseballPlayer", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BaseballPlayer");
        }
    }
}
