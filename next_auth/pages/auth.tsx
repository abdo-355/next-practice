import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

import AuthForm from "@/components/Auth/AuthForm";

const AuthPage = () => {
    const [loading, setLoading] = useState(true);
    const router = useRouter()

    useEffect(() => {
        getSession().then(session => {
            if (session) {
                router.replace("/");
            } else {
                setLoading(false);
            }
        })
    }, [router]);


    if (loading) {
        return <div>Loading...</div>
    }

    return <AuthForm />;
}

export default AuthPage;