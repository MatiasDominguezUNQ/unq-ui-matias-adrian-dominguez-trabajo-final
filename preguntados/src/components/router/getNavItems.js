import ForYouIcon from '../../assets/ForYouIcon.svg'
import FollowingIcon from '../../assets/FollowingIcon.svg'
import FriendsIcon from '../../assets/FriendsIcon.svg'
import ExploreIcon from '../../assets/ExploreIcon.svg'
import ProfileIcon from '../../assets/ProfileIcon.svg'

export const getNavItems = () => {
    return [
        {linkTo: "/home", section: "for you", iconSrc: ForYouIcon },
        {linkTo: "/following", section: "follow", iconSrc: FollowingIcon },
        {linkTo: "/friends", section: "friends", iconSrc: FriendsIcon },
        {linkTo: "/explore", section: "explore", iconSrc: ExploreIcon },
        {linkTo: "/profile", section: "profile", iconSrc: ProfileIcon },
    ]

}