import { Outlet } from 'react-router-dom';

export default function ServicesLayout() {
  return (
    <div className="min-h-screen bg-[#15173D] text-[#f1e9e9]">
      <div className="px-10 py-20 max-w-7xl mx-auto">
        <Outlet />
      </div>
    </div>
  );
}
