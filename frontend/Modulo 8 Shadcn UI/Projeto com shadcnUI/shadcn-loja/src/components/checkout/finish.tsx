import { useCheckoutStore } from "@/stores/checkout-stores"
import Link from "next/link"
import { Button } from "../ui/button"
import { generateMessage } from "@/lib/generate-message"

export const StepFinish = () => {
    const {name} = useCheckoutStore(state => state)
    const message = generateMessage();
    const linkZap = `https://wa.me//21988647619?text=${encodeURI(message)}`

    return (
        <div className="text-center flex flex-col gap-5">
            <p>Perfeito <strong>{name}</strong>!</p>
            <p>Agora envie seu pedido para o nosso whatsApp para concluir. Nosso atendente ira te guiar para concluir o pedido</p>
            <Button>
                <Link href={linkZap} target="_blank">Enviar para o Whatszap</Link>
            </Button>
        </div>
    )
}