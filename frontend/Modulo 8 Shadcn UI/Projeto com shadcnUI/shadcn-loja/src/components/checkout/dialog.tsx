'use client'
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog"
import { Progress } from "../ui/progress"
import { StepUser } from "./user";
import { StepFinish } from "./finish";
import { StepAddress } from "./address";
import { CheckoutSteps } from "@/types/checkout-steps";

type Props = {
    open: boolean;
    onOpenChange:  (open : boolean) => void
}


export const CheckoutDialog = ({open, onOpenChange} : Props) => {
    const [step, setStep] = useState<CheckoutSteps>('user')
    let progressPct = 0
    switch(step) {
        case 'user': 
            progressPct = 30
        case 'address': 
            progressPct = 70
        case 'finish': 
            progressPct = 100
            break
    }
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        {step === 'user' && 'Dados Pessoais'}
                        {step === 'address'&& 'Dados Pessoais'}
                        {step === 'finish' && 'Envio para o Whatszap'}
                    </DialogTitle>
                </DialogHeader>
                <Progress value={progressPct}/>
                <div className="flex flex-col gap-3">
                    {step === 'user' && <StepUser setStep={setStep} />}
                    {step === 'address' && <StepAddress setStep={setStep} />}
                    {step === 'finish' && <StepFinish />}
                </div>
            </DialogContent>
        </Dialog>
    )
}