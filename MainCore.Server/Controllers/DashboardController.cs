using MainCore.Application.DTOs;
using MainCore.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace MainCore.WebApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class DashboardController(IDashboardService dashboardService) : ControllerBase
{
    private readonly IDashboardService _dashboardService = dashboardService;

    [HttpGet]
    public async Task<ActionResult<DashboardDataDto>> GetDashboardData()
    {
        DashboardDataDto data = await _dashboardService.GetDashboardDataAsync();

        return Ok(data);
    }
}
