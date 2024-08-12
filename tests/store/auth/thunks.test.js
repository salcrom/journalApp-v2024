import {
    loginWithEmailPassword,
    logoutFirebase,
    signInWithGoogle,
} from "../../../src/firebase/providers";
import { checkingCredentials, login, logout } from "../../../src/store/auth";
import {
    checkingAuthentication,
    startGoogleSignIn,
    startLoginWithEmailPassword,
    startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal/journalSlice";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Pruebas en AuthThunks", () => {
    const dispatch = jest.fn();

    test("Debe de invocar al checkingCredentials", async () => {
        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
    });

    test("startGoogleSignIn debe de llamar checkingCredentials y loging - Éxito", async () => {
        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue(loginData);

        // thunks
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test("startGoogleSignIn debe de llamar checkingCredentials y logout - Error", async () => {
        const loginData = { ok: false, errorMessage: "Un error en Google" };
        await signInWithGoogle.mockResolvedValue(loginData);

        // thunks
        await startGoogleSignIn()(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    });

    test("startLoginWithEmailPassword debe de ñña,ar checkingCredentials y login - Éxito", async () => {
        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: "123456" };

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch);

        expect(dispatch).toHaveBeenCalledWith(checkingCredentials());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    });

    test("startLogout debe de llamar logoutFirebase, clearNotes y logout", async () => {
        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());
    });
});
