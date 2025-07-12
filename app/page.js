"use client";

import { useState } from "react";

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

  const handleAdd = () => {
    if (!form.title || !form.platform) return;
    setCollection([...collection, { ...form, id: Date.now() }]);
    setForm({
      title: "",
      platform: "",
      type: "game",
      pricePaid: "",
      estimatedValue: "",
      notes: "",
    });
  };

  return (
    <div className="p-4 max-w-xl mx-auto space-y-4">
      <h1 className="text-xl font-bold text-center">Biggy's App – Collection jeux & consoles</h1>

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
          type
