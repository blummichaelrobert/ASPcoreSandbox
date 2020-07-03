using Microsoft.EntityFrameworkCore.Migrations;

namespace Sandbox.Migrations
{
    public partial class BaseballTeam : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_BaseballPlayer",
                table: "BaseballPlayer");

            migrationBuilder.RenameTable(
                name: "BaseballPlayer",
                newName: "BaseballPlayers");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseballPlayers",
                table: "BaseballPlayers",
                column: "Id");

            migrationBuilder.CreateTable(
                name: "BaseballTeams",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TeamId = table.Column<string>(nullable: false),
                    TeamCode = table.Column<string>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_BaseballTeams", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "BaseballTeams");

            migrationBuilder.DropPrimaryKey(
                name: "PK_BaseballPlayers",
                table: "BaseballPlayers");

            migrationBuilder.RenameTable(
                name: "BaseballPlayers",
                newName: "BaseballPlayer");

            migrationBuilder.AddPrimaryKey(
                name: "PK_BaseballPlayer",
                table: "BaseballPlayer",
                column: "Id");
        }
    }
}
