import { AutenticacaoService } from './../login/autenticacao/autenticacao.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router'

@Injectable()
export class ConsumidorGuard implements CanActivate {

  perfilConsumidor: Boolean = localStorage.getItem('perfil') == 'Consumidor'?  true: false;
  constructor(private autenticacaoService: AutenticacaoService, private router: Router) { }

  canActivate(
        route: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot

  ): Observable<boolean> | boolean{
     
    if(this.perfilConsumidor) {
      return true;
    }

    this.router.navigate(['/home'])

    return false;
  }

}
