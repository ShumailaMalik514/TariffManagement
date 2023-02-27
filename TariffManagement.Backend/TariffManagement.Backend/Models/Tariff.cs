namespace TariffManagement.Backend.Models
{
    public class Tariff
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? Price { get; set; }
        public string? DownloadSpeed { get; set; }
        public string? UploadSpeed { get; set; }
        public string[]? Benefits { get; set; }
        
    }
}
