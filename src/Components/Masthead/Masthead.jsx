import { useAuth0 } from "@auth0/auth0-react"
import LogoutButton from "../Button/LogoutButton";
import LoginButton from "../Button/LoginButton";
import { useEffect, useState } from "react";
import config from "../../utils/config.js";

const Masthead = () => {
    const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

    const [userMetadata, setUserMetadata] = useState(null);

    useEffect(() => {
        const getUserMetadata = async () => {
            const DOMAIN = config.get('AUTH0_DOMAIN');
            try {
                const accessToken = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: `https://${DOMAIN}/api/v2/`,
                        scope: "read:current_user"
                    }
                })
                const userDetailsByIdUrl = `https://${DOMAIN}/api/v2/users/${user.sub}`;
                const metadataResponse = await fetch(userDetailsByIdUrl, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });

                const { user_metadata } = await metadataResponse.json();
                setUserMetadata(user_metadata);
            } catch (err) {
                console.log(err.message);
            }
        };
        getUserMetadata();
    }, [getAccessTokenSilently, user?.sub])

    return <div className="masthead">
        {isLoading ? undefined :
            isAuthenticated ?
                <>
                    <span>Hello, {user.name}</span>
                    <LogoutButton />
                    <span>{userMetadata ? JSON.stringify(userMetadata) : 'No metadata to display'}</span>
                </>
                : <LoginButton />
        }

    </div >
}

export default Masthead;
