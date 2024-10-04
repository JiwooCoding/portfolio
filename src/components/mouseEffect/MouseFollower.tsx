import { useState, useEffect } from 'react';


const MouseFollower: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
    
    return (
        <div>
            {/* 마우스를 따라다니는 이미지 */}
            {mousePosition && (
            <div
            className="absolute w-4 h-4 bg-purple-500 rounded-full"
            style={{ left: mousePosition.x, top: mousePosition.y}}
          ></div>
            )}
        </div>
    );
};

export default MouseFollower;