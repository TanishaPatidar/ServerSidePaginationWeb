using Newtonsoft.Json;
using ServerSidePaginationWeb.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;

namespace ServerSidePaginationWeb.Context
{
    public class ServiceCall
    {

        public async Task<ResProduct> GetProductList(int draw, int start, int length, string searchValue, string sortColumn, string sortDirection)
        {
            try
            {
                ResProduct resProduct = new ResProduct();
                using (var httpClient = new HttpClient())
                {
                    var data1 = new
                    {
                        draw = draw,
                        start = start,
                        length = length,
                        search = searchValue,
                        sortColumn=sortColumn,
                        sortDirection=sortDirection
                        // Add other properties if needed
                    };

                    var content = new StringContent(JsonConvert.SerializeObject(data1), System.Text.Encoding.UTF8, "application/json");


                    using (var response = await httpClient.PostAsync("https://localhost:44312/api/controller/GetPaginatedData", content))
                    {
                        if (response.IsSuccessStatusCode)
                        {
                            string apiResponse = await response.Content.ReadAsStringAsync();
                            var res = JsonConvert.DeserializeObject<ResProduct>(apiResponse);
                            resProduct = res;

                        }
                    }
                    return resProduct;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


       
    }
}
