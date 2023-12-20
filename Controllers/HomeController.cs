using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ServerSidePaginationWeb.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using ServerSidePaginationWeb.Context;

namespace ServerSidePaginationWeb.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        ServiceCall ObjSvcCall = new ServiceCall();

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

     

        public ActionResult Product()
        {
            return View();
        }

        [HttpGet]
        public async Task<ActionResult<ResProduct>> GetProductList(int draw, int start, int length, string searchValue, string sortColumn, string sortDirection)
        {
            try        
            {
                var sC = sortColumn;
                var sd = sortDirection;
                ResProduct resProduct = new ResProduct();
                resProduct = await ObjSvcCall.GetProductList(draw ,start,length,searchValue,sortColumn,sortDirection);
                return resProduct;
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "\n=> ex Error: " + ex + "\n=> Action Name: " + ex.TargetSite.ReflectedType.Name + "\n=> Error Message: " + ex.Message + "\n=> Line Number: " + ex.StackTrace + ex.Source);
                return null;
            }
        }

        



}
}
