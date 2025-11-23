namespace MainCore.Domain.Entities;

public class Alert
{
    public Guid Id { get; set; }

    public Guid TransformerId { get; set; }

    public AlertSeverity Severity { get; set; }

    public string Message { get; set; } = string.Empty;

    public DateTime Timestamp { get; set; }

    public bool IsAcknowledged { get; set; }
}

public enum AlertSeverity
{
    Info,
    Warning,
    Critical
}
