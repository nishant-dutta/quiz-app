interface AuthResponse {
    access_token: string,
    expires_in: number,
    refresh_token: string,
    refresh_expires_in: number
}

export class User {

    accessToken!: string;
    expiresOn!: number;
    refreshToken!: string;
    refreshExpiresOn!: number;

    initializeValuesFromAuthResponse(authResponse: AuthResponse) {
        this.accessToken = authResponse.access_token;
        this.expiresOn = Date.now() + (authResponse.expires_in * 1000);
        this.refreshToken = authResponse.refresh_token;
        this.refreshExpiresOn = Date.now() + (authResponse.refresh_expires_in * 1000);
    }
}
