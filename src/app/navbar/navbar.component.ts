import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { AuthService } from 'src/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router, private authService: AuthService, private messageService:  MessageService){}

  items: MenuItem[] | undefined;

    exportQuestions() {
        alert('Feature in progress!');
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Question Bank',
                // icon: 'pi pi-fw pi-question',
                items: [
                    {
                        label: 'Add Questions',
                        icon: 'pi pi-fw pi-plus',
                        routerLink: "/create-questions"
                    },
                    {
                        label: 'View Questions',
                        icon: 'pi pi-fw pi-file-edit',
                        routerLink: "/view-questions"
                    },
                    {
                        separator: true
                    },
                    {
                        label: 'Export',
                        icon: 'pi pi-fw pi-external-link',
                        command: this.exportQuestions
                    }
                ]
            },
            {
                label: 'Tools',
                icon: 'pi pi-fw pi-briefcase',
                items: [
                    {
                        label: 'Calculator',
                        icon: 'pi pi-fw pi-align-left'
                    },
                    {
                        label: 'FD Calculator',
                        icon: 'pi pi-fw pi-align-right'
                    },
                    {
                        label: 'RD Calculator',
                        icon: 'pi pi-fw pi-align-center'
                    },
                    {
                        label: 'Simple Interest Calculator',
                        icon: 'pi pi-fw pi-align-justify'
                    }
                ]
            }
        ];
    }

    navigateToHomepage() {
        this.router.navigateByUrl("/view-questions");
    }

    navigateToLogin(){
        this.router.navigateByUrl("/login");
    }

    isUserLoggedIn(){
        return this.authService.decodedAuthResponse != null;
    }

    logout(){
        this.authService.decodedAuthResponse = null;
        // todo: Add API call for logout
        this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Logout Successful!' });
        this.navigateToHomepage();
    }

    isOnCredentialsPage(){
        return this.router.url === "/login";
    }
}
