import UserIndex  from "../views/admin/user/Index";
import UserType from "../views/admin/commodity/type";
import CommodityIndex from "../views/admin/commodity";
import Login from "../views/main/login";
import HomeIndex from "../views/admin/home/Index";

export const adminRouter = [
    {path: "/admin/index" ,component : HomeIndex } ,
    {path: "/admin/user/index" ,component : UserIndex } ,
    {path: "/admin/user/type" ,component : UserType } ,
    {path: "/admin/commodity/index" ,component : CommodityIndex },
];


export const noAccessRouter = [
    {path: "/login" ,component : Login } ,
]