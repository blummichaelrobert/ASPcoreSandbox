using Microsoft.EntityFrameworkCore.Migrations;

namespace Sandbox.Migrations
{
    public partial class AddPlayerIdField : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "PlayerId",
                table: "BaseballPlayers",
                nullable: false,
                defaultValue: "");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PlayerId",
                table: "BaseballPlayers");
        }
    }
}
