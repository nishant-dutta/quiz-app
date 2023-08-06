import { Component } from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/auth/auth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    constructor(private router: Router, private authService: AuthService){}

    title = 'quiz-app';
    items: MenuItem[] | undefined;

    exportQuestions() {
        alert('Feature in progress!');
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Question Bank',
                icon: 'pi pi-fw pi-question',
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
            },
            {
                label: 'Users',
                icon: 'pi pi-fw pi-user',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-fw pi-user-plus'
                    },
                    {
                        label: 'Delete',
                        icon: 'pi pi-fw pi-user-minus'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            {
                                label: 'Filter',
                                icon: 'pi pi-fw pi-filter',
                                items: [
                                    {
                                        label: 'Print',
                                        icon: 'pi pi-fw pi-print'
                                    }
                                ]
                            },
                            {
                                icon: 'pi pi-fw pi-bars',
                                label: 'List'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Events',
                icon: 'pi pi-fw pi-calendar',
                items: [
                    {
                        label: 'Edit',
                        icon: 'pi pi-fw pi-pencil',
                        items: [
                            {
                                label: 'Save',
                                icon: 'pi pi-fw pi-calendar-plus'
                            },
                            {
                                label: 'Delete',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    },
                    {
                        label: 'Archieve',
                        icon: 'pi pi-fw pi-calendar-times',
                        items: [
                            {
                                label: 'Remove',
                                icon: 'pi pi-fw pi-calendar-minus'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Quit',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }

    navigateToHomepage() {
        this.router.navigateByUrl("/");
    }

    navigateToLogin(){
        this.router.navigateByUrl("/login");
    }

    isUserLoggedIn(){
        return this.authService.decodedResponse != null;
    }

    logout(){
        this.authService.decodedResponse = null;
        this.navigateToHomepage();
    }

    isOnCredentialsPage(){
        console.log(this.router.url)
        return this.router.url === "/login";
    }
}
