using MainCore.Application.DTOs;

namespace MainCore.Application.Interfaces;

public interface IDashboardService
{
    Task<DashboardDataDto> GetDashboardDataAsync();
}
