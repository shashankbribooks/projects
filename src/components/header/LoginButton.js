import { Button, Dropdown } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import { useAppState, useAppDispatch } from "../../context/AppProvider";
// import { Config } from '@/config'
// import Api from '@/service/Api'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const LoginButton = (props) => {
//   const dispatch = useAppDispatch();
//   const { user } = useAppState();

  const router = useRouter();

  const _logout = async () => {
    try {
      await Api.logout();

      dispatch({ type: "LOGOUT", payload: { user } });
      dispatch({
        type: "UPDATE_BOOK",
        payload: {
          book: null,
        },
      });
      router.replace("https://www.bribooks.com/login");
    } catch (error) {
      console.log("logout::error:: ", error);
    }
  };

//   if (user?.id) {
//     return (
//       <Dropdown align="end" className="login-dropdown">
//         <Dropdown.Toggle variant="outline-success" className="login-button">
//           <span
//             style={{
//               width: 30,
//               height: 30,
//             }}
//           >
//             <Image
//               src={
//                 user?.image
//                   ? Config.IMGURL + "public/" + user?.image
//                   : "/assets/images/Common/author.png"
//               }
//               height={30}
//               width={30}
//               alt="BriBooks User"
//               className="rounded-circle"
//             />
//           </span>
//           <span className="font-normal ms-1">{user?.name}</span>
//         </Dropdown.Toggle>
//         <Dropdown.Menu>
//           <Link legacyBehavior href="https://www.bribooks.com/account/profile">
//             <a className="dropdown-item">
//               <FontAwesomeIcon
//                 // icon={SolidIcons.faUserCircle}
//                 className="text-primary icon"
//               />{" "}
//               My Profile
//             </a>
//           </Link>
//           {user?.role === "editor" && (
//             <Link legacyBehavior href="/editor">
//               <a className="dropdown-item">
//                 <FontAwesomeIcon
//                 //   icon={SolidIcons.faFile}
//                   className="text-primary icon"
//                 />{" "}
//                 Reviewer Panel
//               </a>
//             </Link>
//           )}
//           <Link legacyBehavior href="https://www.bribooks.com/account/mybooks">
//             <a className="dropdown-item">
//               <FontAwesomeIcon
//                 // icon={SolidIcons.faBook}
//                 className="text-primary icon"
//               />{" "}
//               My Books
//             </a>
//           </Link>
//           <Link legacyBehavior href="https://www.bribooks.com/account/myorders">
//             <a className="dropdown-item">
//               <FontAwesomeIcon
//                 // icon={SolidIcons.faShoppingBag}
//                 className="text-primary icon"
//               />{" "}
//               My Orders
//             </a>
//           </Link>
//           <Link
//             legacyBehavior
//             href="https://www.bribooks.com/account/myearnings"
//           >
//             <a className="dropdown-item">
//               <FontAwesomeIcon
//                 // icon={SolidIcons.faSackDollar}
//                 className="text-primary icon"
//               />{" "}
//               My Earnings
//             </a>
//           </Link>
//           <Link legacyBehavior href="https://www.bribooks.com/account/setting">
//             <a className="dropdown-item">
//               <FontAwesomeIcon
//                 // icon={SolidIcons.faGear}
//                 className="text-primary icon"
//               />{" "}
//               Setting
//             </a>
//           </Link>
//           {/*<Link legacyBehavior  href="/account/subscription">
// 						<a className="dropdown-item">
// 							<FontAwesomeIcon
// 								icon={SolidIcons.faWallet}
// 								className="text-primary icon"
// 							/> My Subscriptions
// 						</a>
// 					</Link>*/}
//           <Dropdown.Item onClick={_logout}>
//             <FontAwesomeIcon
//             //   icon={SolidIcons.faSignOutAlt}
//               className="text-primary icon"
//             />{" "}
//             Logout
//           </Dropdown.Item>
//         </Dropdown.Menu>
//       </Dropdown>
//     );
//   }

  let loginUrl = "https://www.bribooks.com/login";

  if (props.back) {
    loginUrl += "?back=" + props.back;
  }

  return (
    <Link legacyBehavior href={loginUrl}>
      <a className="login-button">Login/Signup</a>
    </Link>
  );
};

LoginButton.propTypes = {
  back: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
};

LoginButton.defaultProps = {
  back: false,
};

export default LoginButton;
