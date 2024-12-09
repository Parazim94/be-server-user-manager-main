# Einfacher Benutzerspeicher

Erstelle einen Benutzerspeicher mit Endpunkten zum Auflisten, Erstellen, Aktualisieren und Löschen von Benutzern.

## Aufgaben

### Aufgabe 1

- Installiere `express` als Abhängigkeit
- Bearbeite die Datei `server.js`, damit der Server auf Port 5000 lauscht

### Aufgabe 2

- Erstelle ein Array von Benutzern zum Speichern im Speicher
- Initialisiere das Array mit einigen Daten, zum Beispiel

```js
const users = [
  {
    id: 1,
    name: "Jane Austen",
    status: "Ich befinde mich in erträglicher Gesundheit und Stimmung.",
  },
];
```

### Aufgabe 3

- Erstelle einen GET `/user` Endpunkt, der das gesamte Array von Benutzern zurückgibt

```json
// Ausgabe für GET /user
[
  {
    "id": 1,
    "name": "Jane Austen",
    "status": "Ich befinde mich in erträglicher Gesundheit und Stimmung."
  }
]
```

### Aufgabe 4

- Erstelle einen GET `/user/:id` Endpunkt für einen einzelnen Benutzer mit der gegebenen ID

> **Hinweis**: Du musst hier die `param`-Eigenschaft verwenden, um den dynamischen Wert von `id` zu erfassen

```json
// Ausgabe für GET /user/1
{
  "id": 1,
  "name": "Jane Austen",
  "status": "Ich befinde mich in erträglicher Gesundheit und Stimmung."
}
```

### Aufgabe 5

- Erstelle einen POST `/user` Endpunkt, der einen Benutzer aus der Anfrage hinzufügt
- Berechne eine neue ID für den Benutzer :)

**Eingabe**

```json
// POST /user
{
  "name": "Daria Morgendorffer",
  "status": "Ich bin eine selektiv fürsorgliche Person."
}
```

**Ausgabe**

```json
{
  "id": 2,
  "name": "Daria Morgendorffer",
  "status": "Ich bin eine selektiv fürsorgliche Person."
}
```

### Aufgabe 6

- Erstelle einen PATCH `/user/:id` Endpunkt
- Dies aktualisiert einen Benutzer basierend auf dem Pfad und dem Anforderungskörper

**Eingabe**

```json
// PATCH /user/2
{
  "status": "Ich bin nicht antisozial. Ich mag nur keine Menschen."
}
```

**Ausgabe**

```json
{
  "id": 2,
  "name": "Daria Morgendorffer",
  "status": "Ich bin nicht antisozial. Ich mag nur keine Menschen."
}
```

### Bonusaufgaben!

- Stelle sicher, dass der PATCH-Endpunkt _nur_ die Bearbeitung des Status erlaubt
- Füge auch einen Endpunkt zur Benutzerlöschung hinzu
- Anstatt Benutzer im Speicher zu speichern, verwende eine Datei ODER eine Datenbank!
