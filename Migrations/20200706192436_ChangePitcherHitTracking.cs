using Microsoft.EntityFrameworkCore.Migrations;

namespace Sandbox.Migrations
{
    public partial class ChangePitcherHitTracking : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Hits",
                table: "Pitchers");

            migrationBuilder.AddColumn<string>(
                name: "HitAllowedAvgPer9Innings",
                table: "Pitchers",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "HitAllowedAvgPer9Innings",
                table: "Pitchers");

            migrationBuilder.AddColumn<string>(
                name: "Hits",
                table: "Pitchers",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
