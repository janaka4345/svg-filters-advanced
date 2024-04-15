'use client'
import { useEffect, useRef } from 'react';
import Background from '../../public/background.svg'
export default function Home() {
  const svgRef = useRef()
  useEffect(() => {
    console.log(svgRef);
    
  
    return () => {
      
    }
  }, [])
  
  return (
    <div>
      <Background ref={svgRef}/>
    </div>
  );
}
