// src/components/SearchBar.tsx
"use client";
import { useState } from "react";
import TextInput from "../FormFields/TextInput";
// import TextInput from "./TextInput";

type Props = {
  onSearch: (city: string) => void;
};

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim());
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2 items-center justify-center mb-4"
    >
      <div className="w-[300px]">
        <TextInput
          placeholder="Enter city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
      >
        Search
      </button>
    </form>
  );
}
