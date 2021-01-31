import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs/internal/observable/throwError';
import { IPost } from 'src/app/interfaces/post';


const API_URL = 'http://localhost:3000/posts/';
const httpOptionsResponse = {
 // headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType:'json'
};
const httpOptionsRequest = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  
 };
@Injectable({
  providedIn: 'root'
})

export class PostService {

  constructor(private http: HttpClient) { }
  /*
  The asynchronous method sends an HTTP request, and returns an Observable that emits the requested data when the response is received. 
  The return type varies based on the observe and responseType values that you pass to the call.
The get() method takes two arguments; 
the endpoint URL from which to fetch, and an options object that you can use to configure the request.
default options: {observe: 'body', responseType: 'json'}*/
getAllPosts(){
  return this.http.get<IPost[]>(API_URL);
}
/*When you pass an interface as a type parameter to the HttpClient.get() method, 
you can use the RxJS map operator to transform the response data as needed by the UI. 
You can then pass the transformed data to the async pipe.
*/
getPostById(id){
  return this.http.get<IPost>(API_URL,id)
  .pipe(  //using a pipe to send all observables returned by the HttpClient.get() call to the error handler.
  
    //  catchError(this.handleError)
    );

}
  createPost(params):Observable<any>{
    return this.http.post(API_URL , {
     content:params.content
    }
    );
   
  }

  updatePost(id:number,params:IPost):Observable<any>{
    return this.http.put(`${API_URL }/update/${id}`, params);
  }
  deletePost(id: number): Observable<{}> {
    const url = `${API_URL}/${id}`; 
    return this.http.delete(url)
      
    
   
  }
}
