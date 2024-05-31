import API_BASE_URL from "./config";

export const getUser = () => {
    const user = {
        username: "jair1234",
        profilePicture:
            "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.teachaway.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fheader_image_1200%2Fpublic%2F2018-07%2Fprofile_picture.jpg%3Fitok%3DfP5dCrMk&f=1&nofb=1&ipt=57645f7ce33e04da4445d75b2e2021719341a212f3a82b95861e851efe235972&ipo=images",
    };
    return user;
};

export const loginUser = async (body) => {
    console.log(body, "bodyyyyyyyy");
    const headers = {
        "Content-Type": "application/json",
        "Content-Length": "<calculated when request is sent>",
    };

    try {
        const res = await fetch(`/api/auth/login`, {
            method: "POST",
            body: JSON.stringify(body),
            headers,
        });

        if (!res.ok) {
            throw new Error("No se ha podido crear el usuario");
        }

        const data = await res.json();
        const token = data.data.token;
        localStorage.setItem("token", token);

        return res;
    } catch (err) {
        return err;
    }
};

export const createUser = async (body) => {
    const headers = {
        "Content-Type": "application/json",
    };

    const res = await fetch(`/api/auth/register`, {
        method: "POST",
        body: JSON.stringify(body),
        headers,
    });

    const data = await res.json();
    if (data?.data?.token) {
        const token = data.data.token;
        localStorage.setItem("token", token);
    }

    return [res, data];
};

export const getAllUsers = async ({ search }) => {
    try {
        const res = await fetch(`/api/users?search=${search}`);

        const data = await res.json();
        if (!res.ok) {
            throw new Error("No se ha fetchear la data usuario");
        }

        return data.data;
    } catch (err) {
        return err;
    }
};

export const isAuthenticated = () => {
    const token = localStorage.getItem("token");
    // Verificar si el token existe y no está expirado
    if (token) {
        // Decodificar el token para obtener la fecha de expiración
        const decodedToken = parseJWT(token);
        // Verificar si la fecha de expiración del token es mayor que la fecha actual
        return decodedToken.exp * 1000 > Date.now(); // Convertir segundos a milisegundos
    }
    return false;
};

// Función para decodificar el token JWT
const parseJWT = (token) => {
    try {
        return JSON.parse(atob(token.split(".")[1]));
    } catch (error) {
        return {};
    }
};
