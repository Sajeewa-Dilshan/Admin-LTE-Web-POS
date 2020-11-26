var dashboardBar=document.getElementById("dashboard-bar");
var manageCustomersBar=document.getElementById("manage-customer-bar");
var manageItemBar=document.getElementById("manage-item-bar");
var placeOrderBar=document.getElementById("place-orders-bar");
var searchOrderBar=document.getElementById("search-orders-bar");


var dashboard=document.querySelector(".dashboard");
var manageCustomer=document.querySelector(".manage-customer");
var manageItem=document.querySelector(".manage-item");
var placeOrder=document.querySelector(".place-order");
var searchOrder=document.querySelector(".search-order");


dashboardBar.addEventListener('click',function (){
    dashboard.classList.remove("hide-div");
    manageCustomer.classList.add("hide-div");
    manageItem.classList.add("hide-div");
    placeOrder.classList.add("hide-div");
    searchOrder.classList.add("hide-div");
});


manageCustomersBar.addEventListener('click',function (){
    dashboard.classList.add("hide-div");
    manageCustomer.classList.remove("hide-div");
    manageItem.classList.add("hide-div");
    placeOrder.classList.add("hide-div");
    searchOrder.classList.add("hide-div");
});

manageItemBar.addEventListener('click',function (){
    dashboard.classList.add("hide-div");
    manageCustomer.classList.add("hide-div");
    manageItem.classList.remove("hide-div");
    placeOrder.classList.add("hide-div");
    searchOrder.classList.add("hide-div");
});

placeOrderBar.addEventListener('click',function (){
    dashboard.classList.add("hide-div");
    manageCustomer.classList.add("hide-div");
    manageItem.classList.add("hide-div");
    placeOrder.classList.remove("hide-div");
    searchOrder.classList.add("hide-div");
});

searchOrderBar.addEventListener('click',function (){
    dashboard.classList.add("hide-div");
    manageCustomer.classList.add("hide-div");
    manageItem.classList.add("hide-div");
    placeOrder.classList.add("hide-div");
    searchOrder.classList.remove("hide-div");
});
