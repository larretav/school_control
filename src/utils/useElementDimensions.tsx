import { ReactNode, createElement, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const useElementDimensions = () => {

  // const tempContainer = document.createElement('div');
  // tempContainer.setAttribute('id', 'temp-container')
  // tempContainer.style.position = 'absolute';
  // tempContainer.style.visibility = 'hidden';
  // tempContainer.style.height = 'auto';
  // tempContainer.style.width = '100%';

  const [height, setHeight] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const getElementHeight = (element: JSX.Element) => {

    if (!containerRef.current) return 0;

    const tempContainer = <div ref={containerRef} className='absolute hidden h-auto w-full'>
        {element}
      </div>
      ;

    console.log(tempContainer);

    return containerRef.current?.clientHeight;

  }


  // const tempContainer = createElement('div', { className: 'absolute hidden h-auto w-full' });

  // createPortal(element, tempContainer);

  useEffect(() => {
    setHeight(containerRef.current?.offsetHeight || 0)
  }, [])
  
  return {
    getElementHeight
  };
}