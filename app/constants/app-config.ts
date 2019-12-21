import { environment } from '../../environments/environment';

export class AppConfig {
    public static URL_AppBase: string = environment.apiUrl;
    public static login: string = AppConfig.URL_AppBase + "auth/login";
    public static logout: string = AppConfig.URL_AppBase + "auth/logout";
    public static Order_List: string = AppConfig.URL_AppBase + "admin/orderlist";
    
    
}