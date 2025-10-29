import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Valuable } from './pages/Valuable';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function Placeholder({ title }: { title: string }) {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <h2 className="section-title text-[#262220]/60">{title}</h2>
      <p className="text-[#262220]/60">Coming soon.</p>
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white">
        <Sidebar />
        <div className="ml-[293px] flex min-h-screen flex-col">
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/experiences" element={<Placeholder title="Experiences" />} />
              <Route path="/writing" element={<Placeholder title="Writing" />} />
              <Route path="/valuable" element={<Valuable />} />
              <Route path="/online" element={<Placeholder title="Online" />} />
              <Route path="/contact" element={<Placeholder title="Contact" />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}


