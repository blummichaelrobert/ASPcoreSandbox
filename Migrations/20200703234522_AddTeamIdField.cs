using Microsoft.EntityFrameworkCore.Migrations;

namespace Sandbox.Migrations
{
    public partial class AddTeamIdField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "TeamId",
                table: "BaseballPlayers",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TeamId",
                table: "BaseballPlayers");
        }
    }
}
