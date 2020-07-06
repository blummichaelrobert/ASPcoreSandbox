using Microsoft.EntityFrameworkCore.Migrations;

namespace Sandbox.Migrations
{
    public partial class AddPitcherTable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Pitchers",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    PlayerId = table.Column<string>(nullable: false),
                    TeamId = table.Column<string>(nullable: false),
                    FirstName = table.Column<string>(nullable: true),
                    LastName = table.Column<string>(nullable: true),
                    HeightWeight = table.Column<string>(nullable: true),
                    EarnedRunAverage = table.Column<string>(nullable: true),
                    StrikeOuts = table.Column<string>(nullable: true),
                    InningsPitched = table.Column<string>(nullable: true),
                    Hits = table.Column<string>(nullable: true),
                    Walks = table.Column<string>(nullable: true),
                    WHIP = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Pitchers", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Pitchers");
        }
    }
}
