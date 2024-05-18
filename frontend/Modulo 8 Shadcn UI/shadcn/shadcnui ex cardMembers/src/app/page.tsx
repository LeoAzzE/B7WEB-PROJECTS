import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ComboboxDemo } from "@/components/ComboboxDemo";

const Page = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
        <Card className="w-[400px] h-[90x]">
          <CardHeader>
            <CardTitle className="text-black font-bold text-xl">Team Members</CardTitle>
            <CardDescription>Invite your team members to collaborate.</CardDescription>
          </CardHeader>
          <CardContent className="">
            <div className="flex">
              <div>
                avatar nome email
              </div>
              <div>
                <ComboboxDemo/>
              </div>
            </div>
          </CardContent>
          <CardContent className="">
            <p>Card Content</p>
          </CardContent>
      </Card>

    </div>
  )
}

export default Page;