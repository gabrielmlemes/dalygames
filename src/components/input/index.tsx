"use client";
import { FormEvent, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useRouter } from "next/navigation";

const Input = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (input === "") {
      return;
    }

    router.push(`/game/search/${input}`);

  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full bg-slate-200 rounded-lg p-2 my-5 gap-2 justify-between"
    >
      <input
        type="text"
        placeholder="Procurando algum jogo?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="bg-slate-200 outline-none w-11/12"
      />

      <button type="submit">
        <FiSearch size={24} color="#ea580c" />
      </button>
    </form>
  );
};

export default Input;
