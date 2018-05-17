import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './Data.service';

@Injectable()
export class DataGuard implements CanActivate {
  constructor(private _dataService: DataService,
              private _router: Router) {}

  canActivate(): boolean {
    if(this._dataService.loggedIn()){
      return true
    }
    else{
      this._router.navigate(['/login'])
      return false
    }
  }
}
