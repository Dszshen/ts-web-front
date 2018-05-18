import { Injectable } from '@angular/core';
import {Http,Headers, RequestOptions,Response} from '@angular/http';

import User from '../app-models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:Http
  ) { }

  //验证
  verify() {
    return this.http.get('/api/verify', this.jwt()).map((response: Response) => response.json());
  }


  //忘记密码
  forgotPassword(email: string) {
    return this.http.post('/api/forgot-password', JSON.stringify({ email }), this.jwt()).map((response: Response) => response.json());
  }


  //获取所有的用户信息
  getAll() {
    return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
  }

  //通过id获取user
  getById(id: number) {
    return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }


  //创建用户
  create(user: User) {
    return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
  }


  //更新用户信息
  update(user: User) {
    return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
  }


  //通过id删除用户
  delete(id: number) {
    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
  }

  //为请求增加token信息
  private jwt() {
    // create authorization header with jwt token
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
      return new RequestOptions({ headers: headers });
    }
  }
}
