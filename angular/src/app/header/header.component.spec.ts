import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { WindowService } from '../shared/windowService/windowService.service';
import { AuthService } from '../shared/authentication/auth.service';
import { LoginDataService } from '../shared/backend/login/login-data-service';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BackendModule } from '../shared/backend/backend.module';
import { CovalentCoreModule } from '@covalent/core';
import { SidenavModule } from '../sidenav/sidenav.module';
import { AppComponent } from '../app.component';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [WindowService, AuthService, LoginDataService],
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        BackendModule.forRoot({environmentType: 0, restServiceRoot: 'v1'}),
        CovalentCoreModule.forRoot(),
        SidenavModule,
      ],
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
