import Head from "next/head";
import Image from "next/image";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import NoConnection from "../../components/common/NoConnection";
import { useRouter } from "next/router";

import { Toast, ToastContainer } from "react-bootstrap";

import React, {
  useState,
  forwardRef,
  useRef,
  useEffect,
  useImperativeHandle,
} from "react";

// import Api from "@/service/Api";
import { useAppState, useAppDispatch } from "../../context/AppProvider";
// import { Cookie } from "@/utils/common";

const Layout = forwardRef((props, ref) => {
  const router = useRouter();

  const {
    children,
    title,
    description = "",
    className = null,
    theme = null,
    header = true,
    footer = true,
    cart = true,
    menu = true,
    loginButton = true,
  } = props;

//   const dispatch = useAppDispatch();
//   const { user } = useAppState();

  const [error, setError] = useState(null);
  const [errorType, setErrorType] = useState("danger");

  // useEffect(() => {
  // 	_getUser();
  // }, [])

  // useEffect(() => {
  // 	if (router.isReady && !Cookie.get('user_country_code')) {
  // 		_getLocale()
  // 	}
  // }, [router.isReady])

  useImperativeHandle(
    ref,
    () => ({
      notify: {
        error: (message) => {
          setError(message);
          setErrorType("danger");
        },
        success: (message) => {
          setError(message);
          setErrorType("success");
        },
      },
    }),
    []
  );

  // const _getUser = async() => {
  // 	try {
  // 		const result = await Api.getUser()
  // 		dispatch({ type: 'LOGIN_SUCCESS', payload: {user: result?.user ?? null} });
  // 	} catch (error) {
  // 		console.log('_getUser::error:: ', error)
  // 	}
  // }

  // const _getLocale = async() => {
  // 	try {
  // 		const result = await Api.getLocale({
  // 			code: router?.query?.slug
  // 		})
  // 		for (const [key, value] of Object.entries(result)) {
  // 			Cookie.set(key, value)
  // 		}
  // 		dispatch({ type: 'UPDATE_LOCALE', payload: {locale: result} });
  // 	} catch (error) {
  // 		console.log('_getLocale::error:: ', error)
  // 	}
  // }

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description || ""} />
        {/* {process.env.NODE_ENV !== 'production' && <meta name="robots" content="noindex" />} */}
      </Head>

      {header && (
        <Header
          theme={theme ?? ""}
          cart={cart}
          menu={menu}
          loginButton={loginButton}
        />
      )}

      <main className={className ?? ""}>
        {children}
        {NoConnection && <NoConnection />}

        <ToastContainer
          ref={ref}
          position="top-end"
          className="p-3"
          containerPosition="fixed"
          style={{
            zIndex: 999999,
          }}
        >
          <Toast
            bg={errorType}
            autohide={true}
            delay={3000}
            show={error && error.length > 0}
            onClose={() => setError(null)}
          >
            <Toast.Body className="text-light">{error}</Toast.Body>
          </Toast>
        </ToastContainer>
      </main>

      {footer && <Footer />}
    </div>
  );
});

export default Layout;
