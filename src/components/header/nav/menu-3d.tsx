"use client";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { links } from "@/components/header/config";

// Dynamically import InfiniteMenu to avoid SSR issues
const InfiniteMenu = dynamic(() => import("@/components/ui/InfiniteMenu"), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full">
      <div className="text-neutral-600 dark:text-neutral-400 text-lg">Loading Navigation...</div>
    </div>
  ),
});

interface Menu3DProps {
  setIsActive: (isActive: boolean) => void;
}

const Menu3D: React.FC<Menu3DProps> = ({ setIsActive }) => {
  const router = useRouter();
  const [menuKey, setMenuKey] = useState(0);
  
  // Transform navigation links to InfiniteMenu format
  const menuItems = links.map((link) => ({
    image: link.thumbnail,
    link: link.href,
    title: link.title,
    description: link.title,
  }));

  // Override the default click behavior to navigate and close menu
  useEffect(() => {
    const handleNavigation = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest('.action-button');
      
      if (button) {
        // Find which menu item was clicked by checking the active item
        const activeTitle = document.querySelector('.face-title.active');
        if (activeTitle) {
          const title = activeTitle.textContent;
          const link = links.find(l => l.title === title);
          
          if (link) {
            e.preventDefault();
            e.stopPropagation();
            
            // Navigate to the link
            if (link.href.startsWith('/#')) {
              // For anchor links, smooth scroll
              const element = document.querySelector(link.href.slice(1));
              if (element) {
                setIsActive(false); // Close menu first
                setTimeout(() => {
                  element.scrollIntoView({ behavior: 'smooth' });
                }, 300);
              }
            } else {
              // For regular links
              router.push(link.href);
              setIsActive(false);
            }
          }
        }
      }
    };

    document.addEventListener('click', handleNavigation, true);
    
    return () => {
      document.removeEventListener('click', handleNavigation, true);
    };
  }, [router, setIsActive]);

  return (
    <div className="w-full h-full relative" style={{ minHeight: "70vh" }}>
      <InfiniteMenu key={menuKey} items={menuItems} scale={0.7} />
      
      {/* Instructions overlay */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-sm text-neutral-500 dark:text-neutral-400 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full">
          Drag to rotate • Click to navigate
        </p>
      </div>
    </div>
  );
};

export default Menu3D;
