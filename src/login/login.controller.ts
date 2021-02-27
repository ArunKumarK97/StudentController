import { Controller, Get , HttpService} from '@nestjs/common';
import { ROOT_URL } from '../config';

@Controller('login')
export class LoginController {
    constructor(private readonly http: HttpService) {}
    //To get user for login
    @Get()
    async getLogin() {
        const response = await this.http.get(ROOT_URL+'/login').toPromise();
        return response.data;
    }
}
