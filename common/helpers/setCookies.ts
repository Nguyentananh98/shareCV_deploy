import Cookies from 'js-cookie';
import { TOKEN } from "@/common/constants/cookies";
import { IAuthResponse } from "../interfaces";

export function setAccessCookies(res: IAuthResponse) {
    Cookies.set(TOKEN, res.access_token, { secure: true });
}

export function removeAccessCookies() {
    Cookies.remove(TOKEN)
}