import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import IdentitySection from "@/components/identity/IdentitySection";
import ThinkingSection from "@/components/thinking/ThinkingSection";
import ArchitectureSection from "@/components/architecture/ArchitectureSection";
import CapabilitiesSection from "@/components/capabilities/CapabilitiesSection";
import WorkSection from "@/components/work/WorkSection";
import WritingSection from "@/components/writing/WritingSection";
import ContactSection from "@/components/contact/ContactSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <HeroSection />
        <IdentitySection />
        <ThinkingSection />
        <ArchitectureSection />
        <CapabilitiesSection />
        <WorkSection />
        <WritingSection />
        <ContactSection />
      </main>
      <footer className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
        © 2026 이규찬 · MSA Architecture Portfolio
      </footer>
    </div>
  );
}
