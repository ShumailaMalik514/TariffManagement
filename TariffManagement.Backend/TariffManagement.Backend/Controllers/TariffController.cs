using Microsoft.AspNetCore.Mvc;
using TariffManagement.Backend.Models;

namespace TariffManagement.Backend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TariffController : ControllerBase
    {
        private readonly ILogger<TariffController> _logger;
        public TariffController(ILogger<TariffController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetTariffList")]
        public async Task<List<Tariff>>GetAsync()
        {
            List<Tariff> result = new List<Tariff>();
            result.Add(new Tariff
            {
                Id = 1,
                Name = "Tariff Package",
                DownloadSpeed = "123",
                UploadSpeed = "345",
                Price = "342",
                Benefits = new[] { "Benefit 1", "Benefits 2" }
            });
            result.Add(new Tariff
            {
                Id = 2,
                Name = "Tariff Package",
                DownloadSpeed = "123",
                UploadSpeed = "345",
                Price = "342",
                Benefits = new[] { "Benefit 1", "Benefits 2" }
            });
            result.Add(new Tariff
            {
                Id = 3,
                Name = "Tariff Package",
                DownloadSpeed = "123",
                UploadSpeed = "345",
                Price = "342",
                Benefits = new[] { "Benefit 1", "Benefits 2" }
            });
            return await Task.FromResult(result);


        }
    }
}
