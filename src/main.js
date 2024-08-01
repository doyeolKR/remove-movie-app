import App from "./core/App";
import router from "./routes/index";

const root = document.querySelector("#root");
root.appendChild(new App().el);

router();
