import { Input } from "@/components/auth/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Link } from "@inertiajs/react"
import { useForm } from "@inertiajs/react"
import { useCallback, useState } from "react"
import { Or } from "@/components/ui/or"
import { Mail } from "lucide-react"

const LoginPage = () => {
    const [status, setStatus] = useState({})
    const [errors, setErrors] = useState([])
    const { data, setData } = useForm({
        email: "",
        password: ""
    })

    const handleLogin = useCallback(async (e) => {
        e.preventDefault()

        setStatus({ loading: true })

        const { email, password } = data

        try {
            const response = await fetch("http://localhost:8000/api/login", {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email, password }),
                credentials: "include"
            })

            const result = await response.json()

            if (result.errors) {
                setErrors(result.errors)
            }

            console.log(result)
        } catch (error) {
            console.error(error)
        } finally {
            setStatus({ loading: false })
        }

    })

    return (
        <div className="flex flex-col items-center justify-between h-dvh font-geist py-4">
            <Link className="text-xl font-bold tracking-tighter">thiscuz</Link>

            <div className="flex flex-col items-center gap-6 w-sm">
                <div className="text-center max-w-xs">
                    <p className="text-3xl font-bold tracking-tighter">Welcome back!</p>
                    <p className="text-muted-foreground">Enter your credentials to continue.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-4 w-full">
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-2">
                            <Label className="text-base">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                placeholder="johndoe@dis.do"
                                onChange={(e) => setData("email", e.target.value)}
                            />
                        </div>
                        {errors && errors?.email?.map((err, idx) => (
                            <span key={idx} className="text-red-600 text-sm">{err}</span>
                        ))}
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex flex-col gap-2">
                            <Label className="text-base">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                placeholder="mysecurepassword123"
                                type="password"
                                onChange={(e) => setData("password", e.target.value)}
                            />
                        </div>
                        {errors && errors?.password?.map((err, idx) => (
                            <span key={idx} className="text-red-600 text-sm">{err}</span>
                        ))}
                    </div>
                    <Button disabled={status.loading} className="w-full py-6 font-medium text-base">
                        {status.loading ? "Logging in..." : "Login"}
                    </Button>
                </form>

                <Or />

                <Button className="w-full py-6 text-base font-medium" variant="outline" asChild>
                    <Link href="/register">
                        <Mail />
                        Create new email account
                    </Link>
                </Button>
            </div>

            <footer>
                footer
            </footer>
        </div>
    )
}

export default LoginPage