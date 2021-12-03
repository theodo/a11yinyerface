import Dialog from "@reach/dialog";
import { ReactNode } from "react";
import "@reach/dialog/styles.css";
import styles from "./Modal.module.css";
import VisuallyHidden from "@reach/visually-hidden";

interface Props {
  children: ReactNode;
  isOpen: boolean;
  onClose?: () => void;
}

export const Modal: React.FC<Props> = ({ children, isOpen, onClose }) => (
  <Dialog isOpen={isOpen} onDismiss={onClose} className={styles.modal}>
    <button className={styles.closeButton} onClick={onClose}>
      {" "}
      <VisuallyHidden>Close</VisuallyHidden> <span aria-hidden>×</span>{" "}
    </button>

    {children}
  </Dialog>
);
