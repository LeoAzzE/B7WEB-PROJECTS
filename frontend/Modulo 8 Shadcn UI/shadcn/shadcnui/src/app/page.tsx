import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <div className="w-full max-w-2xl">
            <Alert variant="destructive">
                Erro
                {/* <Terminal className="h-4 w-4" /> */}
                <AlertTitle>A senha deu errado</AlertTitle>
                <AlertDescription>
                    
                </AlertDescription>
            </Alert>

        </div>
    </div>
  )
}

export default Page;