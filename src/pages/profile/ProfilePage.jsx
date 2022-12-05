import { Container } from "react-bootstrap"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"
import ProfileTab from "../../components/ProfileTab/ProfileTab"

const ProfilePage = () => {

    return (
       <Container>

            <ProfileHeader />
            <hr />
            <ProfileTab/>
        </Container>
    )
}

export default ProfilePage