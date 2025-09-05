import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export interface Game {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  pageLink: string;
  releaseDate: string;
  genre: string;
}

export const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase
        .from("games")
        .select("*")
        .order("releaseDate", { ascending: true });
      if (error) {
        console.error(error);
      } else {
        setGames(data);
      }
    };

    fetchGames();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {games.map((game) => (
        <div
          key={game.id}
          className="border rounded-lg shadow overflow-hidden relative group"
        >
          <Link to={game.pageLink} className="block">
            {/* Image container */}
            <div className="w-full aspect-[4/3] overflow-hidden relative">
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay for description */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center p-4">
                <p className="text-white text-sm">{game.description}</p>
              </div>
            </div>

            {/* Title below image */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-semibold">{game.title}</h2>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};
