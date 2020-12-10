using Microsoft.EntityFrameworkCore.Migrations;

namespace ESShopReact.NetCore.Migrations
{
    public partial class unit : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Quantity",
                table: "Products",
                newName: "UnitsInStock");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "UnitsInStock",
                table: "Products",
                newName: "Quantity");
        }
    }
}
