import UserIndex  from "../views/admin/user/Index";
import UserType from "../views/admin/commodity/Type";
import CommodityIndex from "../views/admin/commodity/Index";

export const adminRouter = [
    {path: "/admin/user/index" , component : UserIndex} ,
    {path: "/admin/user/type" , component : UserType} ,
    {path: "/admin/commodity/index" , component : CommodityIndex},
];
