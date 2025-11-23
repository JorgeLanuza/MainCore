namespace MainCore.Application.DTOs;

public class DashboardStatsDto
{
    public int TotalTransformers { get; set; }

    public int ActiveAlerts { get; set; }

    public double SystemEfficiency { get; set; }
}

public class AlertDto
{
    public Guid Id { get; set; }
    public string Message { get; set; } = string.Empty;

    public string Severity { get; set; } = string.Empty;

    public DateTime Timestamp { get; set; }
}

public class DashboardDataDto
{
    public DashboardStatsDto Stats { get; set; } = new();

    public List<AlertDto> RecentEvents { get; set; } = [];
}
