import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {RestDataSource} from "./rest.datasource";
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private datasource: RestDataSource) {
  }

  authenticate(username: string | undefined, password: string | undefined): Observable<boolean> {
    return this.datasource.authenticate(username, password);
  }

  get authenticated(): boolean {
    return this.datasource.auth_token != null;
  }

  clear() {
    this.datasource.auth_token = null;
  }
}
