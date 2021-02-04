import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { TokenStorageService } from '../services/token/token-storage.service';
import { UserService } from '../services/user/user.service';

@Directive({
  selector: '[appHasRole]'
})
export class HasRoleDirective {

  @Input() appHasRole: string[];

  isVisible = false;

  subscription: Subscription ;

  constructor( private templateRef: TemplateRef<any>,private viewContainerRef: ViewContainerRef, private userService:UserService,private tokenStorage:TokenStorageService) { }

  ngOnInit() {
    
    if(this.appHasRole.includes(this.tokenStorage.getType())){//
       
      if (!this.isVisible) {
       
        this.isVisible = true;
        this.viewContainerRef.createEmbeddedView(this.templateRef);
      }
    } else {
     
      this.isVisible = false;
      this.viewContainerRef.clear();
    }
    //  We subscribe to the roles$ to know the roles the user has
 /*
    this.subscription= this.userService.getUserRole(this.tokenStorage.getUser().id).subscribe(role => {
      
      if (!role) {
        this.viewContainerRef.clear();
      }
      
      //if (roles.includes(this.appHasRole)) {
        if(role.name===this.appHasRole){
       
        if (!this.isVisible) {
         
          this.isVisible = true;
          this.viewContainerRef.createEmbeddedView(this.templateRef);
        }
      } else {
       
        this.isVisible = false;
        this.viewContainerRef.clear();
      }
    });
    */
  }
 
  // Clear the subscription on destroy
  ngOnDestroy() {
    //this.subscription.unsubscribe();
  }
 
}
