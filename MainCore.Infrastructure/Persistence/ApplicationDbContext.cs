using MainCore.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace MainCore.Infrastructure.Persistence;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options)
{
    public DbSet<Transformer> Transformers { get; set; }

    public DbSet<Alert> Alerts { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Seeding Data for Showcase
        Guid transformerId1 = Guid.Parse("11111111-1111-1111-1111-111111111111");
        Guid transformerId2 = Guid.Parse("22222222-2222-2222-2222-222222222222");

        modelBuilder.Entity<Transformer>().HasData(new Transformer
            {
                Id = transformerId1,
                SerialNumber = "TX-001-ALPHA",
                Location = "Sector 7G",
                LoadPercentage = 84.5,
                TemperatureCelsius = 65.2,
                Status = TransformerStatus.Active,
                LastMaintenance = DateTime.UtcNow.AddMonths(-2)
            },

            new Transformer
            {
                Id = transformerId2,
                SerialNumber = "TX-009-BETA",
                Location = "Sector 4",
                LoadPercentage = 92.1,
                TemperatureCelsius = 88.5, // High temp
                Status = TransformerStatus.Active,
                LastMaintenance = DateTime.UtcNow.AddMonths(-6)
            }
        );

        modelBuilder.Entity<Alert>().HasData(
            new Alert
            {
                Id = Guid.NewGuid(),
                TransformerId = transformerId2,
                Severity = AlertSeverity.Warning,
                Message = "High temperature detected in TX-009-BETA",
                Timestamp = DateTime.UtcNow.AddMinutes(-15),
                IsAcknowledged = false
            },

            new Alert
            {
                Id = Guid.NewGuid(),
                TransformerId = transformerId1,
                Severity = AlertSeverity.Info,
                Message = "Routine diagnostic completed successfully",
                Timestamp = DateTime.UtcNow.AddHours(-2),
                IsAcknowledged = true
            }
        );
    }
}
