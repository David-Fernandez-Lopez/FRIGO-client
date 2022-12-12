import { Container } from "react-bootstrap"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"
import ProfileTab from "../../components/ProfileTab/ProfileTab"
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm"
import '../../components/ProfileHeader/ProfileHeader.css'

const ProfilePage = () => {

    return (
        <Container>
            <ProfileHeader />
            <ProfileTab />
        </Container>
    )
}

export default ProfilePage