interface AuthResponse{
    access_token: string,
    expires_in: number,
    refresh_token: string,
    refresh_expires_in: number
}

export class User {

    accessToken!: string;
    expiresOn!: Date;
    refreshToken!: string;
    refreshExpiresOn!: Date;

    initializeValuesFromAuthResponse(authResponse: AuthResponse){
        this.accessToken = authResponse.access_token;
        this.expiresOn = new Date(new Date().getTime() + authResponse.expires_in);
        this.refreshToken = authResponse.refresh_token;
        this.refreshExpiresOn = new Date(new Date().getTime() + authResponse.refresh_expires_in);
    }
}
