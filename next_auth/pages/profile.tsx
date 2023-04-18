import { GetServerSideProps } from "next";
import { getSession } from "next-auth/react";

import UserProfile from "@/components/Profile/UserProfile";

const ProfilePage = () => {
    return <UserProfile />;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession({ req: context.req });

    if (!session) {
        return {
            redirect: {
                destination: "/auth",
                permanent: false,
            },
        };
    }

    return {
        props: {}
    }
}

export default ProfilePage;