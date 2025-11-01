import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"

const LoginPage = () => {
    return (
        <div className="flex flex-col items-center justify-between h-dvh font-geist py-4">
            <Link className="text-xl font-bold tracking-tighter">thiscuz</Link>

            <div className="flex flex-col items-center gap-4 w-full">
                <div className="text-center max-w-xs">
                    <p className="text-3xl font-bold tracking-tighter">Welcome Back!</p>
                    <p className="text-muted-foreground">Enter your credentials to continue.</p>
                </div>

                <form className="space-y-4 w-full max-w-sm">
                    <div className="flex flex-col gap-2">
                        <Label className="text-base">Email</Label>
                        <Input placeholder="johndoe@dis.do" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label className="text-base">Password</Label>
                        <Input placeholder="password123" type="password" />
                    </div>
                    <Button className="w-full">Login</Button>
                </form>
            </div>

            <footer>
                footer
            </footer>
        </div>
    )
}

export default LoginPage