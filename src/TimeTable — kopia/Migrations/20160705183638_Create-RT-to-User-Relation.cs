using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore.Migrations;

namespace TimeTable.Migrations
{
    public partial class CreateRTtoUserRelation : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RtToUsers",
                columns: table => new
                {
                    UserId = table.Column<int>(nullable: false),
                    ResourceTableId = table.Column<Guid>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RtToUsers", x => new { x.UserId, x.ResourceTableId });
                    table.ForeignKey(
                        name: "FK_RtToUsers_ResourceTables_ResourceTableId",
                        column: x => x.ResourceTableId,
                        principalTable: "ResourceTables",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_RtToUsers_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_RtToUsers_ResourceTableId",
                table: "RtToUsers",
                column: "ResourceTableId");

            migrationBuilder.CreateIndex(
                name: "IX_RtToUsers_UserId",
                table: "RtToUsers",
                column: "UserId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RtToUsers");
        }
    }
}
