// For TypeScript projects using React 17 or later,
// you no longer need to import React at the top of every file
// due to the new JSX transform.
const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
      {text}
    </button>
  );
};

export default Button;
