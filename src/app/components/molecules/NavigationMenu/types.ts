export type NavigationMenuProps = {
  handleCloseMenu: () => void;
  handleLogout?: () => void;
  isMenuOpen: boolean;
  routes: { name: string; path: string }[];
};
