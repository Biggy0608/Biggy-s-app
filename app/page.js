"use client";

import { useEffect, useState } from "react";

export default function GameCollectionApp() {
  const [collection, setCollection] = useState([]);
  const [form, setForm] = useState({
    title: "",
    platform: "",
    type: "game",
    pricePaid: "",
    estimatedValue: "",
    notes: "",
  });

  // Charger depuis le localStorage au démarrage
  useEffect(() => {
    const saved = localStorage.getItem("biggys-collection");
    if (saved) {
      setCollection(JSON.parse(saved));
    }
  }, []);

  // Sauvegarder à chaque changement
  useEffect(() => {
    localStorage.setItem("biggys-collection", JSON.stringify(collection));
  }, [collection]);

  const handleAdd = () => {
    if (!form.title || !form.platform) return;
    setCollection([...collection, { ...form, id: Date.now() }]);
    setForm({ title: "", platform: "", type: "game", pricePaid: "", estimatedValue: "", notes: "" });
  };

  return (
    <main className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">Biggy's App - Collection jeux & consoles</h1>

      <div className="space-y-2 bg-white p-4 rounded-xl shadow">
        <input
          className="w-full border p-2 rounded"
          placeholder="Titre"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Plateforme (ex: PS2, Switch)"
          value={form.platform}
          onChange={(e) => setForm({ ...form, platform: e.target.value })}
        />
        <select
          className="w-full border p-2 rounded"
          value={form.type}
          onChange={(e) => setForm({ ...form, type: e.target.value })}
        >
          <option value="game">Jeu</option>
          <option value="console">Console</option>
        </select>
        <input
          className="w-full border p-2 rounded"
          placeholder="Prix payé (€)"
          type="number"
          value={form.pricePaid}
          onChange={(e) => setForm({ ...form, pricePaid: e.target.value })}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Valeur estimée (€)"
          type="number"
          value={form.estimatedValue}
          onChange={(e) => setForm({ ...form, estimatedValue: e.target.value })}
        />
        <textarea
          className="w-full border p-2 rounded"
          placeholder="Notes, souvenirs..."
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />
        <button onClick={handleAdd} className="w-full bg-blue-600 text-white py-2 rounded">Ajouter</button>
      </div>

      <div className="space-y-2">
        {collection.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded shadow">
            <div className="font-semibold">{item.title} ({item.platform})</div>
            <div className="text-sm">Type : {item.type}</div>
            {item.pricePaid && <div className="text-sm">Payé : {item.pricePaid} €</div>}
            {item.estimatedValue && <div className="text-sm">Estimation : {item.estimatedValue} €</div>}
            {item.notes && <div className="text-sm italic">{item.notes}</div>}
          </div>
        ))}
      </div>
    </main>
  );
}
