using System;
using System.Collections.Generic;

namespace ServerSidePaginationWeb.Models
{
    public class Product
    {
        public int MastCode { get; set; }
        public string ProductName { get; set; }

        public string ProductDetails { get; set; }
    }

    public class ResProduct
    {
        public string em { get; set; }
        public int ec { get; set; }
        public int Draw { get; set; }
        public int RecordsTotal { get; set; }

        public int recordsFiltered { get; set; }

        public List<Product> data { get; set; }
    }

    
}
