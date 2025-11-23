using MainCore.Application.DTOs;

namespace MainCore.Application.Interfaces;

public interface IDashboardRepository
{
    Task<DashboardStatsDto> GetStatsAsync();

    Task<List<AlertDto>> GetRecentAlertsAsync();

    Task<List<double>> GetEfficiencyHistoryAsync();
}
