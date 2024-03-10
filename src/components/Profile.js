import { useAuth0 } from "@auth0/auth0-react";
import MainPage from "../MainPage";
const Profile = ()=>{
    const {user,isAuthenticated} = useAuth0();

    return(
        isAuthenticated && (
            <MainPage username={user.given_name} />
            // <article>
            //     {JSON.stringify(user)}
            // </article>
        )
       
    )
}

export default Profile