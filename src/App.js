import { Notifyer } from "./Notifyer.js";
import { Timer } from "./Timer.js";
import { Emitter } from "./Emitter.js";

const messages = [
  "Postar foto do meu setup ",
  "Postar uma frase motivacional",
  "Ensinar algo que aprendi hoje ou ontem ",
  "Crie algum conteúdo para ajudar a comunidade ",
];

const notify = () => {
  const randomIndex = Math.floor(Math.random() * messages.length);
  const notification = Notifyer.notify({
    title: "Hora do post",
    body: messages[randomIndex],
  });

  notification();
};

const App = {
  async start() {
    try {
      await Notifyer.init();
      Emitter.on("countdown-start", notify);
      Emitter.on("countdown-end", Timer.init);

      Timer.init();
    } catch (err) {
      console.log(err.message);
    }
  },
};

export { App };
