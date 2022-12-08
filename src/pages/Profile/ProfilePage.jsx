import { Container } from "react-bootstrap"
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader"
import ProfileTab from "../../components/ProfileTab/ProfileTab"
import NewRecipeForm from "../../components/NewRecipeForm/NewRecipeForm"

const ProfilePage = () => {

    return (
        <Container>

            <ProfileHeader />
            <ProfileTab />
            <NewRecipeForm />
        </Container>
    )
}

export default ProfilePage