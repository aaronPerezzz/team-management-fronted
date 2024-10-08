// profile.component.ts
import { Component, OnInit } from '@angular/core';
import { MsalService } from '@azure/msal-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html'
})
export class ProfileComponent implements OnInit {
  userProfile: any;

  constructor(private msalService: MsalService, private http: HttpClient) {}

  ngOnInit() {
    const account = this.msalService.instance.getActiveAccount();
    if (account) {
      this.http.get('https://graph.microsoft.com/v1.0/me').subscribe(profile => {
        this.userProfile = profile;
      });
    }
  }
}