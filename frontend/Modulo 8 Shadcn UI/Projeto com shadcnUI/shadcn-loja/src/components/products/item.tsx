'use client'
import { Product } from "@/types/product"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { ToastAction } from "@radix-ui/react-toast"
import { useCartStore } from "@/stores/cart-store"

type Props = {
    item: Product
}

export const ProductItem = ( { item } : Props) => {
    const { toast } = useToast()
    const { upsertCartItem } = useCartStore(state => state)

    const handleAddButton = () => {
        upsertCartItem(item, 1)
        toast({
            title: 'Adicionado ao carrinho',
            description: item.name,
            action: <ToastAction altText="fechat">Fechar</ToastAction>
        })
    }

    return (
        <div className="rounded-md overflow-hidden">
            <div>
                <img
                src={item.image}
                alt={item.name}
                className="q-full h-32 object-cover" />
            </div>
            <div className="mt-3 flex flex-col gap-2">
                <p className="text-lg">{item.name}</p>
                <p className="text-sm opcity-50">R$ {item.price.toFixed(2)}</p>
                <Button onClick={handleAddButton} variant="outline">Adicionar</Button>
            </div>
        </div>
    )
}