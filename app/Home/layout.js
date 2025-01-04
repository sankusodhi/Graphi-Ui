// /app/layout.js
import Navibar from '@/components/Navibar';  // Assuming Navbar is in components folder

export default function Layout({ children }) {
  return (
    <div>
      <Navibar />
      <main>{children}</main>
    </div>
  );
}
