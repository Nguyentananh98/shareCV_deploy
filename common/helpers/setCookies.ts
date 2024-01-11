import Cookies from 'js-cookie';
import { TOKEN } from "@/common/constants/cookies";
import { IAuthResponse } from "../interfaces";

export function setAccessCookies(res: IAuthResponse) {
    console.log(res.access_token)
    Cookies.set(TOKEN, res.access_token, { secure: true });
}

export function getAccessCookies() {
    return Cookies.get(TOKEN);
}

export function removeAccessCookies() {
    Cookies.remove(TOKEN)
}