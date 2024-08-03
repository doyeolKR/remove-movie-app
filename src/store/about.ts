import { Store } from "../core/heropy";

interface State {
  photo: string;
  name: string;
  email: string;
  blog: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: "https://heropy.blog/css/images/logo.png",
  name: "doyeol",
  email: "oktui2002@naver.com",
  blog: "https://blog.naver.com",
  github: "https://github.com/doyeolKR",
  repository: "https://github.com/doyeolKR",
});
