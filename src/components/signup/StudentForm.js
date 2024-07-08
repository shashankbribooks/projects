import React, { useRef, useState, useEffect, useCallback } from "react";
import { Inter } from "next/font/google";
import Select from "react-select";
import { Row, Col, Form, Stack, Button, Spinner } from "react-bootstrap";
import styles from "./student.module.css";
import PhoneInput from "react-phone-input-2";
// import OtpInput from "@/components/otp/OtpInput";
import { isMobile } from "react-device-detect";
// import Timer from "@/components/otp/Timer";
// import Api from "@/service/Api";
// import { useAppState, useAppDispatch } from "@/context/AppProvider";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { useRouter } from "next/router";
// import ErrorToast from "@/components/common/ErrorToast";

const inter = Inter({
  weight: ["200", "300", "400", "500", "600"],
  subsets: ["latin"],
});

const StudentForm = () => {
  const captchaToken = useRef();
  const otpRef = useRef(null);
  const formRef = useRef();

  // const dispatch = useAppDispatch();
  const router = useRouter();
  // const { captcha } = useAppState();

  const [timerCompleted, setTimerCompleted] = useState(true);
  const [countryCode, setCountryCode] = useState("us");
  const [otp, setOtp] = useState("");
  const [timerRefersh, setTimerRefersh] = useState(false);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [schools, setSchools] = useState([]);
  const [input, setInput] = useState({});
  const [cityLoading, setCityLoading] = useState(false);
  const [formLoading, setFormLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [schoolLoading, setSchoolLoading] = useState(false);
  const [showOtpBox, setShowOtpBox] = useState(false);
  const [edit, setEdit] = useState(true);
  const [captchaCall, setCaptchaCall] = useState(false);
  const [refreshReCaptcha, setRefreshReCaptcha] = useState(false);
  const [errorMessage, setErrorMessage] = useState({});
  const [errorType, setErrorType] = useState("danger");
  const [error, setError] = useState(null);
  const [leadId, setLeadId] = useState("");
  const [validated, setValidated] = useState(false);

  const grades = [
    { name: "1" },
    { name: "2" },
    { name: "3" },
    { name: "4" },
    { name: "5" },
    { name: "6" },
    { name: "7" },
    { name: "8" },
    { name: "9" },
    { name: "10" },
    { name: "11" },
    { name: "12" },
    { name: "13" },
  ];

  const designation = [
    { name: "Class Teacher", value: "class_teacher" },
    { name: "English Teacher", value: "english_teacher" },
    { name: "Librarian", value: "librarian" },
  ];

  useEffect(() => {
    _getLocale();
  }, []);

  useEffect(() => {
    input?.country_id && _getStates();
  }, [input?.country_id]);

  useEffect(() => {
    input?.state_id && _getCities();
  }, [input?.state_id]);

  useEffect(() => {
    input?.city_id && _getSchools();
  }, [input?.city_id]);

  useEffect(() => {
    showOtpBox && otpRef.current.focus();
  }, [showOtpBox]);

  // for captcah reload after 2 mins
  useEffect(() => {
    //Implementing the setInterval method
    const interval = setInterval(() => {
      setCaptchaCall(!captchaCall);
    }, 120000);

    //Clearing the interval
    return () => clearInterval(interval);
  }, [captchaCall]);

  const _getLocale = async () => {
    try {
      const result = await Api.getLocale({
        code: router?.query?.slug,
      });
      const country_code =
        result?.user_country_code == "fi" ? "gb" : result?.user_country_code;
      _getCountries(country_code);
      setCountryCode(country_code);
    } catch (error) {
      console.log("_getLocale::error:: ", error);
    }
  };

  const _getCountries = async (code) => {
    try {
      const result = await Api.getCountries({});
      result?.countries && setCountries(result.countries);
      setInput({
        country_id: result?.countries?.find((item) => item.code === code)?.id,
      });
      setFormLoading(false);
    } catch (error) {
      setFormLoading(false);
      console.log("_getCountries::error:: ", error);
    }
  };

  const _getStates = async () => {
    try {
      const result = await Api.getStates({
        country_id: input?.country_id,
      });
      result?.states && setStates(result.states);
    } catch (error) {
      console.log("_getStates::error:: ", error);
    }
  };

  const _getCities = async () => {
    setCityLoading(true);

    try {
      const result = await Api.getCities({
        state_id: input?.state_id ?? 0,
      });
      result?.cities && setCities(result.cities);
      setCityLoading(false);
    } catch (error) {
      console.log("_getCities::error:: ", error);
      setCityLoading(false);
    }
  };

  const _getSchools = async () => {
    setSchoolLoading(true);

    try {
      const result = await Api.getSchools({
        state_id: input?.state_id ?? 0,
        city_id: input?.city_id ?? 0,
        // site_code: "ge-NYAFUK",
        institute_type: 1,
      });

      result?.schools &&
        setSchools([
          { id: "0", name: "Independent Teacher" },
          ...result?.schools,
        ]);
      setSchoolLoading(false);
    } catch (error) {
      console.log("_getGrades::error:: ", error);
      setSchoolLoading(false);
    }
  };

  const _sendOtp = () => {
    setCaptchaCall(!captchaCall);

    var regex = /^[a-zA-Z ]*$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    setValidated(true);
    if (input?.state_id == "" || !input?.state_id)
      return setErrorMessage({
        ...errorMessage,
        state_id: "Select your country",
      });
    if (input?.city_id == "" || !input?.city_id)
      return setErrorMessage({
        ...errorMessage,
        city_id: "Select your county",
      });
    if (input?.site_id == "" || !input?.site_id)
      return setErrorMessage({
        ...errorMessage,
        site_id: "Select your school",
      });
    if (input?.name?.length < 3 || !input?.name || !regex.test(input?.name))
      return setErrorMessage({
        ...errorMessage,
        name: "Please enter full name",
      });
    if (input?.designation == "" || !input?.designation)
      return setErrorMessage({
        ...errorMessage,
        designation: "Select your designation",
      });
    if (input?.grade == "" || !input?.grade)
      return setErrorMessage({ ...errorMessage, grade: "Select your year" });
    if (input?.mobile == "" || !input?.mobile || input?.mobile?.length < 12)
      return setErrorMessage({
        ...errorMessage,
        mobile: "Enter correct number",
      });
    if (
      input?.email?.length < 3 ||
      !input?.email ||
      !regexEmail.test(input?.email)
    )
      return setErrorMessage({ ...errorMessage, email: "Enter valid email" });

    setLoading(true);

    Api.sendTeacherOtp({
      ...input,
      type: "email",
      captcha_token: captcha ?? "",
      timezone: new Date().getTimezoneOffset(),
      utm_source: router.query?.utm_source ?? "",
      utm_medium: router.query?.utm_medium ?? "",
      utm_campaign: router.query?.utm_campaign ?? "",
      section: "1",
      site_id: input?.site_id,
      mobile: input?.mobile,
    })
      .then((data) => {
        data?.lead_id && setLeadId(data.lead_id);
        setShowOtpBox(true);
        setOtp("");
        setEdit((prev) => !prev);
        setErrorType("success");
        setError("Verification Code has been sent to email");

        setTimerCompleted(false);
        timerCompletedFunction();
        setTimerRefersh(!timerRefersh);
        setLoading(false);
        showOtpBox && otpRef.current.focus();
      })
      .catch((error) => {
        console.log("_sendOtp::error ", error);
        setEdit(false);
        setLoading(true);
        setErrorType("danger");
        setError(error.toString());
      });
  };
  const _verifyOtp = () => {
    // setLoader(true);

    // Api.verifySignupOtp({
    Api.verifyTeacherOtp({
      // mobile: input?.mobile ?? '',
      email: input?.email ?? "",
      otp,
      type: "email",
      lead_id: leadId,
    })
      .then((data) => {
        data?.user && _doLogin(data?.user);
        // setLoader(false);
        router.push("/teacher");
        // setMobileValidateShow(true);
      })
      .catch((error) => {
        setErrorType("danger");
        setError(error.toString());
        console.log("_verifyOtp::error ", error);
        // setLoader(false);
        // setMobileValidateShow(false);
      });
  };

  const _onVerifyCaptcha = useCallback(
    (token) => {
      captchaToken.current = token;
      captcha != token &&
        dispatch({
          type: "UPDATE_CAPTCHA",
          payload: {
            captcha: token ?? "",
          },
        });
    },
    [captchaToken, captchaCall]
  );

  const timerCompletedFunction = () => {
    setTimeout(() => {
      setTimerCompleted(true);
    }, 30000);
  };

  const _handleChange = (event) => {
    setErrorMessage({});
    const { value, name } = event.target;
    var regex = /^[a-zA-Z ]*$/;
    var regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (name == "name" || name == "name") {
      if (!regex.test(value)) {
        setErrorMessage({
          ...errorMessage,
          [name]: "Only alphabets are allowed",
        });
      } else delete errorMessage[name];
    }

    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const _renderOtpBox = () => {
    return (
      <>
        <p className="mt-3 fs-6 font-normal">
          Please enter the verification code below sent on the above email
        </p>

        <OtpInput
          length={6}
          activeBorderColor={"#5262CB"}
          value={otp}
          width={isMobile ? 45 : 60}
          height={isMobile ? 40 : 50}
          borderRadius={10}
          ref={otpRef}
          onChange={(otp) => setOtp(otp)}
        />

        <Row className="align-items-center mt-3">
          <Col className="col-auto">
            <Button
              variant="link"
              className="text-success"
              disabled={!timerCompleted}
              onClick={() => {
                _sendOtp();
                otpRef.current.focus();
                setTimerCompleted(false);
                setTimerRefersh(!timerRefersh);
              }}
            >
              Resend OTP
            </Button>{" "}
            {!timerCompleted && (
              <>
                in{" "}
                <Timer
                  value={30}
                  refresh={timerRefersh}
                  onComplete={() => setTimerCompleted(true)}
                />
              </>
            )}
          </Col>
        </Row>
      </>
    );
  };

  const _renderForm = () => (
    <Form
      className="form-signup"
      ref={formRef}
      noValidate
      validated={validated}
    >
      <Form.Group className="mb-3">
        <Select
          placeholder="Country"
          name="country_id"
          required
          classNamePrefix="filter-select"
          isDisabled
          className="rounded-10"
          value={
            input?.country_id && {
              label:
                countries.find((item) => item.id == (input?.country_id ?? ""))
                  ?.name ?? "",
              value:
                countries.find((item) => item.id == (input?.country_id ?? ""))
                  ?.id ?? "",
            }
          }
          // onChange={(value) =>
          //   _handleChange({
          //     target: {
          //       value: value?.value,
          //       name: "country_id",
          //     },
          //   })
          // }
          // options={countries.map((item) => ({
          //   label: item.name,
          //   value: item.id,
          // }))}
        />
        <Form.Control.Feedback type="invalid">
          Please select Your Country.
        </Form.Control.Feedback>
      </Form.Group>

      <Stack direction="horizontal" gap={2} className="w-100 mb-3">
        <Form.Group className="w-50">
          <Select
            placeholder="Country"
            name="state_id"
            required={true}
            classNamePrefix="filter-select"
            value={
              input?.state_id && {
                label:
                  states.find((item) => item.id == (input?.state_id ?? ""))
                    ?.name ?? "",
                value:
                  states.find((item) => item.id == (input?.state_id ?? ""))
                    ?.id ?? "",
              }
            }
            onChange={(value) => (
              _handleChange({
                target: {
                  value: value?.value,
                  name: "state_id",
                },
              }),
              setInput((prev) => ({
                ...prev,
                site_id: "",
                city_id: "",
              }))
            )}
            options={states.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
          <Form.Control.Feedback type="invalid">
            Please select Your State.
          </Form.Control.Feedback>
          {errorMessage?.state_id && (
            <span className="ps-3 text-danger">{errorMessage?.state_id}</span>
          )}
        </Form.Group>

        <Form.Group className="w-50">
          <Select
            placeholder="County"
            name="city_id"
            required={true}
            classNamePrefix="filter-select"
            value={
              input?.city_id
                ? {
                    label:
                      cities.find((item) => item.id == (input?.city_id ?? ""))
                        ?.name ?? "",
                    value:
                      cities.find((item) => item.id == (input?.city_id ?? ""))
                        ?.id ?? "",
                  }
                : null
            }
            onChange={(value) => (
              _handleChange({
                target: {
                  value: value?.value,
                  name: "city_id",
                },
              }),
              setInput((prev) => ({
                ...prev,
                site_id: "",
              }))
            )}
            options={cities.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
          <Form.Control.Feedback type="invalid">
            Please select Your County.
          </Form.Control.Feedback>
          {errorMessage?.city_id && (
            <span className="ps-3 text-danger">{errorMessage?.city_id}</span>
          )}
        </Form.Group>
        {cityLoading && <Spinner animation="border" size="sm" variant="dark" />}
      </Stack>
      <Stack direction="horizontal" gap={2} className="w-100">
        <Form.Group className="mb-3 w-100">
          <Select
            placeholder="School Name"
            name="school"
            required={true}
            classNamePrefix="filter-select"
            value={
              input?.site_id && {
                label:
                  schools.find((item) => item.id == (input?.site_id ?? ""))
                    ?.name ?? "",
                value:
                  schools.find((item) => item.id == (input?.site_id ?? ""))
                    ?.id ?? "",
              }
            }
            onChange={(value) =>
              _handleChange({
                target: {
                  value: value?.value,
                  name: "site_id",
                },
              })
            }
            // onInputChange={(e) => setSearchSchool(e)}
            options={schools.map((item) => ({
              label: item.name,
              value: item.id,
            }))}
          />
          <Form.Control.Feedback type="invalid">
            Please select Your School.
          </Form.Control.Feedback>
          {errorMessage?.site_id && (
            <span className="ps-3 text-danger">{errorMessage?.site_id}</span>
          )}
        </Form.Group>
        {schoolLoading && (
          <Spinner animation="border" size="sm" variant="dark" />
        )}
      </Stack>

      <Form.Group className="mb-3" controlId="formName">
        <Form.Control
          type="text"
          name="name"
          placeholder="Student Name"
          value={input?.name ?? ""}
          className="font-normal"
          //   required={true}
          onChange={_handleChange}
          onKeyDown={(event) => {
            if (!/[a-zA-Z\s]/.test(event.key)) {
              event.preventDefault();
            }
          }}
          onPaste={(event) => {
            const pastedData = event.clipboardData.getData("text/plain");
            if (/[^a-zA-Z\s]/ims.test(pastedData)) {
              event.preventDefault();
            }
          }}
        />
        <Form.Control.Feedback type="invalid">
          Please enter Your Name.
        </Form.Control.Feedback>
        {errorMessage?.name && (
          <span className="ps-3 text-danger">{errorMessage?.name}</span>
        )}
      </Form.Group>

      <PhoneInput
        key={countryCode}
        country={countryCode}
        value={input?.mobile ?? ""}
        autoFormat={true}
        enableSearch={true}
        disableSearchIcon={true}
        countryCodeEditable={false}
        placeholder="Phone Number"
        inputProps={{
          required: true,
          // disabled: !edit,
        }}
        onChange={(mobile) =>
          _handleChange({
            target: {
              value: mobile,
              name: "mobile",
            },
          })
        }
        isValid={true}
      />
      {errorMessage?.mobile && (
        <span className="ps-3 text-danger">{errorMessage?.mobile}</span>
      )}
      <Stack
        direction="horizontal"
        className="bg-white rounded-3 py-1 login-input"
      >
        <Form.Group className="w-100" controlId="formName">
          <Form.Control
            type="email"
            name="email"
            placeholder="Email"
            value={input?.email}
            className="font-normal"
            onChange={_handleChange}
          />
        </Form.Group>
        <Button
          variant={!edit ? "warning" : "success"}
          className="me-2 p-2 rounded-3"
          disabled={!timerCompleted || loading}
          onClick={() => {
            if (edit) {
              _sendOtp();
            } else {
              setEdit((prev) => !prev);
            }
          }}
        >
          {!edit ? "Edit" : "Get Otp"}
        </Button>
      </Stack>
      {errorMessage?.email && (
        <span className="ps-3 text-danger">{errorMessage?.email}</span>
      )}
      {showOtpBox && _renderOtpBox()}

      <div className="text-center">
        <Button
          variant="success fs-5 py-2 px-3 my-3"
          style={{ borderRadius: "15px" }}
          onClick={_verifyOtp}
          disabled={leadId == ""}
        >
          Create Account
        </Button>
      </div>
    </Form>
  );
  return (
    <GoogleReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA}>
      <GoogleReCaptcha
        onVerify={_onVerifyCaptcha}
        refreshReCaptcha={refreshReCaptcha}
      />

      <div
        className={`${styles.formBox} px-sm-5 px-3 py-2 mx-2 mx-sm-0 mb-sm-0 mb-2`}
      >
        <h1
          className={`text-center pt-2 ${inter.className} ${styles.formHeading}`}
        >
          Student Sign Up
        </h1>

        {/* {formLoading ? (
          <div className="d-flex justify-content-center">
            <Spinner animation="border" size="lg" variant="success" />
          </div>
        ) : (
          _renderForm()
        )} */}
        {_renderForm()}
        <small className=" d-block text-center w-100">
          By signing up you are agreeing to our{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-nowrap fw-bolder"
            href={`${process.env.NEXT_PUBLIC_ROOT}terms/uk`}
            legacyBehavior
          >
            <u>Terms & Conditions</u>,
          </a>{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-nowrap fw-bolder"
            legacyBehavior
            href={`${process.env.NEXT_PUBLIC_ROOT}eula/uk`}
          >
            <u>End-User License Agreement</u>
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary text-nowrap fw-bolder"
            href={`${process.env.NEXT_PUBLIC_ROOT}privacy/uk`}
            legacyBehavior
          >
            <u>Privacy Policy</u>
          </a>
        </small>
      </div>

      {error && (
        <ErrorToast
          error={error}
          errorType={errorType}
          onClose={() => setError(null)}
          autohide={true}
          delay={3000}
        />
      )}
    </GoogleReCaptchaProvider>
  );
};

export default StudentForm;
