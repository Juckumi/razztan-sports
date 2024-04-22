import { getUser } from "../api/userApi"

function UserProfilePic() {
    const user = getUser()

    console.log(user)
    return (
        <img style={{borderRadius:'130rem',objectFit: 'cover', width:'4.5rem',height:'4.5rem'}}src={user.profilePicture} alt="profile-pic-razztan-sports"  />
    )
}

export default UserProfilePic
