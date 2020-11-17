using Microsoft.EntityFrameworkCore.Migrations;

namespace LoveCalculatorAPI.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CrushName",
                columns: table => new
                {
                    Crush_Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Crush_Name_Instances = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CrushName", x => x.Crush_Name);
                });

            migrationBuilder.CreateTable(
                name: "UserName",
                columns: table => new
                {
                    User_Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    User_Name_Instances = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_UserName", x => x.User_Name);
                });

            migrationBuilder.CreateTable(
                name: "Crush",
                columns: table => new
                {
                    CrushID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    User_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Crush_Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Crush_Instances = table.Column<int>(type: "int", nullable: false),
                    CrushNameCrush_Name = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    UserNameUser_Name = table.Column<string>(type: "nvarchar(450)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Crush", x => x.CrushID);
                    table.ForeignKey(
                        name: "FK_Crush_CrushName_CrushNameCrush_Name",
                        column: x => x.CrushNameCrush_Name,
                        principalTable: "CrushName",
                        principalColumn: "Crush_Name",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Crush_UserName_UserNameUser_Name",
                        column: x => x.UserNameUser_Name,
                        principalTable: "UserName",
                        principalColumn: "User_Name",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Crush_CrushNameCrush_Name",
                table: "Crush",
                column: "CrushNameCrush_Name");

            migrationBuilder.CreateIndex(
                name: "IX_Crush_UserNameUser_Name",
                table: "Crush",
                column: "UserNameUser_Name");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Crush");

            migrationBuilder.DropTable(
                name: "CrushName");

            migrationBuilder.DropTable(
                name: "UserName");
        }
    }
}
