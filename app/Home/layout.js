// /app/layout.js
import Navbar from '@/components/Navbar';  // Assuming Navbar is in components folder

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
