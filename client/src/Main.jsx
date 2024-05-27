import ReactDOM from "react-dom/client";
import App from "./App";
import AppContextProvider from "./context/AppContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
    <AppContextProvider>
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            containerClassName=""
            containerStyle={{}}
            toastOptions={{
                className: "",
                duration: 5000,
                style: {
                    background: "var(--color-brand-green-100)",
                    color: "var(--color-white)",
                    whiteSpace: "nowrap",
                    display: "flex",
                    flexWrap: "noWrap",
                    minWidth: "fit-content",
                },

                success: {
                    duration: 3000,
                    theme: {
                        primary: "green",
                        secondary: "black",
                    },
                },
            }}
        />
        <App />
    </AppContextProvider>
    // </React.StrictMode>
);
