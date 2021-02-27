import { Body, Controller, Delete, Get, HttpService, Param, Post, Put } from '@nestjs/common';
import { ROOT_URL } from '../config';

@Controller('api')
export class ApiController {
    constructor(private readonly http: HttpService) { }
    @Get('/studentList')
    async getStudentList() {
        let student = await this.http.get(ROOT_URL+'/studentList').toPromise();
        student.data.sort((a, b) => {
            var section1 = a.section.toLowerCase(),
                section2 = b.section.toLowerCase();

            if (section1 < section2) {
                return -1;
            }
            if (section1 > section2) {
                return 1;
            }
            return 0;
        });

        student.data.sort((a, b) => {
            return a.studentClass - b.studentClass;
        });
        return student.data;
    }

    @Post('/createStudent')
    async createStudent(@Body() body) {
        const response = await this.http.post(ROOT_URL+'/studentList', body).toPromise();
        return response.data;
    }

    @Put('/studenUpdate/:id')
    async studenUpdate(@Body() body, @Param() params) {
        const response = await this.http.put(ROOT_URL+'/studentList/' + params.id, body).toPromise();
        return response.data;
    }

    @Delete('/studentDelete/:id')
    async studentDelete(@Param() params) {
        const response = await this.http.delete(ROOT_URL+'/studentList/' + params.id).toPromise();
        return response.data;
    }

    @Get('/getPhoneNumbers')
    async getPhoneNumbers() {
        const students = await this.http.get(ROOT_URL+'/studentList').toPromise();
        let phoneNumbers = students.data.map(student => student.phone);
        return phoneNumbers;
    }
}
