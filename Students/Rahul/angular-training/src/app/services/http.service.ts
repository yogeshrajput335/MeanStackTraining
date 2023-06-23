import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  httpGetRequest(){
    return this.http.get('https://api.publicapis.org/entries')
  }


  CallNodeAPI1(){
    return this.http.get('http://localhost:4600/posts/')
  }

  CallNodeAPI2(){
    return this.http.get('http://localhost:4600/posts/getideas')
  }
  
  GetBooks(){
    return this.http.get('http://localhost:8080/api/books')
  }
  SaveBook(data:any){
    return this.http.post('http://localhost:8080/api/books',data)
  }
  UpdateBook(data:any,id:number){
    return this.http.put('http://localhost:8080/api/books/'+id,data)
  }
  DeleteBook(id:number){
    return this.http.delete('http://localhost:8080/api/books/'+id)
  }
}
