
import { Link } from "react-router-dom";
import { ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import CartDrawer from "@/components/CartDrawer";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  const { totalItems } = useCart();
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <div className="flex items-center space-x-4 lg:space-x-6">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link to="/">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/products">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Products
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link to="/cart">
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Cart
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        {isAuthenticated ? (
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium">Hi, {user?.name}</span>
            <button 
              onClick={logout}
              className="text-sm font-medium hover:text-green-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <Link to="/auth" className="flex items-center space-x-1">
            <User size={18} />
            <span className="text-sm font-medium">Sign In</span>
          </Link>
        )}

        <Sheet>
          <SheetTrigger asChild>
            <button className="relative">
              <ShoppingCart size={22} />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </SheetTrigger>
          <SheetContent>
            <CartDrawer />
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
