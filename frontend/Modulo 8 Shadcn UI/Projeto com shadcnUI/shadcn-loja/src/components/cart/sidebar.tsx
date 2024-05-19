import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { RocketIcon } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button>
                    <RocketIcon className="mr-2"/>
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Carrinho
                    </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col gap-5 my-3">
                    ...
                </div>
                <Separator className="mt-4"/>
                <div className="flex justify-between items-center text-xs">
                    <div>Subtotal:</div>
                    <div>...</div>
                </div>
                <Separator className="mt-4"/>
                <div className="text-center">
                    <button>Finalizar Compra</button>
                </div>
            </SheetContent>
        </Sheet>
    )
}