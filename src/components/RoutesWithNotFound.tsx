import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '@/components/NotFoundPage';
import { FC, ReactNode } from 'react';

type RoutesWithNotFoundProps = {
  children: ReactNode
}

const RoutesWithNotFound: FC<RoutesWithNotFoundProps> = ({ children }) => {
  return (
    <Routes>
      {children}
      <Route path="*" element={ <NotFoundPage />} />
    </Routes>
  )
}

export default RoutesWithNotFound;