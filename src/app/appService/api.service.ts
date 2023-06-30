import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class ApiService {


	constructor(private http: HttpClient) { }


	getUser() {
		return this.http.get<any>("http://localhost:3000/getUsers")
			.pipe(map((res) => {
				return res;
			}))
	}
	postUser(data: any) {
		return this.http.post<any>("http://localhost:3000/postUsers", data)
			.pipe(map((res: any) => {
				return res;
			}))
	}



	deleteUser(user_id: any) {
		return this.http.delete<any>(`http://localhost:3000/deleteUsers/${user_id}`)
		// return this.http.delete<any>(`http://localhost:3001/deleteUser?id=${id}`)

			.pipe(map((res: any) => {
				return res;
			}))
	}

  updateUser(data: any, user_id: any) {
		return this.http.put<any>(`http://localhost:3000/updateUsers/${user_id}`, data)
			.pipe(map((res: any) => {
				return res;
			}))
	}

}
