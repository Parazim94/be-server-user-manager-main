import express from "express";

const app = express();

app.use(express.json());

let users = [
  {
    id: 1,
    name: "Jane Austen",
    status: "Ich befinde mich in erträglicher Gesundheit und Stimmung.",
  },
  {
    id: 2,
    name: "Mark Twain",
    status: "Die Berichte über meinen Tod sind stark übertrieben.",
  },
  {
    id: 3,
    name: "Emily Dickinson",
    status: "Sag die Wahrheit, aber sag sie schräg.",
  },
];

app.get("/", (req, res) => {
  res.send("Willkommen auf der Benutzer-API!");
});

app.get("/user", (req, res) => {
  res.json(users);
});

app.get("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const user = users.find((u) => u.id === userId);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Benutzer nicht gefunden" });
  }
});

app.post("/user", (req, res) => {
  const { name, status } = req.body;

  if (!name || !status) {
    return res
      .status(400)
      .json({ message: "Name und Status sind erforderlich" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    status,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

app.patch("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const { status } = req.body;

  const user = users.find((u) => u.id === userId);

  if (user) {
    if (status) {
      user.status = status;
      res.json(user);
    } else {
      res.status(400).json({ message: "Status ist erforderlich" });
    }
  } else {
    res.status(404).json({ message: "Benutzer nicht gefunden" });
  }
});

app.delete("/user/:id", (req, res) => {
  const userId = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === userId);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1);
    res.json({ message: "Benutzer gelöscht", deletedUser: deletedUser[0] });
  } else {
    res.status(404).json({ message: "Benutzer nicht gefunden" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});
