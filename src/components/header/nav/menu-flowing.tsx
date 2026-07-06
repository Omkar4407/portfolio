"use client";
import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { links } from "@/components/header/config";

// Dynamically import FlowingMenu to avoid SSR issues
const FlowingMenu = dynamic(() => import("@/components/ui/FlowingMenu"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-neutral-600 dark:text-neutral-400 text-lg">Loading Menu...</div>
    </div>
  ),
});

interface MenuFlowingProps {
  setIsActive: (isActive: boolean) => void;
}

const MenuFlowing: React.FC<MenuFlowingProps> = ({ setIsActive }) => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Transform navigation links to FlowingMenu format
  const menuItems = links.map((link) => ({
    link: link.href,
    text: link.title,
    image: link.thumbnail,
  }));

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const linkElement = target.closest('a');
      
      if (linkElement) {
        e.preventDefault();
        e.stopPropagation();
        
        const href = linkElement.getAttribute('href');
        
        if (href) {
          // Close menu first
          setIsActive(false);
          
          // Navigate after a short delay for smooth transition
          setTimeout(() => {
            if (href.startsWith('/#')) {
              // For anchor links, smooth scroll
              const element = document.querySelector(href.slice(1));
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            } else if (href === '/') {
              // For home, scroll to top
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              // For regular links, use router
              router.push(href);
            }
          }, 300);
        }
      }
    };

    // Attach click handler after a short delay to ensure DOM is ready
    const timer = setTimeout(() => {
      const menuWrap = containerRef.current?.querySelector('.menu-wrap');
      if (menuWrap) {
        menuWrap.addEventListener('click', handleClick as EventListener, true);
      }
    }, 100);

    // Cleanup
    return () => {
      clearTimeout(timer);
      const menuWrap = containerRef.current?.querySelector('.menu-wrap');
      if (menuWrap) {
        menuWrap.removeEventListener('click', handleClick as EventListener, true);
      }
    };
  }, [router, setIsActive]);

  return (
    <div ref={containerRef} className="w-full h-full flex items-stretch" style={{ minHeight: "100vh" }}>
      <FlowingMenu 
        items={menuItems} 
        speed={15}
        textColor="#ffffff"
        bgColor="transparent"
        marqueeBgColor="#ffffff"
        marqueeTextColor="#000000"
        borderColor="rgba(255, 255, 255, 0.2)"
      />
    </div>
  );
};

export default MenuFlowing;
