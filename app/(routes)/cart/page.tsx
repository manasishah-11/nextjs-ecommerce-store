import Container from "@/components/ui/container";

import CartLayout from "./components/cart-layout";

export const revalidate = 0;

const CartPage = () => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <CartLayout />
        </div>
      </Container>
    </div>
  );
  return null;
};

export default CartPage;
