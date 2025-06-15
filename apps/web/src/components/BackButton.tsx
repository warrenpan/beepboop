interface BackButtonProps {
  onClick: () => void;
}

export const BackButton = ({ onClick }: BackButtonProps) => (
  <button
    onClick={onClick}
    className="absolute top-4 left-4 p-2 text-gray-600 hover:text-gray-800 transition-colors"
  >
    ← Back
  </button>
);