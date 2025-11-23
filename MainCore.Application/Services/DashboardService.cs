using MainCore.Application.DTOs;
using MainCore.Application.Interfaces;

namespace MainCore.Application.Services;

public class DashboardService(IDashboardRepository repository) : IDashboardService
{
    private readonly IDashboardRepository _repository = repository;

    public async Task<DashboardDataDto> GetDashboardDataAsync()
    {
        DashboardStatsDto stats = await _repository.GetStatsAsync();
        List<AlertDto> recentAlerts = await _repository.GetRecentAlertsAsync();

        return new DashboardDataDto
        {
            Stats = stats,
            RecentEvents = recentAlerts
        };
    }
}
