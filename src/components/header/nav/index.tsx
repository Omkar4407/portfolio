import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./style.module.scss";
import { height } from "../anim";
import Body from "./body/body";
import Footer from "./footer/footer";
import Image from "./image/image";
import MenuFlowing from "./menu-flowing";

import { links } from "@/components/header/config";
import { cn } from "@/lib/utils";

interface IndexProps {
  setIsActive: (isActive: boolean) => void;
}

interface SelectedLinkState {
  isActive: boolean;
  index: number;
}

const Index: React.FC<IndexProps> = ({ setIsActive }) => {
  const [selectedLink, setSelectedLink] = useState<SelectedLinkState>({
    isActive: false,
    index: 0,
  });
  
  // Toggle between 2D and FlowingMenu (set to true for FlowingMenu)
  const useFlowingMenu = true;

  return (
    <motion.div
      variants={height}
      initial="initial"
      animate="enter"
      exit="exit"
      className={styles.nav}
    >
      {useFlowingMenu ? (
        // FlowingMenu
        <div className="w-full h-full flex items-center justify-center">
          <MenuFlowing setIsActive={setIsActive} />
        </div>
      ) : (
        // Original 2D Menu
        <div className={cn(styles.wrapper, 'flex justify-end sm:justify-start')}>
          <div className={styles.container}>
            <Body
              links={links}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
              setIsActive={setIsActive}
            />
            {/* <Footer /> */}
          </div>
          <Image
            src={links[selectedLink.index].thumbnail}
            isActive={selectedLink.isActive}
          />
        </div>
      )}
    </motion.div>
  );
};

export default Index;
