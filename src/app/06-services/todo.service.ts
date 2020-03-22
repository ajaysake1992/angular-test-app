
import { HttpClient
} from '@angular/common/http';
import { map } from 'rxjs/operators';

export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo) {
    return this.http.post('...', todo).pipe(map((data: any) => data * 2));
  }

  getTodos() {
    return this.http.get('...').pipe(map((data: any) => data * 2));
  }

  delete(id) {
    return this.http.delete('...').pipe(map((data: any) => data * 2));
  }
}
