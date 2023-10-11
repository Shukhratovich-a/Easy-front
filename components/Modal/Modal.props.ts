import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  handleClose?: () => void;

  curtain?: "black" | "transparent";

  animation?: "fade" | "swap";
  align?: "center" | "current";
}
