using ESShopReact.NetCore.Models;
using Microsoft.EntityFrameworkCore;

namespace ESShopReact.NetCore.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }

        public DbSet<Category> Categories { get; set; }
        public DbSet<Order> Orders { get; set; }
     
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<ProductOrder> ProductOrders { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ProductOrder>().HasKey(fv => new { fv.OrderID, fv.ProductID });
            modelBuilder.Entity<ProductOrder>()
                .HasOne<Product>(po => po.Product)
                .WithMany(p => p.ProductOrders)
                .HasForeignKey(po => po.ProductID);
            modelBuilder.Entity<ProductOrder>()
                .HasOne<Order>(fa => fa.Order)
                .WithMany(u => u.ProductOrders)
                .HasForeignKey(fa => fa.OrderID);
        }
    }
}
