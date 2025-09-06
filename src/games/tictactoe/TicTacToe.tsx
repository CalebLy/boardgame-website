export const TicTacToe = () => {
  return (
<div className="flex items-center justify-center min-h-screen ">
  {/* Outer play area */}
  <div className="p-20 border-4 border-gray-800 rounded-lg bg-gray-500 shadow-lg">
    {/* Tic Tac Toe board */}
    <div className="w-64 h-64 grid grid-cols-3 grid-rows-3 ">
      {[...Array(9)].map((_, i) => (
        <div
          key={i}
          className="flex items-center justify-center border border-black text-4xl font-bold hover:bg-gray-200 cursor-pointer"
        >
          {/* X or O goes here */}
        </div>
      ))}
    </div>
  </div>
</div>

  );
};
