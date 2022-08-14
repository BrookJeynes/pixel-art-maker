import { FaPaintBrush, FaEraser, FaBomb } from 'react-icons/fa';

export const returnIcon = (icon: string) => {
  switch (icon) {
    case 'Brush':
      return <FaPaintBrush />;
    case 'Eraser':
      return <FaEraser />;
    case 'Bomb':
      return <FaBomb />; 
    default:
      return null;
  }
}