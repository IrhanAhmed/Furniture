import Link from "next/link";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="relative flex flex-col items-center p-4 shadow-md">

      <div className="absolute top-4 left-4">
        <button aria-label="Search">🔍</button>
      </div>
      <div className="absolute top-4 right-16 flex gap-4">
        <button aria-label="User Account">👤</button>
        <button aria-label="Shopping Cart">🛒</button>
      </div>

  
      <div className="text-2xl mb-4">Avion</div>

      
      <nav className="hidden md:flex gap-11 text-center mb-4 text-gray-600">
      <Link href="/CardSection">CardSection</Link>
        <Link href="/plant-pots">Plant pots</Link>
        <Link href="/ceramics">Ceramics</Link>
        <Link href="/tables">Tables</Link>
        <Link href="/chairs">Chairs</Link>
        <Link href="/crockery">Crockery</Link>
        <Link href="/tableware">Tableware</Link>
        <Link href="/cutlery">Cutlery</Link>
        <Link href="/all-product">All Products</Link>
      </nav>

      <Sheet>
        
        <SheetTrigger className="block md:hidden absolute top-4 right-4 cursor-pointer">
          <div>
      
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-600"></div>
          </div>
        </SheetTrigger>

  
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Welcome! Avion</SheetTitle>
            <SheetDescription>Choose a category to explore</SheetDescription>
          </SheetHeader>

        
          <nav className="mt-4 flex flex-col gap-4 text-center text-gray-600">
          <Link href="/CardSection">CardSection</Link>
            <Link href="/plant-pots" className="hover:text-gray-800 transition">Plant pots</Link>
            <Link href="/ceramics" className="hover:text-gray-800 transition">Ceramics</Link>
            <Link href="/tables" className="hover:text-gray-800 transition">Tables</Link>
            <Link href="/chairs" className="hover:text-gray-800 transition">Chairs</Link>
            <Link href="/crockery" className="hover:text-gray-800 transition">Crockery</Link>
            <Link href="/tableware" className="hover:text-gray-800 transition">Tableware</Link>
            <Link href="/cutlery" className="hover:text-gray-800 transition">Cutlery</Link>
          </nav>
          
        
          <div className="mt-4 text-center">
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition">
              Close Modal
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

export default Header;
