

jQuery(document).ready(function () {
  
    $.noConflict(),
    GetProductList()
});


function GetProductList() {
    if (navigator.onLine) {
        
       
            $('#table_Product').DataTable().destroy();
     

        var getaddFlag = sessionStorage.getItem("addFlag");
        var geteditFlag = sessionStorage.getItem("editFlag");
        var getdeleteFlag = sessionStorage.getItem("deleteFlag");

        $('#table_Product').DataTable({
            processing: true,
            serverSide: true,
            filter: true,
            scrollX: "auto",
            ajax: {
                type: 'GET',
                url: "/Home/GetProductList",
                dataType: 'json',
                //data: function (d) {
                //    d.pageNumber = d.start / d.length + 1;
                //    d.pageSize = d.length;
                //},
            },
            columns: [
                {
                    title: "Product Name",
                    data: "ProductName",
                    width: "15%"
                },
                {
                    title: "Product Details",
                    data: "ProductDetails",
                    width: "15%"
                },
                {
                    title: "Actions",
                    render: function (data, type, row, i) {
                        var system = '';
                        if (getaddFlag == "false") {
                            $('#btnOpen').remove();
                        }
                        else {
                            $('#btnOpen').show();
                        }
                        if ((geteditFlag == "true" && getdeleteFlag == "false") || (geteditFlag == "false" && getdeleteFlag == "true")) {
                            system += "<button type='button' title='Edit' class='btn btn-sm btn-success me-1' onclick='GetUserByID(" + row.mastCode + ")' data-bs-toggle='modal' data-bs-target='#add_user'><i class='ri-pencil-line'></i></button>";
                        }
                        if (getdeleteFlag == "true") {
                            system += "<button type='button' title='Delete' class='btn btn-sm btn-danger' onclick='deleteRecord(" + row.mastCode + ")'><i class='ri-delete-bin-line'></i></button>";
                        }
                        return system;
                    },
                    width: "10%"
                }
            ]
        });
    }
    else {
        toastr.error("Please check your internet connection.");
    }
}


































////jQuery(document).ready(function () {
////    GetProductList();
  
////});

////function GetProductList() {


////    if (navigator.onLine) {
////        var count = 1;
////        $('#table_Product').DataTable().destroy(); // Corrected destroy method invocation

////        var getaddFlag = sessionStorage.getItem("addFlag");
////        var geteditFlag = sessionStorage.getItem("editFlag");
////        var getdeleteFlag = sessionStorage.getItem("deleteFlag");
////       // var getexportFlag = sessionStorage.getItem("exportFlag");

////        $('#table_Product').DataTable({
////            processing: true,
////            serverSide: true,
////            filter: true,
////            destroy: true,
////            scrollX: "auto",
            
////            ajax: {
////                type: 'GET',
////                url: "/Home/GetList",
////                dataType: 'json',
////                data: function (d) {
////                    d.pageNumber = d.start / d.length + 1; 
////                    d.pageSize = d.length;
                   
////                },
                
////            },
            
////            "columns": [
////                {
////                    "title": "Product Name",
////                    "data": "ProductName",
////                    "width": "15%"
////                },
////                {
////                    "title": "Product Details",
////                    "data": "ProductDetails",
////                    "width": "15%"
////                },
              
////                {
////                    "title": "Actions",
////                    "render": function (data, type, row, i) {
////                        var system = '';
////                        if (getaddFlag == "false") {
////                            $('#btnOpen').remove();
////                        }
////                        else {
////                            $('#btnOpen').show();
////                        }
////                        if (geteditFlag == "false" && getdeleteFlag == "false") {
////                            system = '';
////                        }
////                        if (geteditFlag == "true" && getdeleteFlag == "false") {
////                            system = "<button type ='button' title ='Edit' class='btn btn-sm btn-success me-1' onclick='GetUserByID(" + row.mastCode + ")' data-bs-toggle='modal' data-bs-target='#add_user' id='btnEdit' title='Edit'><i class='ri-pencil-line'></i></button>";
////                        }
////                        if (getdeleteFlag == "true" && geteditFlag == "false") {
////                            system = "<button type ='button' title ='Delete' class='btn btn-sm btn-danger' onclick=' deleteRecord(" + row.mastCode + ")' id='btnDelete'><i class='ri-delete-bin-line'></i></button>";
////                        }
////                        if (geteditFlag == "true" && getdeleteFlag == "true") {
////                            system = "<button type ='button' title ='Edit' class='btn btn-sm btn-success me-1' onclick='GetUserByID(" + row.mastCode + ")' data-bs-toggle='modal' data-bs-target='#add_user' id='btnEdit' title='Edit'><i class='ri-pencil-line'></i></button>"
////                                + "<button type ='button' title ='Delete' class='btn btn-sm btn-danger' onclick=' deleteRecord(" + row.mastCode + ")' id='btnDelete'><i class='ri-delete-bin-line'></i></button>";
////                        }
////                        return system;
////                    },
////                    "width": "10%"
////                }
////            ]
////        }).draw();
////    }
////    else {
////        toastr.error("Please check your internet connection.");
////    }
////}