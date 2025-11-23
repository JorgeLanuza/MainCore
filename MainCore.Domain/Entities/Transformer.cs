namespace MainCore.Domain.Entities;

public class Transformer
{
    public Guid Id { get; set; }

    public string SerialNumber { get; set; } = string.Empty;

    public string Location { get; set; } = string.Empty;

    public double LoadPercentage { get; set; }

    public double TemperatureCelsius { get; set; }

    public TransformerStatus Status { get; set; }

    public DateTime LastMaintenance { get; set; }
}

public enum TransformerStatus
{
    Active,
    Maintenance,
    Decommissioned
}
