using Microsoft.EntityFrameworkCore.Migrations;

namespace ESShopReact.NetCore.Migrations
{
    public partial class QuantityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "OrderedQuantity",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "OrderedQuantity",
                table: "Products");
        }
    }
}
