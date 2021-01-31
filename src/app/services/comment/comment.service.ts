import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IComment } from 'src/app/interfaces/comment';


const API_URL = 'http://localhost:3000/comments';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  getAllComments(){
    return this.http.get<IComment[]>(API_URL);
  }
  /*When you pass an interface as a type parameter to the HttpClient.get() method, 
  you can use the RxJS map operator to transform the response data as needed by the UI. 
  You can then pass the transformed data to the async pipe.
  */
  getCommentById(id){
    return this.http.get<IComment>(API_URL,id)
    .pipe(  //using a pipe to send all observables returned by the HttpClient.get() call to the error handler.
    
      //  catchError(this.handleError)
      );
  
  }
    createComment(params):Observable<any>{
      return this.http.post(API_URL , {
       content:params.content
      }
      );
     
    }
  
    updateComment(id:number,params:IComment):Observable<any>{
      return this.http.put(`${API_URL }/update/${id}`, params);
    }
    deleteComment(id: number): Observable<{}> {
      const url = `${API_URL}/${id}`; 
      return this.http.delete(url)
        
      
     
    }
}
