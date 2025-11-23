using MainCore.Application.DTOs;
using MainCore.Application.Interfaces;
using MainCore.Domain.Entities;
using MainCore.Infrastructure.Persistence;
using Microsoft.EntityFrameworkCore;

namespace MainCore.Infrastructure.Repositories;

public class DashboardRepository(ApplicationDbContext context) : IDashboardRepository
{
    private readonly ApplicationDbContext _context = context;

    public async Task<DashboardStatsDto> GetStatsAsync()
    {
        int totalTransformers = await _context.Transformers.CountAsync();
        int activeAlerts = await _context.Alerts.CountAsync(a => !a.IsAcknowledged);

        List<Transformer> transformers = await _context.Transformers.ToListAsync();
        double efficiency = transformers.Count != 0 ? transformers.Average(t => 100 - (t.LoadPercentage * 0.1) - (t.TemperatureCelsius > 80 ? 5 : 0)) : 0;

        return new DashboardStatsDto
        {
            TotalTransformers = totalTransformers,
            ActiveAlerts = activeAlerts,
            SystemEfficiency = Math.Round(efficiency, 1)
        };
    }

    public async Task<List<AlertDto>> GetRecentAlertsAsync()
    {
        return await _context.Alerts.OrderByDescending(a => a.Timestamp).Take(5)
            .Select(a => new AlertDto
            {
                Id = a.Id,
                Message = a.Message,
                Severity = a.Severity.ToString().ToLower(),
                Timestamp = a.Timestamp
            })
            .ToListAsync();
    }

    public async Task<List<double>> GetEfficiencyHistoryAsync()
    {
        // Simulated history data for the chart
        return await Task.FromResult(new List<double> { 95, 94, 98, 97, 99, 96, 98 });
    }
}
