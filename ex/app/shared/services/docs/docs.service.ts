import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable'

@Injectable()
export class DocsService {
  
  constructor(
    private http:Http,
  ) {
  }
  
  getCatalog(): Observable<any> {
    return this.http.request('/ex/docs/catalog.json')
      .map(res => res.json())
  }
}
