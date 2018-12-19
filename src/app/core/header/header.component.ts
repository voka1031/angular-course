import { HttpEvent } from '@angular/common/http';
import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private dataStorageService: DataStorageService,
    private authService: AuthService) { }

  onSaveData() {
    this.dataStorageService.storeRecipes()
      .subscribe(
        (response: HttpEvent<Object>) => {
          // console.log(response.type === HttpEventType.Sent);
          console.log(response);
        }
      );
  }
  onFetchData() {
    this.dataStorageService.getRecipes();
  }

  onLogout() {
    this.authService.logout();
  }

  isAuth() {
    return this.authService.inAuthenticated();
  }
}
