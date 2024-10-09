import { Component } from '@angular/core';
import { MsalBroadcastService, MsalService } from '@azure/msal-angular';
import { AccountInfo, EventMessage, EventType, InteractionStatus } from '@azure/msal-browser';
import { filter, Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 
  public loginDisplay = false;
  private readonly _destroying$ = new Subject<void>();
  public isAuthenticated = false;
  activeAccount!: AccountInfo | null;
 
  constructor(
    private authService: MsalService,
    private msalBroadcastService: MsalBroadcastService
  ){}
 
  ngOnInit(): void {
    this.authService.instance.enableAccountStorageEvents();
    this.msalBroadcastService.msalSubject$
    .pipe(
        filter((msg: EventMessage) => msg.eventType === EventType.ACCOUNT_ADDED || msg.eventType === EventType.ACCOUNT_REMOVED),
    )
    .subscribe(() => {
        if (this.authService.instance.getAllAccounts().length === 0) {
            window.location.pathname = "/";
        } else {
            this.setLoginDisplay();
        }
    })
 
    this.isAuthenticated = !!this.authService.instance.getActiveAccount();
    if (this.isAuthenticated) {
      this.activeAccount = this.authService.instance.getActiveAccount();
    }
 
    this.msalBroadcastService.inProgress$
    .pipe(
        filter((status: InteractionStatus) => status === InteractionStatus.None),
        takeUntil(this._destroying$)
    )
    .subscribe(() => {
      this.setLoginDisplay();
      this.checkAndSetActiveAccount();
    })
  }
 
  setLoginDisplay() {
    this.loginDisplay = this.authService.instance.getAllAccounts().length > 0;
  }
 
  checkAndSetActiveAccount() {
    const activeAccount = this.authService.instance.getActiveAccount();
 
    if (!activeAccount && this.authService.instance.getAllAccounts().length > 0) {
      const accounts = this.authService.instance.getAllAccounts();
      this.authService.instance.setActiveAccount(accounts[0]);
    }
  }
 
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }
 

}
