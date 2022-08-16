import { createServer, Model } from "miragejs";

type User = {
  name: string;
  email: string;
  created_at: string;
};

export function makeServer() {
  const server = createServer({
    models: {
      user: Model.extend<Partial<User>>({}),
    },

    routes() {
      this.namespace = "mirage";
      this.timing = 750;

      this.get("/users");
      this.post("/users");

      this.passthrough();
    },
  });

  return server;
}
